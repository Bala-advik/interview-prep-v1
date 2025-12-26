import React, { useState, useMemo, useEffect } from 'react';
import { QuizData, UserAnswers, QuizQuestion } from '../types';
import Button from './Button';
import { ChevronRight, List, Check, CheckCircle2, AlertCircle, XCircle, CheckCircle, Clock, AlertTriangle, Target, Trophy, Zap } from 'lucide-react';

interface QuizRunnerProps {
  data: QuizData;
  onFinish: (answers: UserAnswers) => void;
  onExit: () => void;
  instantFeedback: boolean;
  timeLimit: number | null; // Seconds
  username?: string;
}

const QuizRunner: React.FC<QuizRunnerProps> = ({ data, onFinish, onExit, instantFeedback, timeLimit, username }) => {
  // Flatten questions for sequential flow
  const flatQuestions = useMemo(() => {
    const list: { question: QuizQuestion; sectionTitle: string; sectionId: string; indexInSection: number; totalInSection: number, globalIndex: number }[] = [];
    let globalCounter = 0;
    data.sections.forEach(section => {
      section.questions.forEach((q, idx) => {
        list.push({
          question: q,
          sectionTitle: section.title,
          sectionId: section.id,
          indexInSection: idx + 1,
          totalInSection: section.questions.length,
          globalIndex: globalCounter
        });
        globalCounter++;
      });
    });
    return list;
  }, [data]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [timeLeft, setTimeLeft] = useState<number | null>(timeLimit);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  // Stats Calculation
  const totalQuestions = flatQuestions.length;
  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.entries(answers).reduce((acc, [qId, ansIdx]) => {
     const q = flatQuestions.find(i => i.question.id === qId)?.question;
     return (q && q.correctOptionIndex === ansIdx) ? acc + 1 : acc;
  }, 0);
  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  
  const getMotivationalMessage = () => {
    if (answeredCount === 0) return "Ready to start?";
    if (accuracy === 100) return "Perfect streak! 🔥";
    if (accuracy >= 90) return "Unstoppable! 🚀";
    if (accuracy >= 80) return "Doing great! 🌟";
    if (accuracy >= 60) return "Good progress 🎯";
    return "Keep learning 💪";
  };

  // Timer Logic
  useEffect(() => {
    if (timeLeft === null) return;
    if (timeLeft <= 0) {
      onFinish(answers);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => (prev !== null ? prev - 1 : null));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, answers, onFinish]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const currentItem = flatQuestions[currentIndex];
  const question = currentItem.question;
  const isAnswered = answers[question.id] !== undefined;

  const handleOptionClick = (index: number) => {
    // If instant feedback is enabled and already answered, don't allow changing
    if (instantFeedback && isAnswered) return;
    
    setAnswers(prev => ({ ...prev, [question.id]: index }));
  };

  const handleNext = () => {
    if (currentIndex < flatQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleSubmit = () => {
    onFinish(answers);
  };

  const jumpToQuestion = (globalIndex: number) => {
    setCurrentIndex(globalIndex);
  };

  const progress = ((Object.keys(answers).length) / flatQuestions.length) * 100;
  
  // Calculate Section Info
  const isSectionChange = currentIndex > 0 && flatQuestions[currentIndex].sectionId !== flatQuestions[currentIndex - 1].sectionId;

  const timerColor = (timeLeft !== null && timeLeft < 60) ? 'text-red-600 animate-pulse' : 'text-gray-700 dark:text-gray-300';

  // Mobile Stats Card (Keep Separate)
  const MobileStatsCard = () => (
    <div className="mb-6 md:hidden bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 relative overflow-hidden">
       <div className="flex items-center justify-between mb-3 relative z-10">
         <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
              <Zap size={14} className="text-yellow-500" /> 
              {username ? <span className="truncate max-w-[150px]">{username} - </span> : ''} Stats
            </h4>
            <div className="text-sm font-semibold text-primary-600 dark:text-primary-400 mt-1">
              {getMotivationalMessage()}
            </div>
         </div>
         <div className="text-right">
            <div className="text-2xl font-black text-gray-900 dark:text-white leading-none">{accuracy}%</div>
         </div>
       </div>
       <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
             <div 
                className={`h-full rounded-full transition-all duration-500 ${
                  accuracy >= 80 ? 'bg-green-500' : accuracy >= 60 ? 'bg-yellow-500' : 'bg-primary-500'
                }`} 
                style={{ width: `${accuracy}%` }}
              ></div>
       </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => setShowExitConfirm(true)} className="text-sm font-medium text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
          ← Exit Quiz
        </button>
        
        {timeLeft !== null && (
          <div className={`flex items-center gap-2 font-mono font-bold text-lg px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 ${timerColor}`}>
            <Clock size={20} />
            <span>{formatTime(timeLeft)}</span>
          </div>
        )}

        <div className="text-right">
          <h2 className="text-sm font-bold text-gray-900 dark:text-white hidden sm:block">{data.title}</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">Question {currentIndex + 1} of {flatQuestions.length}</p>
        </div>
      </div>

      {/* Progress Bar (Total Completion) - Only show if NOT in practice mode to avoid clutter */}
      {!instantFeedback && (
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-8">
          <div 
            className="bg-primary-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      <div className="flex-1 flex flex-col-reverse md:flex-row gap-8 items-start">
        
        {/* Sidebar Navigation - Unified Sticky Card */}
        <div className="w-full md:w-80 shrink-0">
          <div className="sticky top-24 max-h-[calc(100vh-8rem)] flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            
            {/* Stats Section (Top of Sidebar) */}
            {instantFeedback && (
              <div className="p-5 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 relative">
                 <div className="absolute top-0 right-0 p-3 opacity-5 pointer-events-none">
                    <Trophy size={60} className="text-primary-600 dark:text-primary-400 rotate-12" />
                 </div>
                 
                 <div className="flex justify-between items-start mb-4 relative z-10">
                   <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Zap size={14} className="text-yellow-500" /> 
                        {username ? <span className="truncate max-w-[150px]">{username} - </span> : ''}Practice Stats
                      </h4>
                      <div className="text-sm font-semibold text-primary-600 dark:text-primary-400 mt-0.5">
                        {getMotivationalMessage()}
                      </div>
                   </div>
                   <div className="text-right">
                      <div className="text-3xl font-black text-gray-900 dark:text-white leading-none tracking-tight">{accuracy}%</div>
                      <div className="text-[10px] text-gray-400 uppercase font-bold mt-1">Accuracy</div>
                   </div>
                 </div>

                 <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white dark:bg-gray-700/50 rounded-lg p-2 text-center border border-gray-100 dark:border-gray-600 shadow-sm">
                       <div className="text-xs text-green-600 dark:text-green-400 font-bold">{correctCount}</div>
                       <div className="text-[10px] text-gray-400">Correct</div>
                    </div>
                    <div className="bg-white dark:bg-gray-700/50 rounded-lg p-2 text-center border border-gray-100 dark:border-gray-600 shadow-sm">
                       <div className="text-xs text-gray-600 dark:text-gray-300 font-bold">{totalQuestions - answeredCount}</div>
                       <div className="text-[10px] text-gray-400">Left</div>
                    </div>
                    <div className="bg-white dark:bg-gray-700/50 rounded-lg p-2 text-center border border-gray-100 dark:border-gray-600 shadow-sm">
                       <div className="text-xs text-blue-600 dark:text-blue-400 font-bold">{answeredCount}</div>
                       <div className="text-[10px] text-gray-400">Done</div>
                    </div>
                 </div>
              </div>
            )}

            {/* Course Structure List (Scrollable Part) */}
            <div className="flex-1 overflow-y-auto min-h-0 custom-scrollbar flex flex-col">
              <div className="p-4 bg-gray-50/30 dark:bg-gray-800/30 border-b border-gray-100 dark:border-gray-700 sticky top-0 backdrop-blur-sm z-10">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                  <List size={14} /> Course Structure
                </h4>
              </div>

              <div className="p-4 space-y-6">
                {data.sections.map((section) => {
                  const sectionQuestions = flatQuestions.filter(fq => fq.sectionId === section.id);
                  const answeredCount = sectionQuestions.filter(fq => answers[fq.question.id] !== undefined).length;
                  const isComplete = answeredCount === sectionQuestions.length;

                  return (
                    <div key={section.id}>
                      <div className="flex justify-between items-center mb-2.5">
                        <h5 className={`text-xs font-bold uppercase tracking-wide ${currentItem.sectionId === section.id ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'}`}>
                          {section.title}
                        </h5>
                        {isComplete && <CheckCircle2 size={14} className="text-green-500" />}
                      </div>
                      <div className="grid grid-cols-5 gap-1.5">
                         {sectionQuestions.map((q) => {
                           const isCurrent = q.globalIndex === currentIndex;
                           const userAnswer = answers[q.question.id];
                           const isQAnswered = userAnswer !== undefined;
                           
                           let btnClass = "border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-800";
                           
                           if (instantFeedback && isQAnswered) {
                             const isCorrect = userAnswer === q.question.correctOptionIndex;
                             btnClass = isCorrect 
                                ? "border-green-500 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                                : "border-red-500 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400";
                           } else if (isQAnswered) {
                             btnClass = "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400";
                           }

                           if (isCurrent) {
                             btnClass = "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 ring-1 ring-primary-500";
                           }

                           return (
                             <button 
                               key={q.question.id} 
                               onClick={() => jumpToQuestion(q.globalIndex)}
                               className={`h-7 w-full rounded text-[10px] font-bold border flex items-center justify-center transition-all ${btnClass}`}
                               title={q.question.text}
                             >
                               {q.indexInSection}
                             </button>
                           );
                         })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Main Question Card */}
        <div className="flex-1 w-full min-w-0">
          {instantFeedback && <MobileStatsCard />}

          {isSectionChange && (
            <div className="mb-4 inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-bold tracking-wide uppercase animate-in slide-in-from-left-2 fade-in">
              New Section
            </div>
          )}
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 md:p-8 relative overflow-hidden transition-colors">
             {/* Section Badge */}
             <div className="absolute top-0 right-0 bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-bl-xl border-l border-b border-gray-100 dark:border-gray-600">
               <span className="text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                 {currentItem.sectionTitle}
               </span>
             </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-4 mb-8 leading-relaxed">
              {question.text}
            </h3>

            <div className="space-y-3">
              {question.options.map((option, idx) => {
                const isSelected = answers[question.id] === idx;
                
                let optionClass = "border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-500 hover:bg-gray-50 dark:hover:bg-gray-700/50 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200";
                let icon = null;

                if (instantFeedback && isAnswered) {
                   const isCorrect = idx === question.correctOptionIndex;
                   const isWrongSelection = isSelected && !isCorrect;

                   if (isCorrect) {
                      optionClass = "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300";
                      icon = <CheckCircle size={20} className="text-green-600 dark:text-green-400" />;
                   } else if (isWrongSelection) {
                      optionClass = "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300";
                      icon = <XCircle size={20} className="text-red-600 dark:text-red-400" />;
                   } else {
                      optionClass += " opacity-60"; // Dim other options
                   }
                } else {
                   // Exam mode (Deferred feedback)
                   if (isSelected) {
                     optionClass = "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-200 ring-1 ring-primary-500";
                     icon = <Check size={20} className="text-primary-600 dark:text-primary-400" />;
                   }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(idx)}
                    disabled={instantFeedback && isAnswered}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center group ${optionClass}`}
                  >
                    <span className="font-medium">{option}</span>
                    {icon}
                  </button>
                );
              })}
            </div>
            
            {/* Instant Feedback Explanation */}
            {instantFeedback && isAnswered && (
               <div className="mt-8 animate-in slide-in-from-bottom-2 fade-in duration-300">
                 <div className={`p-5 rounded-xl mb-6 ${answers[question.id] === question.correctOptionIndex 
                    ? 'bg-green-50 border border-green-100 dark:bg-green-900/20 dark:border-green-800' 
                    : 'bg-blue-50 border border-blue-100 dark:bg-blue-900/20 dark:border-blue-800'}`}>
                   <div className="flex items-start gap-3">
                     <AlertCircle size={20} className={`shrink-0 ${answers[question.id] === question.correctOptionIndex 
                        ? "text-green-600 dark:text-green-400 mt-0.5" 
                        : "text-blue-600 dark:text-blue-400 mt-0.5"}`} 
                     />
                     <div>
                       <h4 className="font-bold text-sm mb-1.5 text-gray-900 dark:text-white">Explanation</h4>
                       <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed opacity-90">{question.explanation}</p>
                     </div>
                   </div>
                 </div>
               </div>
            )}

            {/* Controls */}
            <div className="mt-8 flex justify-between items-center pt-6 border-t border-gray-100 dark:border-gray-700">
               <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                 {isAnswered 
                   ? (instantFeedback ? 'Answer Recorded' : 'Selection Saved') 
                   : 'Select an option to continue'}
               </div>
               <div className="flex gap-3">
                 {currentIndex < flatQuestions.length - 1 ? (
                    <Button onClick={handleNext} className="w-full md:w-auto px-6">
                      Next
                      <ChevronRight size={18} />
                    </Button>
                 ) : (
                    <Button onClick={handleSubmit} variant="primary" className="w-full md:w-auto bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-500 shadow-green-500/20">
                      Submit Quiz
                    </Button>
                 )}
               </div>
            </div>

          </div>
        </div>

      </div>
      
      {/* Exit Confirmation Modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md p-6 border border-gray-100 dark:border-gray-700 scale-100 animate-in zoom-in-95 duration-200">
             <div className="flex items-center gap-3 mb-4 text-red-600 dark:text-red-400">
               <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-full">
                  <AlertTriangle size={24} />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white">Exit Quiz?</h3>
             </div>
             <p className="text-gray-600 dark:text-gray-300 mb-6">
               Are you sure you want to exit? Your progress will be lost and you will return to the setup screen.
             </p>
             <div className="flex justify-end gap-3">
               <Button variant="outline" onClick={() => setShowExitConfirm(false)}>Cancel</Button>
               <Button variant="danger" onClick={onExit}>Exit Quiz</Button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizRunner;