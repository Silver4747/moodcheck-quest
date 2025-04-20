
import React, { useState } from 'react';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Sun, Moon, Heart, BookOpen } from 'lucide-react';

const SelfCareChecklist = () => {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  
  const tasks = [
    { id: '1', icon: Sun, title: 'Morning Meditation', description: '5 minutes of mindful breathing' },
    { id: '2', icon: Heart, title: 'Physical Activity', description: '30 minutes of exercise or walking' },
    { id: '3', icon: BookOpen, title: 'Reading', description: 'Read something enjoyable for 15 minutes' },
    { id: '4', icon: Moon, title: 'Evening Reflection', description: 'Write down 3 good things from today' },
  ];

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev =>
      prev.includes(taskId)
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

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
            <h1 className="text-3xl font-medium text-calm-900 mb-2">Daily Self-Care Checklist</h1>
            <p className="text-calm-700 mb-8">Take care of yourself by completing these daily activities</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {tasks.map((task) => (
                <Card
                  key={task.id}
                  className={`p-6 cursor-pointer transition-all ${
                    completedTasks.includes(task.id) ? 'bg-mind-50 border-mind-200' : ''
                  }`}
                  onClick={() => toggleTask(task.id)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`rounded-full p-2 ${
                      completedTasks.includes(task.id) ? 'bg-mind-100 text-mind-600' : 'bg-calm-100 text-calm-600'
                    }`}>
                      <task.icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-medium mb-1">{task.title}</h3>
                      <p className="text-calm-600 text-sm">{task.description}</p>
                    </div>
                    
                    {completedTasks.includes(task.id) && (
                      <Check className="w-6 h-6 text-mind-600" />
                    )}
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-lg text-calm-700 mb-4">
                {completedTasks.length} of {tasks.length} tasks completed
              </p>
              {completedTasks.length === tasks.length && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-mind-600 font-medium">
                    Great job completing all your self-care tasks today!
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default SelfCareChecklist;
