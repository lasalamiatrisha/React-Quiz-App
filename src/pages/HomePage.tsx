import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the</h1>
      <h1 className="home-heading-main">Frontend Quiz!</h1>
      <button className="start-btn" onClick={() => navigate('/quiz')}>
        Start Quiz
      </button>
    </div>
  );
};