import React from 'react';

interface AnswerOptionProps {
  option: string;
  isSelected: boolean;
  onSelect: (option: string) => void;
}

export const AnswerOption: React.FC<AnswerOptionProps> = ({ option, isSelected, onSelect }) => {
  return (
    <label className="radio-option">
      <input
        type="radio"
        name="quiz-option"
        value={option}
        checked={isSelected}
        onChange={() => onSelect(option)}
      />
      <span>{option}</span>
    </label>
  );
};