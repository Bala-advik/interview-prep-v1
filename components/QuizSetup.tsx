import React, { useState } from "react";
import { QuizMode, QuizData } from "../types";
import {
  DEFAULT_QUIZ_JSON,
  REACT_QUIZ,
  NODE_QUIZ,
  PLAYWRIGHT_QUIZ,
} from "../constants";
import { generateQuiz } from "../services/geminiService";
import Button from "./Button";
import {
  BrainCircuit,
  Code,
  Play,
  Zap,
  GraduationCap,
  Clock,
  FileJson,
  AlignLeft,
  X,
  CheckSquare,
  Square,
  User,
  Library,
} from "lucide-react";

interface QuizSetupProps {
  onStartQuiz: (
    data: QuizData,
    timeLimit: number | null,
    username: string
  ) => void;
  setLoading: (loading: boolean) => void;
  instantFeedback: boolean;
  setInstantFeedback: (value: boolean) => void;
}

const QuizSetup: React.FC<QuizSetupProps> = ({
  onStartQuiz,
  setLoading,
  instantFeedback,
  setInstantFeedback,
}) => {
  const [mode, setMode] = useState<QuizMode>(QuizMode.AI);
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("Intermediate");
  const [manualJson, setManualJson] = useState(
    JSON.stringify(DEFAULT_QUIZ_JSON, null, 2)
  );
  const [jsonError, setJsonError] = useState<string | null>(null);

  // Timer State
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timerDuration, setTimerDuration] = useState(15); // Minutes

  // Module Selection State
  const [pendingQuiz, setPendingQuiz] = useState<QuizData | null>(null);
  const [showModuleSelection, setShowModuleSelection] = useState(false);
  const [selectedSectionIds, setSelectedSectionIds] = useState<Set<string>>(
    new Set()
  );
  const [username, setUsername] = useState("");

  const processQuizData = (data: QuizData) => {
    if (instantFeedback) {
      setPendingQuiz(data);
      setSelectedSectionIds(new Set(data.sections.map((s) => s.id)));
      setShowModuleSelection(true);
    } else {
      const limit = timerEnabled ? timerDuration * 60 : null;
      onStartQuiz(data, limit, "");
    }
  };

  const handleGenerate = async () => {
    if (!topic.trim()) return;

    setLoading(true);
    try {
      const data = await generateQuiz(topic, difficulty);
      processQuizData(data);
    } catch (error) {
      alert((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleManualStart = () => {
    try {
      const parsed = JSON.parse(manualJson) as QuizData;
      // Basic validation
      if (!parsed.sections || !Array.isArray(parsed.sections)) {
        throw new Error("Invalid format: 'sections' array is missing.");
      }
      setJsonError(null);
      processQuizData(parsed);
    } catch (e) {
      setJsonError((e as Error).message);
    }
  };

  const handlePredefinedSelect = (value: string) => {
    if (!value) return;

    if (value === "react") {
      processQuizData(REACT_QUIZ);
    } else if (value === "node") {
      processQuizData(NODE_QUIZ);
    } else if (value === "playwright") {
      processQuizData(PLAYWRIGHT_QUIZ);
    }
  };

  const handleStartFilteredQuiz = () => {
    if (!pendingQuiz) return;

    const filteredSections = pendingQuiz.sections.filter((s) =>
      selectedSectionIds.has(s.id)
    );

    if (filteredSections.length === 0) {
      alert("Please select at least one module.");
      return;
    }

    const finalQuiz = { ...pendingQuiz, sections: filteredSections };
    const limit = timerEnabled ? timerDuration * 60 : null;

    setShowModuleSelection(false);
    setPendingQuiz(null);
    onStartQuiz(finalQuiz, limit, username);
  };

  const toggleSectionSelection = (id: string) => {
    const newSet = new Set(selectedSectionIds);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedSectionIds(newSet);
  };

  const toggleAllSections = () => {
    if (!pendingQuiz) return;
    if (selectedSectionIds.size === pendingQuiz.sections.length) {
      setSelectedSectionIds(new Set());
    } else {
      setSelectedSectionIds(new Set(pendingQuiz.sections.map((s) => s.id)));
    }
  };

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(manualJson);
      setManualJson(JSON.stringify(parsed, null, 2));
      setJsonError(null);
    } catch (e) {
      setJsonError("Invalid JSON: Cannot format");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 relative">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
          Tech Interview{" "}
          <span className="text-primary-600 dark:text-primary-400">Pro</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Master your next technical interview. Generate AI-powered quizzes or
          load your own custom scenarios.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-colors">
        <div className="flex border-b border-gray-100 dark:border-gray-700">
          <button
            onClick={() => setMode(QuizMode.AI)}
            className={`flex-1 py-4 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
              mode === QuizMode.AI
                ? "bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 border-b-2 border-primary-500"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            <BrainCircuit size={18} />
            AI Generator
          </button>
          <button
            onClick={() => setMode(QuizMode.MANUAL)}
            className={`flex-1 py-4 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
              mode === QuizMode.MANUAL
                ? "bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 border-b-2 border-primary-500"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            <Code size={18} />
            JSON Editor
          </button>
        </div>

        <div className="p-8">
          {/* Settings Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Feedback Mode Toggle */}
            <div className="p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl border border-gray-100 dark:border-gray-700 flex flex-col justify-center min-h-[100px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      instantFeedback
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {instantFeedback ? (
                      <Zap size={20} />
                    ) : (
                      <GraduationCap size={20} />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {instantFeedback ? "Practice" : "Exam"}
                    </h4>
                  </div>
                </div>
                <button
                  onClick={() => setInstantFeedback(!instantFeedback)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 ${
                    instantFeedback
                      ? "bg-primary-600"
                      : "bg-gray-200 dark:bg-gray-600"
                  }`}
                >
                  <span className="sr-only">Toggle feedback</span>
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      instantFeedback ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 pl-1">
                {instantFeedback
                  ? "Instant feedback enabled"
                  : "Feedback at the end"}
              </p>
            </div>

            {/* Timer Toggle */}
            <div className="p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl border border-gray-100 dark:border-gray-700 flex flex-col justify-center min-h-[100px]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      timerEnabled
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      Timer
                    </h4>
                  </div>
                </div>
                <button
                  onClick={() => setTimerEnabled(!timerEnabled)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 ${
                    timerEnabled
                      ? "bg-primary-600"
                      : "bg-gray-200 dark:bg-gray-600"
                  }`}
                >
                  <span className="sr-only">Toggle timer</span>
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      timerEnabled ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {timerEnabled ? (
                <div className="flex items-center gap-1.5 mt-1 animate-in fade-in slide-in-from-top-1">
                  {[5, 10, 15, 30].map((mins) => (
                    <button
                      key={mins}
                      onClick={() => setTimerDuration(mins)}
                      className={`px-1.5 py-1 text-xs rounded border transition-all ${
                        timerDuration === mins
                          ? "bg-primary-600 text-white border-primary-600"
                          : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-primary-400"
                      }`}
                    >
                      {mins}m
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 pl-1">
                  Timer disabled
                </p>
              )}
            </div>

            {/* Predefined Quiz Dropdown (Beside Timer) */}
            <div className="p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl border border-gray-100 dark:border-gray-700 flex flex-col justify-center min-h-[100px]">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2 rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                  <Library size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                    Quick Start
                  </h4>
                </div>
              </div>
              <div className="relative">
                <select
                  className="w-full text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg p-2 pr-8 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none appearance-none cursor-pointer"
                  onChange={(e) => handlePredefinedSelect(e.target.value)}
                  value=""
                >
                  <option value="" disabled>
                    Select Local Quiz...
                  </option>
                  <option value="react">react_quiz.json</option>
                  <option value="node">node_quiz.json</option>
                  <option value="playwright">playwright.json</option>
                </select>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {mode === QuizMode.AI ? (
            <div className="space-y-6 animate-in fade-in duration-500">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Topic or Skill
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g. React Hooks, System Design, Python Algorithms"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-shadow bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Difficulty
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["Junior", "Intermediate", "Senior"].map((level) => (
                    <button
                      key={level}
                      onClick={() => setDifficulty(level)}
                      className={`py-2 px-4 rounded-lg border text-sm font-medium transition-all ${
                        difficulty === level
                          ? "bg-primary-600 text-white border-primary-600 shadow-md"
                          : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-500"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={handleGenerate}
                  disabled={!topic.trim()}
                  className="w-full py-3 text-lg"
                >
                  <BrainCircuit size={20} />
                  Generate Quiz
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4 animate-in fade-in duration-500">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <FileJson size={16} />
                  <span>Quiz JSON Data</span>
                </label>
                <button
                  onClick={formatJSON}
                  className="text-xs flex items-center gap-1 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium px-2 py-1 rounded hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                >
                  <AlignLeft size={14} /> Format JSON
                </button>
              </div>

              <div className="relative">
                <textarea
                  value={manualJson}
                  onChange={(e) => setManualJson(e.target.value)}
                  rows={15}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 font-mono text-sm bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-green-400 focus:bg-white dark:focus:bg-slate-950 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-y"
                  spellCheck={false}
                />
              </div>

              {jsonError && (
                <p className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded border border-red-100 dark:border-red-900/30">
                  Error: {jsonError}
                </p>
              )}

              <div className="pt-4">
                <Button
                  onClick={handleManualStart}
                  className="w-full py-3 text-lg"
                >
                  <Play size={20} />
                  Start from JSON
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Features Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
        <div className="p-4">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4">
            <BrainCircuit />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            AI Generated
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Instantly create tailored quizzes for any tech stack or seniority
            level using Gemini 2.5.
          </p>
        </div>
        <div className="p-4">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Code />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            Strict JSON Mode
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Paste your own interview questions following our schema with smart
            auto-formatting.
          </p>
        </div>
        <div className="p-4">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Play />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            Simulated Exams
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Practice with optional timers and instant feedback to mimic real
            interview conditions.
          </p>
        </div>
      </div>

      {/* Module Selection Modal */}
      {showModuleSelection && pendingQuiz && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-2xl p-6 border border-gray-100 dark:border-gray-700 flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Select Modules
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Choose topics to focus on for this practice session.
                </p>
              </div>
              <button
                onClick={() => {
                  setShowModuleSelection(false);
                  setPendingQuiz(null);
                }}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            <div className="mb-4 animate-in slide-in-from-top-2 fade-in">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Candidate Name{" "}
                <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={16} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-shadow"
                />
              </div>
            </div>

            <div className="flex justify-between items-center mb-2 px-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {selectedSectionIds.size} selected
              </span>
              <button
                onClick={toggleAllSections}
                className="text-xs font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400"
              >
                {selectedSectionIds.size === pendingQuiz.sections.length
                  ? "Unselect All"
                  : "Select All"}
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 mb-6 px-1 custom-scrollbar">
              {pendingQuiz.sections.map((section) => {
                const isSelected = selectedSectionIds.has(section.id);
                return (
                  <div
                    key={section.id}
                    onClick={() => toggleSectionSelection(section.id)}
                    className={`flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                    }`}
                  >
                    <div
                      className={`mt-1 ${
                        isSelected
                          ? "text-primary-600 dark:text-primary-400"
                          : "text-gray-400"
                      }`}
                    >
                      {isSelected ? (
                        <CheckSquare size={20} />
                      ) : (
                        <Square size={20} />
                      )}
                    </div>
                    <div>
                      <h4
                        className={`font-semibold text-sm ${
                          isSelected
                            ? "text-primary-900 dark:text-primary-100"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {section.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {section.questions.length} Questions
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end pt-4 border-t border-gray-100 dark:border-gray-700">
              <Button
                onClick={handleStartFilteredQuiz}
                className="w-full md:w-auto"
              >
                Start Practice
                <Play size={16} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizSetup;
