
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
      <motion.h3 
        className="text-xl font-medium text-white mb-6 flex"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.span 
          className="text-mind-400 mr-3"
          animate={{ 
            scale: [1, 1.1, 1],
            rotateZ: [0, 5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            repeatType: "mirror" 
          }}
        >
          {index + 1}.
        </motion.span>
        <span className="text-gradient">{question}</span>
      </motion.h3>
      
      <RadioGroup
        value={value?.toString() || ''}
        onValueChange={(value) => onChange(parseInt(value))}
        className="space-y-4"
      >
        {options.map((option, idx) => (
          <motion.div 
            key={option.value}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
            whileHover={{ scale: 1.02, translateX: 5 }}
            className={`radio-option ${value === option.value ? 'selected dark:bg-mind-900/50 dark:border-mind-500' : 'dark:bg-calm-800/30 dark:border-calm-700 hover:dark:border-mind-700'}`}
            style={{ 
              transformStyle: "preserve-3d",
              transition: "all 0.3s ease" 
            }}
          >
            <RadioGroupItem 
              value={option.value.toString()} 
              id={`q${index}-option-${option.value}`} 
              className="mr-3 mt-0.5"
            />
            <Label 
              htmlFor={`q${index}-option-${option.value}`} 
              className="flex-1 text-white"
            >
              {option.label}
            </Label>
            
            {value === option.value && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute inset-0 bg-mind-500/10 dark:bg-mind-500/5 rounded-lg -z-10"
                style={{ transformOrigin: "center" }}
              />
            )}
          </motion.div>
        ))}
      </RadioGroup>
    </motion.div>
  );
};

export default QuizQuestion;
