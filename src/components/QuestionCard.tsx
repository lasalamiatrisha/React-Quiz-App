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
    <div className="question-card">
      <h3>{question.questionText}</h3>
      <div className="options-grid">
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
