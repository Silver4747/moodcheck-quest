
import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentQuestion, totalQuestions }) => {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2 text-sm text-calm-400">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={currentQuestion}
          transition={{ duration: 0.5 }}
        >
          Question {currentQuestion + 1} of {totalQuestions}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={`progress-${currentQuestion}`}
          transition={{ duration: 0.5 }}
        >
          {Math.round(progress)}% Complete
        </motion.span>
      </div>
      <div className="w-full h-2 bg-calm-800 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-mind-700 to-mind-500"
          initial={{ width: `${((currentQuestion) / totalQuestions) * 100}%` }}
          animate={{ width: `${progress}%` }}
          transition={{ 
            duration: 0.5, 
            ease: "easeInOut" 
          }}
        >
          <motion.div
            className="absolute top-0 right-0 h-full w-4 bg-white/20"
            animate={{
              x: [10, -10, 10],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "mirror"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;
