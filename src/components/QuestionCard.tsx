import React from 'react';
import type { Question } from '../types';
import { AnswerOption } from './AnswerOption';

interface QuestionCardProps {
  question: Question;
  selectedOption: string | null;
  onSelectOption: (option: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOption,
  onSelectOption
}) => {
  return (
    <div className="quiz-card-content">
      <h2 className="questions-title">Questions:</h2>
      <hr className="divider" />
      <p className="question-text">
        {question.questionText} <span className="required-asterisk">*</span>
      </p>
      <div className="radio-grid">
        {question.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            isSelected={selectedOption === option}
            onSelect={onSelectOption}
          />
        ))}
      </div>
    </div>
  );
};