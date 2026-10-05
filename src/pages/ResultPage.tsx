import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const ResultPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score ?? 0;
  const total = location.state?.total ?? 10;
  const incorrect = total - score;
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="result-container">
      <p className="result-subtext">Quiz Completed</p>
      <h1 className="result-heading">Your score:</h1>

      <div className="score-card">
        <span className="score-text">{score} / {total}</span>
      </div>

      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-label">Total Questions:</span>
          <span className="stat-value">{total}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Correct Answers:</span>
          <span className="stat-value correct-text">{score}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Incorrect Answers:</span>
          <span className="stat-value incorrect-text">{incorrect}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Percentage:</span>
          <span className="stat-value">{percentage}%</span>
        </div>
      </div>

      <div className="result-buttons">
        <button className="start-btn" onClick={() => navigate('/quiz')}>
          Retake Quiz
        </button>
        <button className="home-btn" onClick={() => navigate('/')}>
          Return Home
        </button>
      </div>
    </div>
  );
};