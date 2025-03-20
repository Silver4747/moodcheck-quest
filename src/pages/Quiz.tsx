
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { questions } from '@/utils/quizData';
import QuizQuestion from '@/components/QuizQuestion';
import ProgressBar from '@/components/ProgressBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Force dark mode on component mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
    return () => {
      // Don't remove dark mode on unmount to maintain dark theme
    };
  }, []);
  
  const handleAnswerChange = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };
  
  const goToNextQuestion = () => {
    if (answers[currentQuestion] === null) {
      toast("Please select an answer before continuing", {
        description: "We need your response to provide accurate results.",
        icon: <AlertCircle className="h-5 w-5 text-amber-500" />,
      });
      return;
    }
    
    if (currentQuestion < questions.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setIsAnimating(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 500);
    } else {
      navigate('/results', { state: { answers } });
    }
  };
  
  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion - 1);
        setIsAnimating(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 500);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-calm-900 text-white">
      <Header />
      <ThemeToggle />
      
      <main className="flex-grow bg-calm-900 relative overflow-hidden">
        {/* 3D animated background elements */}
        <motion.div 
          className="absolute top-20 -right-20 w-80 h-80 bg-mind-800/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "mirror" 
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-mind-700/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "mirror" 
          }}
        />
        
        <div className="max-w-3xl mx-auto px-6 py-12 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-medium text-white mb-2">Depression Screening Assessment</h1>
            <p className="text-calm-300 mb-8">
              Please answer each question honestly based on how you've been feeling over the past two weeks.
            </p>
            
            <ProgressBar 
              currentQuestion={currentQuestion} 
              totalQuestions={questions.length} 
            />
            
            <motion.div
              className="neo-blur rounded-xl p-8 mb-8 transform-gpu"
              whileHover={{ scale: 1.01 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                initial={{ opacity: 1, scale: 1, rotateX: 0 }}
                animate={isAnimating ? { opacity: 0, scale: 0.9, rotateX: -10 } : { opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <QuizQuestion
                  question={questions[currentQuestion].text}
                  options={questions[currentQuestion].options}
                  value={answers[currentQuestion]}
                  onChange={handleAnswerChange}
                  index={currentQuestion}
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex justify-between mt-12"
              >
                <Button
                  variant="outline"
                  onClick={goToPreviousQuestion}
                  disabled={currentQuestion === 0}
                  className="flex items-center bg-calm-800 border-calm-700 hover:bg-calm-700 text-white"
                >
                  <ArrowLeft size={16} className="mr-2" />
                  Previous
                </Button>
                
                <Button 
                  onClick={goToNextQuestion}
                  className="bg-mind-600 hover:bg-mind-700 text-white"
                >
                  {currentQuestion < questions.length - 1 ? (
                    <>
                      Next
                      <ArrowRight size={16} className="ml-2" />
                    </>
                  ) : (
                    'View Results'
                  )}
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="border border-calm-700 rounded-lg p-4 bg-calm-800/70 backdrop-blur-lg"
            >
              <h3 className="text-sm font-medium text-white flex items-center">
                <AlertCircle size={16} className="mr-2 text-amber-500" />
                Important Note
              </h3>
              <p className="text-calm-300 text-sm mt-2">
                If you're experiencing thoughts of self-harm or suicide, please call 988 (Suicide & Crisis Lifeline) 
                immediately for 24/7 support. This assessment is not a substitute for professional help.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quiz;
