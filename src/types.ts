export interface Question {
  id: number;
  questionText: string;
  options: string[];
  correctAnswer: string;
}

export interface QuizState {
  userAnswers: Record<number, string>;
  score: number;
}