import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ResultCard } from '../components/ResultCard';

export const ResultPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score ?? 0;
  const total = location.state?.total ?? 10;

  return (
    <div className="page-wrapper">
      <ResultCard
        score={score}
        totalQuestions={total}
        onRetake={() => navigate('/quiz')}
        onHome={() => navigate('/')}
      />
    </div>
  );
};
