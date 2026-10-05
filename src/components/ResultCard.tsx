import React from 'react';

interface ResultCardProps {
  score: number;
  totalQuestions: number;
  onRetake: () => void;
  onHome: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  score,
  totalQuestions,
  onRetake,
  onHome
}) => {
  const incorrect = totalQuestions - score;
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="result-card">
      <h2>Quiz Completed</h2>
      <h3>Your score:</h3>
      <div className="score-display">{score} / {totalQuestions}</div>

      <div className="details">
        <p><strong>Total Questions:</strong> {totalQuestions}</p>
        <p><strong>Correct Answers:</strong> {score}</p>
        <p><strong>Incorrect Answers:</strong> {incorrect}</p>
        <p><strong>Percentage:</strong> {percentage}%</p>
      </div>

      <div className="button-group">
        <button onClick={onRetake} className="btn primary">Start Quiz / Retake</button>
        <button onClick={onHome} className="btn secondary">Return Home</button>
      </div>
    </div>
  );
};
