
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';
import { questions } from '@/utils/quizData';
import QuizQuestion from '@/components/QuizQuestion';
import ProgressBar from '@/components/ProgressBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowLeft, ArrowRight } from 'lucide-react';

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  
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
      setCurrentQuestion(currentQuestion + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/results', { state: { answers } });
    }
  };
  
  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-calm-50">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-medium text-calm-900 mb-2">Depression Screening Assessment</h1>
            <p className="text-calm-700 mb-8">
              Please answer each question honestly based on how you've been feeling over the past two weeks.
            </p>
            
            <ProgressBar 
              currentQuestion={currentQuestion} 
              totalQuestions={questions.length} 
            />
            
            <div className="glass-morphism rounded-xl p-8 mb-8">
              <QuizQuestion
                question={questions[currentQuestion].text}
                options={questions[currentQuestion].options}
                value={answers[currentQuestion]}
                onChange={handleAnswerChange}
                index={currentQuestion}
              />
              
              <div className="flex justify-between mt-12">
                <Button
                  variant="outline"
                  onClick={goToPreviousQuestion}
                  disabled={currentQuestion === 0}
                  className="flex items-center"
                >
                  <ArrowLeft size={16} className="mr-2" />
                  Previous
                </Button>
                
                <Button 
                  onClick={goToNextQuestion}
                  className="bg-mind-600 hover:bg-mind-700"
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
              </div>
            </div>
            
            <div className="border border-calm-300 rounded-lg p-4 bg-calm-50">
              <h3 className="text-sm font-medium text-calm-900 flex items-center">
                <AlertCircle size={16} className="mr-2 text-amber-500" />
                Important Note
              </h3>
              <p className="text-calm-700 text-sm mt-2">
                If you're experiencing thoughts of self-harm or suicide, please call 988 (Suicide & Crisis Lifeline) 
                immediately for 24/7 support. This assessment is not a substitute for professional help.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quiz;
