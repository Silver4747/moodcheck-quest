
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, RotateCounter } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
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
        className="w-14 h-14 rounded-full bg-mind-600 dark:bg-mind-700 text-white shadow-lg"
        size="icon"
      >
        <motion.div
          initial={{ rotateZ: 0 }}
          animate={{ rotateZ: theme === 'dark' ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute"
        >
          {theme === 'light' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default ThemeToggle;
