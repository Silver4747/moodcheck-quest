
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { Smile, Meh, Frown, Sun, Cloud, CloudRain } from 'lucide-react';

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  
  const moods = [
    { icon: Smile, label: "Happy", color: "text-green-500" },
    { icon: Meh, label: "Neutral", color: "text-yellow-500" },
    { icon: Frown, label: "Sad", color: "text-blue-500" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-calm-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-medium text-calm-900 mb-6">How are you feeling today?</h1>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {moods.map((mood) => (
                <Card
                  key={mood.label}
                  className={`p-6 cursor-pointer transition-all ${
                    selectedMood === mood.label ? 'ring-2 ring-mind-500' : ''
                  }`}
                  onClick={() => setSelectedMood(mood.label)}
                >
                  <div className="flex flex-col items-center text-center">
                    <mood.icon className={`w-12 h-12 ${mood.color} mb-4`} />
                    <h3 className="text-lg font-medium">{mood.label}</h3>
                  </div>
                </Card>
              ))}
            </div>
            
            {selectedMood && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <p className="text-lg text-calm-700 mb-4">
                  You're feeling {selectedMood.toLowerCase()} today. Would you like to write about it?
                </p>
                <Button className="bg-mind-600 hover:bg-mind-700">
                  Open Journal
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default MoodTracker;
