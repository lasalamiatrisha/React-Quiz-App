import React from 'react';

interface QuizHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
}

export const QuizHeader: React.FC<QuizHeaderProps> = ({ currentQuestion, totalQuestions }) => {
  return (
    <div className="quiz-header">
      <h2>Frontend Quiz</h2>
      <p>Question {currentQuestion} of {totalQuestions}</p>
    </div>
  );
};
