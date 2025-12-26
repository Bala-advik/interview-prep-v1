import React, { useState, useEffect } from 'react';
import { AppState, QuizData, UserAnswers } from './types';
import QuizSetup from './components/QuizSetup';
import QuizRunner from './components/QuizRunner';
import QuizResults from './components/QuizResults';
import { Loader2, Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.SETUP);
  const [currentQuiz, setCurrentQuiz] = useState<QuizData | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  // Default to true as per requirement
  const [instantFeedback, setInstantFeedback] = useState(true);
  const [timeLimit, setTimeLimit] = useState<number | null>(null);
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const startQuiz = (data: QuizData, limit: number | null = null, user: string = '') => {
    setCurrentQuiz(data);
    setTimeLimit(limit);
    setUserAnswers({});
    setUsername(user);
    setAppState(AppState.QUIZ);
  };

  const finishQuiz = (answers: UserAnswers) => {
    setUserAnswers(answers);
    setAppState(AppState.RESULTS);
  };

  const resetApp = () => {
    setAppState(AppState.SETUP);
    setCurrentQuiz(null);
    setUserAnswers({});
    setTimeLimit(null);
    setUsername('');
  };

  const retryQuiz = () => {
    setUserAnswers({});
    setAppState(AppState.QUIZ);
  };

  // Render Logic
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-primary-100 selection:text-primary-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      
      {loading && (
        <div className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col items-center">
            <Loader2 className="w-12 h-12 text-primary-600 animate-spin mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Generating Quiz...</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Crafting challenging questions via Gemini AI</p>
          </div>
        </div>
      )}

      {/* Navbar / Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={resetApp}>
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">
              IP
            </div>
            <span className="font-bold text-gray-900 dark:text-white tracking-tight">InterviewPrep<span className="text-primary-600">.ai</span></span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              {appState === AppState.QUIZ && currentQuiz && (
                <span className="hidden sm:inline-block">Playing: {currentQuiz.title}</span>
              )}
            </div>
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        {appState === AppState.SETUP && (
          <QuizSetup 
            onStartQuiz={startQuiz} 
            setLoading={setLoading} 
            instantFeedback={instantFeedback}
            setInstantFeedback={setInstantFeedback}
          />
        )}

        {appState === AppState.QUIZ && currentQuiz && (
          <QuizRunner 
            data={currentQuiz} 
            onFinish={finishQuiz} 
            onExit={resetApp}
            instantFeedback={instantFeedback}
            timeLimit={timeLimit}
            username={username}
          />
        )}

        {appState === AppState.RESULTS && currentQuiz && (
          <QuizResults 
            data={currentQuiz} 
            answers={userAnswers} 
            onRetry={retryQuiz}
            onHome={resetApp}
          />
        )}
      </main>

    </div>
  );
};

export default App;