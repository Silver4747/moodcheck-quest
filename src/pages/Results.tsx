import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { calculateResult, ResultCategory } from '@/utils/quizData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight, CheckCircle, FileText, Redo } from 'lucide-react';

const getSeverityColor = (severity: string): string => {
  switch (severity) {
    case 'minimal': return 'text-green-600';
    case 'mild': return 'text-blue-600';
    case 'moderate': return 'text-amber-600';
    case 'moderately-severe': return 'text-orange-600';
    case 'severe': return 'text-red-600';
    default: return 'text-calm-900';
  }
};

const getSeverityBg = (severity: string): string => {
  switch (severity) {
    case 'minimal': return 'bg-green-50';
    case 'mild': return 'bg-blue-50';
    case 'moderate': return 'bg-amber-50';
    case 'moderately-severe': return 'bg-orange-50';
    case 'severe': return 'bg-red-50';
    default: return 'bg-calm-50';
  }
};

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers as (number | null)[] | undefined;
  const [result, setResult] = useState<null | ResultCategory>(answers ? calculateResult(answers) : null);
  
  useEffect(() => {
    if (!answers) {
      toast("Please complete the assessment first", {
        description: "You'll be redirected to the assessment page.",
        icon: <AlertCircle className="h-5 w-5 text-amber-500" />,
      });
      navigate('/quiz');
    }
  }, [answers, navigate]);
  
  if (!result) {
    return null;
  }
  
  const totalScore = answers?.reduce((sum, current) => sum + (current || 0), 0) || 0;
  const severityColor = getSeverityColor(result.severity);
  const severityBg = getSeverityBg(result.severity);
  
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
            <h1 className="text-3xl font-medium text-calm-900 mb-2">Your Assessment Results</h1>
            <p className="text-calm-700 mb-8">
              Below are the results of your depression screening assessment based on your responses.
            </p>
            
            <div className="glass-morphism rounded-xl p-8 mb-8">
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className={`${severityBg} inline-block rounded-full px-4 py-2 mb-4`}
                >
                  <span className={`font-medium ${severityColor}`}>{result.title}</span>
                </motion.div>
                
                <h2 className="text-2xl font-medium text-calm-900 mb-2">Your PHQ-9 Score: {totalScore}</h2>
                <p className="text-calm-700">
                  {result.description}
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-calm-900 mb-4">Recommendations</h3>
                <ul className="space-y-3">
                  {result.recommendations.map((recommendation, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="flex items-start"
                    >
                      <CheckCircle size={20} className="text-mind-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-calm-800">{recommendation}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  onClick={() => navigate('/quiz')}
                  className="flex items-center justify-center"
                >
                  <Redo size={16} className="mr-2" />
                  Take Assessment Again
                </Button>
                
                <Button 
                  onClick={() => navigate('/resources')}
                  className="bg-mind-600 hover:bg-mind-700 flex items-center justify-center"
                >
                  <FileText size={16} className="mr-2" />
                  View Resources
                </Button>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="border border-calm-300 rounded-lg p-4 bg-calm-50">
                <h3 className="text-sm font-medium text-calm-900 flex items-center">
                  <AlertCircle size={16} className="mr-2 text-amber-500" />
                  Important Disclaimer
                </h3>
                <p className="text-calm-700 text-sm mt-2">
                  This screening tool provides an assessment based on your responses, but it is not a medical 
                  diagnosis. Depression can only be diagnosed by a qualified healthcare professional through 
                  in-person evaluation. If you're concerned about your mental health, please consult with a 
                  healthcare provider.
                </p>
              </div>
              
              {result.severity === 'moderately-severe' || result.severity === 'severe' ? (
                <div className="border border-red-300 rounded-lg p-4 bg-red-50 mt-4">
                  <h3 className="text-sm font-medium text-red-800 flex items-center">
                    <AlertCircle size={16} className="mr-2 text-red-600" />
                    Urgent Support
                  </h3>
                  <p className="text-red-700 text-sm mt-2">
                    Your score suggests you may be experiencing significant symptoms. If you're having thoughts of 
                    harming yourself, please call the 988 Suicide & Crisis Lifeline at 988 or text 988. They provide 
                    24/7, free and confidential support.
                  </p>
                </div>
              ) : null}
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Results;
