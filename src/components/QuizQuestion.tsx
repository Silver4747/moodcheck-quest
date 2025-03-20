
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

interface QuizQuestionProps {
  question: string;
  options: { value: number; label: string }[];
  value: number | null;
  onChange: (value: number) => void;
  index: number;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  options,
  value,
  onChange,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-8"
    >
      <h3 className="text-xl font-medium text-calm-900 mb-4">
        <span className="text-mind-600 mr-2">{index + 1}.</span>
        {question}
      </h3>
      
      <RadioGroup
        value={value?.toString() || ''}
        onValueChange={(value) => onChange(parseInt(value))}
        className="space-y-3"
      >
        {options.map((option) => (
          <div 
            key={option.value}
            className={`radio-option ${value === option.value ? 'selected' : ''}`}
          >
            <RadioGroupItem 
              value={option.value.toString()} 
              id={`q${index}-option-${option.value}`} 
              className="mr-3 mt-0.5"
            />
            <Label 
              htmlFor={`q${index}-option-${option.value}`} 
              className="flex-1 text-calm-800"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </motion.div>
  );
};

export default QuizQuestion;
