export interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

export interface QuizSection {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

export interface QuizData {
  title: string;
  description: string;
  sections: QuizSection[];
}

export interface UserAnswers {
  [questionId: string]: number; // Maps question ID to selected option index
}

export enum AppState {
  SETUP = 'SETUP',
  LOADING = 'LOADING',
  QUIZ = 'QUIZ',
  RESULTS = 'RESULTS',
}

export enum QuizMode {
  AI = 'AI',
  MANUAL = 'MANUAL',
}
