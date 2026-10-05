import React from 'react';

interface AnswerOptionProps {
  option: string;
  isSelected: boolean;
  onSelect: (option: string) => void;
}

export const AnswerOption: React.FC<AnswerOptionProps> = ({ option, isSelected, onSelect }) => {
  return (
    <button
      className={`answer-option ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(option)}
    >
      {option}
    </button>
  );
};
