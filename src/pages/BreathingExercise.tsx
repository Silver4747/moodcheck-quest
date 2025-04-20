
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, Pause, RefreshCw } from 'lucide-react';

const BreathingExercise = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [count, setCount] = useState(4);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isActive) {
      timer = setInterval(() => {
        setCount((prev) => {
          if (prev <= 1) {
            switch (phase) {
              case 'inhale':
                setPhase('hold');
                return 7;
              case 'hold':
                setPhase('exhale');
                return 8;
              case 'exhale':
                setPhase('inhale');
                return 4;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive, phase]);

  const resetExercise = () => {
    setIsActive(false);
    setPhase('inhale');
    setCount(4);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-calm-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          <h1 className="text-3xl font-medium text-calm-900 mb-8">4-7-8 Breathing Exercise</h1>
          
          <motion.div
            className="relative w-60 h-60 mx-auto mb-8"
            animate={{
              scale: phase === 'inhale' ? 1.2 : phase === 'hold' ? 1.2 : 1,
            }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-mind-100 rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl font-bold text-mind-600">{count}</div>
            </div>
          </motion.div>
          
          <p className="text-xl text-calm-700 mb-6">
            {phase === 'inhale' ? 'Inhale' : phase === 'hold' ? 'Hold' : 'Exhale'}
          </p>
          
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              onClick={() => setIsActive(!isActive)}
              className="bg-mind-600 hover:bg-mind-700"
            >
              {isActive ? <Pause className="mr-2" /> : <Play className="mr-2" />}
              {isActive ? 'Pause' : 'Start'}
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={resetExercise}
            >
              <RefreshCw className="mr-2" />
              Reset
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BreathingExercise;
