
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      // Force dark theme by default
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button 
        onClick={toggleTheme}
        className="w-14 h-14 rounded-full bg-mind-700 dark:bg-mind-800 text-white shadow-lg relative overflow-hidden"
        size="icon"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-mind-600/30 to-transparent dark:from-mind-700/40 rounded-full" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ 
              duration: 0.5, 
              type: "spring",
              stiffness: 100
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative"
          >
            {theme === 'light' ? (
              <Sun className="h-6 w-6" />
            ) : (
              <Moon className="h-6 w-6" />
            )}
          </motion.div>
        </AnimatePresence>
        
        <motion.div 
          className="absolute inset-0 bg-mind-400/20 dark:bg-mind-700/30 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "mirror" 
          }}
        />
      </Button>
    </motion.div>
  );
};

export default ThemeToggle;
