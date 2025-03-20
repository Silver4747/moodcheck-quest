
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { getMentalHealthResources, getIndianMentalHealthResources } from '@/utils/quizData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ExternalLink, Phone, Heart, BookOpen, Globe, MapPin, Sparkles, BadgeIndianRupee, Move3D } from 'lucide-react';

const Resources = () => {
  const navigate = useNavigate();
  const resources = getMentalHealthResources();
  const indianResources = getIndianMentalHealthResources();
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 200, 300], [1, 0.8, 0.6]);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 50,
      },
    }),
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-calm-50 dark:bg-calm-900 transition-colors duration-300">
      <Header />
      <ThemeToggle />
      
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mb-16">
              <motion.div 
                style={{ y: y1 }}
                className="absolute -z-10 top-0 right-10 w-64 h-64 bg-mind-200/30 dark:bg-mind-700/20 rounded-full blur-3xl"
              />
              <motion.div 
                style={{ y: y2 }}
                className="absolute -z-10 bottom-10 left-20 w-72 h-72 bg-blue-200/30 dark:bg-blue-700/20 rounded-full blur-3xl"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-calm-900 dark:text-white">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="inline-block"
                  >
                    Mental Health Resources
                  </motion.span>
                </h1>
                <p className="text-calm-700 dark:text-calm-300 max-w-2xl mx-auto">
                  Browse these trusted resources for mental health support, information, and crisis assistance.
                </p>
              </motion.div>
            </div>
            
            {/* Crisis Resources */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="glass-morphism rounded-xl p-8 border-l-4 border-l-mind-600">
                <motion.div
                  className="flex items-center mb-4"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Phone size={24} className="text-mind-600 dark:text-mind-400 mr-3" />
                  <h2 className="text-xl font-medium text-calm-900 dark:text-white">
                    Immediate Support Resources
                  </h2>
                </motion.div>
                <p className="text-calm-700 dark:text-calm-300 mb-6">
                  If you're experiencing a mental health crisis or having thoughts of suicide, 
                  please reach out to one of these services immediately:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    className="bg-mind-50 dark:bg-mind-900/40 rounded-lg p-5 shadow-md tilt-animation"
                    whileHover={{ scale: 1.03, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-lg font-medium text-calm-900 dark:text-white mb-1">988 Suicide & Crisis Lifeline</h3>
                    <p className="text-calm-700 dark:text-calm-400 text-sm mb-3">24/7 support for people in distress</p>
                    <div className="bg-white dark:bg-calm-800 rounded-md p-3 text-center font-medium text-mind-700 dark:text-mind-400">
                      Call or Text: 988
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-mind-50 dark:bg-mind-900/40 rounded-lg p-5 shadow-md tilt-animation"
                    whileHover={{ scale: 1.03, rotate: -1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-lg font-medium text-calm-900 dark:text-white mb-1">Crisis Text Line</h3>
                    <p className="text-calm-700 dark:text-calm-400 text-sm mb-3">Text with a trained crisis counselor</p>
                    <div className="bg-white dark:bg-calm-800 rounded-md p-3 text-center font-medium text-mind-700 dark:text-mind-400">
                      Text HOME to 741741
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>
            
            {/* Indian Resources */}
            <motion.section 
              ref={ref}
              className="mb-16"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                visible: { 
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                },
                hidden: { opacity: 0 }
              }}
            >
              <motion.div 
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 }
                }}
                className="flex items-center mb-6 space-x-3"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-full">
                  <BadgeIndianRupee className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold text-calm-900 dark:text-white">Indian Mental Health Resources</h2>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {indianResources.map((resource, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 }}
                    className="h-full"
                  >
                    <Card className="card-hover dark-card h-full overflow-hidden">
                      <div className="p-6 relative">
                        <div className="absolute top-0 right-0 w-16 h-16 -mt-8 -mr-8 bg-orange-500/10 dark:bg-orange-600/20 rounded-full blur-2xl"></div>
                        
                        <div className="flex items-start space-x-2 mb-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
                            <Globe className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                          </span>
                          <div className="flex-1">
                            <h3 className="text-lg font-medium text-calm-900 dark:text-white mb-1">{resource.name}</h3>
                            <div className="flex items-center text-sm text-orange-600 dark:text-orange-400">
                              <MapPin size={12} className="mr-1" />
                              <span>{resource.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-calm-700 dark:text-calm-400 text-sm mb-4">{resource.description}</p>
                        
                        {resource.contact && (
                          <div className="flex items-center mb-4">
                            <Phone size={14} className="text-mind-500 dark:text-mind-400 mr-2" />
                            <span className="text-sm text-calm-800 dark:text-calm-300">{resource.contact}</span>
                          </div>
                        )}
                        
                        <a 
                          href={resource.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 font-medium text-sm"
                        >
                          Visit Website
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>
            
            {/* Global Resources */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center mb-6 space-x-3"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-mind-600 text-white rounded-full">
                  <Globe className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold text-calm-900 dark:text-white">Global Resources</h2>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 0.5 : -0.5 }}
                    className="h-full"
                  >
                    <Card className="card-hover h-full dark:bg-calm-800/50 dark:border-calm-700/50">
                      <div className="p-6">
                        <h3 className="text-lg font-medium text-calm-900 dark:text-white mb-2">{resource.name}</h3>
                        <p className="text-calm-700 dark:text-calm-400 text-sm mb-4">{resource.description}</p>
                        
                        {resource.contact && (
                          <div className="flex items-center mb-4">
                            <Phone size={16} className="text-mind-500 dark:text-mind-400 mr-2" />
                            <span className="text-sm text-calm-800 dark:text-calm-300">{resource.contact}</span>
                          </div>
                        )}
                        
                        <a 
                          href={resource.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-mind-600 hover:text-mind-700 dark:text-mind-400 dark:hover:text-mind-300 font-medium text-sm"
                        >
                          Visit Website
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>
            
            {/* 3D Animated CTA Section */}
            <motion.section
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-mind-600/20 to-blue-600/20 dark:from-mind-800/30 dark:to-blue-900/30"></div>
                
                <motion.div
                  className="absolute -bottom-16 -right-16 w-64 h-64 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <motion.div
                  className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <div className="relative glass-morphism p-8 md:p-10 flex flex-col md:flex-row items-center">
                  <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex items-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles size={28} className="text-mind-600 dark:text-mind-400 mr-3" />
                        </motion.div>
                        <h2 className="text-2xl font-bold text-calm-900 dark:text-white">
                          Haven't taken the assessment yet?
                        </h2>
                      </div>
                      <p className="text-calm-700 dark:text-calm-300 mt-3">
                        Our evidence-based depression screening can help you understand your symptoms 
                        and suggest appropriate next steps for your mental well-being journey.
                      </p>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        onClick={() => navigate('/quiz')}
                        className="bg-mind-600 hover:bg-mind-700 dark:bg-mind-700 dark:hover:bg-mind-600 text-white font-medium py-3 px-8 rounded-full shadow-lg"
                      >
                        <BookOpen size={18} className="mr-2" />
                        Take the Assessment
                      </Button>
                    </motion.div>
                  </div>
                  
                  <div className="md:w-1/3 flex justify-center">
                    <motion.div
                      className="relative w-40 h-40"
                      animate={{ 
                        rotateY: 360,
                      }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-mind-300 to-mind-600 dark:from-mind-500 dark:to-mind-800 rounded-full opacity-20"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                          />
                          <motion.div 
                            className="relative z-10 w-32 h-32 flex items-center justify-center"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            <Heart size={64} className="text-mind-600 dark:text-mind-400" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
