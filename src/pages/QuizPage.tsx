import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Question } from '../types';
import { questions } from '../data/questions';
import { QuizHeader } from '../components/QuizHeader';
import { ProgressBar } from '../components/ProgressBar';
import { QuestionCard } from '../components/QuestionCard';

export const QuizPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const navigate = useNavigate();

  const currentQuestion = questions[currentIndex];
  const selectedOption = selectedAnswers[currentQuestion.id] || null;

  const handleSelectOption = (option: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: option
    }));
  };

  const handleNext = () => {
    if (!selectedOption) return;

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      let score = 0;
      questions.forEach((q: Question) => {
        if (selectedAnswers[q.id] === q.correctAnswer) {
          score += 1;
        }
      });
      navigate('/result', { state: { score, total: questions.length } });
    }
  };

  return (
    <div className="quiz-container">
      <QuizHeader currentQuestion={currentIndex + 1} totalQuestions={questions.length} />
      <ProgressBar current={currentIndex + 1} total={questions.length} />
      <QuestionCard
        question={currentQuestion}
        selectedOption={selectedOption}
        onSelectOption={handleSelectOption}
      />
      <div className="actions">
        <button
          className="btn submit-btn"
          disabled={!selectedOption}
          onClick={handleNext}
        >
          {currentIndex === questions.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
};