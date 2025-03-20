
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Activity, Shield, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);
  
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-calm-900 transition-colors duration-300" ref={containerRef}>
      <Header />
      <ThemeToggle />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-mind-100 to-white dark:from-mind-900/30 dark:to-calm-900 py-24 overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.div 
              style={{ y: y1, rotate: rotate1 }} 
              className="absolute -top-24 -right-24 w-96 h-96 bg-mind-200 dark:bg-mind-800/30 rounded-full opacity-50 blur-3xl"
            />
            <motion.div 
              style={{ y: y2, rotate: rotate2 }} 
              className="absolute -bottom-24 -left-24 w-96 h-96 bg-mind-200 dark:bg-mind-800/30 rounded-full opacity-50 blur-3xl"
            />
          </div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-medium text-calm-900 dark:text-white leading-tight mb-6">
                Take a step toward understanding your <span className="text-mind-600 dark:text-mind-400">mental health</span>
              </h1>
              <p className="text-lg text-calm-700 dark:text-calm-300 max-w-2xl mx-auto mb-10">
                Our evidence-based screening tool helps you assess symptoms of depression and provides guidance for your next steps.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={() => navigate('/quiz')}
                    className="button-primary text-base px-8 py-6 relative overflow-hidden"
                  >
                    <span className="relative z-10">Take the Assessment</span>
                    <ArrowRight size={18} className="ml-2 relative z-10" />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-mind-500 to-mind-600 dark:from-mind-600 dark:to-mind-700" 
                      animate={{ 
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }} 
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        repeatType: "mirror"
                      }} 
                      style={{ 
                        backgroundSize: '200% 100%',
                      }}
                    />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={() => navigate('/resources')}
                    variant="outline" 
                    className="text-base px-8 py-6 bg-white/80 dark:bg-calm-800/50 backdrop-blur-sm border-calm-200 dark:border-calm-700"
                  >
                    <span>Browse Resources</span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-24 px-6 bg-white dark:bg-calm-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-medium text-calm-900 dark:text-white mb-4">How MindCheck Works</h2>
                <p className="text-lg text-calm-700 dark:text-calm-300 max-w-2xl mx-auto">
                  Our assessment is based on clinically-validated screening tools and provides personalized insights.
                </p>
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  z: 20,
                }}
                className="parallax-tilt glass-morphism rounded-xl p-6"
              >
                <div className="bg-mind-100 dark:bg-mind-800/30 text-mind-600 dark:text-mind-400 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Activity size={24} />
                </div>
                <h3 className="text-xl font-medium text-calm-900 dark:text-white mb-2">Evidence-Based</h3>
                <p className="text-calm-700 dark:text-calm-400">
                  Our assessment is based on the PHQ-9, a clinically validated screening tool for depression.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: -2,
                  z: 20,
                }}
                className="parallax-tilt glass-morphism rounded-xl p-6"
              >
                <div className="bg-mind-100 dark:bg-mind-800/30 text-mind-600 dark:text-mind-400 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-medium text-calm-900 dark:text-white mb-2">Private & Secure</h3>
                <p className="text-calm-700 dark:text-calm-400">
                  Your responses are completely private. We don't store or share your assessment results.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  z: 20,
                }}
                className="parallax-tilt glass-morphism rounded-xl p-6"
              >
                <div className="bg-mind-100 dark:bg-mind-800/30 text-mind-600 dark:text-mind-400 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-medium text-calm-900 dark:text-white mb-2">Supportive Guidance</h3>
                <p className="text-calm-700 dark:text-calm-400">
                  Get personalized recommendations and resources based on your assessment results.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-mind-50 dark:bg-mind-900/20 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ scale }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -z-10 inset-0 rounded-3xl glow-effect"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror"
                  }}
                />

                <div className="glass-morphism rounded-3xl p-12 relative overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-mind-400/5 to-transparent dark:from-mind-600/10"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "mirror"
                    }}
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                  />
                  
                  <h2 className="text-3xl font-medium text-calm-900 dark:text-white mb-4">Ready to take the first step?</h2>
                  <p className="text-lg text-calm-700 dark:text-calm-300 max-w-2xl mx-auto mb-8">
                    The assessment takes less than 5 minutes to complete and provides immediate insights.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      onClick={() => navigate('/quiz')}
                      className="button-primary text-base px-8 py-6"
                    >
                      <span>Start Assessment</span>
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Disclaimer */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="border border-calm-300 dark:border-calm-700 rounded-lg p-6 bg-calm-50 dark:bg-calm-800/20 backdrop-blur-sm">
              <h3 className="text-lg font-medium text-calm-900 dark:text-white mb-2">Important Disclaimer</h3>
              <p className="text-calm-700 dark:text-calm-400 text-sm">
                This assessment is not a diagnostic tool and should not replace professional medical advice, diagnosis, or treatment. 
                If you're experiencing a mental health emergency, please call 988 or go to your nearest emergency room.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
