
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { Smile, Meh, Frown } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { toast } from 'sonner';

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [journalOpen, setJournalOpen] = useState(false);
  const [journalEntry, setJournalEntry] = useState('');
  
  const moods = [
    { icon: Smile, label: "Happy", color: "text-green-500" },
    { icon: Meh, label: "Neutral", color: "text-yellow-500" },
    { icon: Frown, label: "Sad", color: "text-blue-500" },
  ];

  const saveJournalEntry = () => {
    // In a real app, you would save this to a database
    // For now, we'll just show a toast notification
    if (journalEntry.trim()) {
      toast.success("Journal entry saved successfully");
      setJournalEntry('');
      setJournalOpen(false);
    } else {
      toast.error("Please write something before saving");
    }
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
                <Button 
                  className="bg-mind-600 hover:bg-mind-700"
                  onClick={() => setJournalOpen(true)}
                >
                  Open Journal
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>

      <Dialog open={journalOpen} onOpenChange={setJournalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl">
              {selectedMood && `Journal Entry - Feeling ${selectedMood}`}
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground mb-3">Write about how you're feeling today and what might be contributing to your mood.</p>
            <Textarea 
              placeholder="Start writing here..." 
              className="min-h-[200px]"
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setJournalOpen(false)}>Cancel</Button>
            <Button onClick={saveJournalEntry} className="bg-mind-600 hover:bg-mind-700">
              Save Entry
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MoodTracker;
