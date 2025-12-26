import React, { useMemo } from 'react';
import { QuizData, UserAnswers } from '../types';
import Button from './Button';
import { Trophy, RefreshCw, Home, Check, X } from 'lucide-react';

interface QuizResultsProps {
  data: QuizData;
  answers: UserAnswers;
  onRetry: () => void;
  onHome: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ data, answers, onRetry, onHome }) => {
  const stats = useMemo(() => {
    let totalQuestions = 0;
    let correctAnswers = 0;
    const sectionStats: { id: string; title: string; total: number; correct: number }[] = [];

    data.sections.forEach(section => {
      let sectionCorrect = 0;
      section.questions.forEach(q => {
        if (answers[q.id] === q.correctOptionIndex) {
          correctAnswers++;
          sectionCorrect++;
        }
      });
      totalQuestions += section.questions.length;
      sectionStats.push({
        id: section.id,
        title: section.title,
        total: section.questions.length,
        correct: sectionCorrect
      });
    });

    return { totalQuestions, correctAnswers, sectionStats };
  }, [data, answers]);

  const percentage = Math.round((stats.correctAnswers / stats.totalQuestions) * 100);

  let message = "Good effort!";
  let color = "text-blue-600 dark:text-blue-400";
  let bgIcon = "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400";

  if (percentage >= 90) {
    message = "Outstanding! Interview Ready.";
    color = "text-green-600 dark:text-green-400";
    bgIcon = "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400";
  } else if (percentage >= 70) {
    message = "Great job! Almost there.";
    color = "text-primary-600 dark:text-primary-400";
    bgIcon = "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400";
  } else if (percentage < 50) {
    message = "Keep practicing. You got this!";
    color = "text-orange-600 dark:text-orange-400";
    bgIcon = "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400";
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 animate-in slide-in-from-bottom-4 fade-in duration-500">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden text-center p-8 md:p-12 transition-colors">
        
        <div className="mb-6 flex justify-center">
          <div className={`p-4 rounded-full ${bgIcon}`}>
            <Trophy size={48} />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{message}</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">You completed {data.title}</p>

        <div className="flex justify-center items-end gap-2 mb-12">
          <span className={`text-6xl font-black ${color}`}>{percentage}%</span>
          <span className="text-xl text-gray-400 font-medium mb-2">Score</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 text-left">
           {stats.sectionStats.map(stat => {
             const statPct = Math.round((stat.correct / stat.total) * 100);
             return (
               <div key={stat.id} className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                 <div className="flex justify-between items-center mb-2">
                   <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{stat.title}</span>
                   <span className="text-xs font-bold bg-white dark:bg-gray-600 px-2 py-1 rounded shadow-sm border border-gray-100 dark:border-gray-500 text-gray-700 dark:text-gray-200">
                     {stat.correct}/{stat.total}
                   </span>
                 </div>
                 <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                   <div 
                     className={`h-2 rounded-full ${statPct >= 70 ? 'bg-green-500' : 'bg-orange-400'}`}
                     style={{ width: `${statPct}%` }}
                   ></div>
                 </div>
               </div>
             );
           })}
        </div>
        
        {/* Answer Key Review (Accordion style simplified) */}
        <div className="text-left mb-12">
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">Review Incorrect Answers</h3>
          <div className="space-y-4">
            {data.sections.flatMap(s => s.questions).filter(q => answers[q.id] !== q.correctOptionIndex).map(q => (
              <div key={q.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-red-50/30 dark:bg-red-900/10">
                <p className="font-medium text-gray-900 dark:text-gray-200 text-sm mb-3">{q.text}</p>
                <div className="grid gap-2">
                  <div className="flex items-start gap-2 text-xs text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-2 rounded">
                    <X size={14} className="mt-0.5 shrink-0" />
                    <span><span className="font-semibold">You selected:</span> {q.options[answers[q.id]] || "No Answer"}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-2 rounded">
                    <Check size={14} className="mt-0.5 shrink-0" />
                    <span><span className="font-semibold">Correct:</span> {q.options[q.correctOptionIndex]}</span>
                  </div>
                  <div className="mt-1 text-xs text-gray-600 dark:text-gray-400 pl-1 italic">
                     Explanation: {q.explanation}
                  </div>
                </div>
              </div>
            ))}
            {Object.keys(answers).length === 0 && <p className="text-gray-500 dark:text-gray-400 text-sm">No questions answered.</p>}
            {stats.totalQuestions === stats.correctAnswers && <p className="text-green-600 dark:text-green-400 text-sm font-medium">Perfect score! Nothing to review.</p>}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={onRetry} variant="outline">
            <RefreshCw size={18} /> Retry Quiz
          </Button>
          <Button onClick={onHome}>
            <Home size={18} /> Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;