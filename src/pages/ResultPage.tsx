import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const ResultPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score ?? 0;
  const total = location.state?.total ?? 10;

  return (
    <div className="result-container">
      <p className="result-subtext">Quiz Completed</p>
      <h1 className="result-heading">Your score:</h1>
      
      <div className="score-card">
        <span className="score-text">{score} / {total}</span>
      </div>

      <button className="start-btn" onClick={() => navigate('/quiz')}>
        Start Quiz
      </button>
    </div>
  );
};