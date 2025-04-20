
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { ExternalLink, Phone, ArrowRight, BookOpen, Heart } from 'lucide-react';

const Resources = () => {
  const navigate = useNavigate();
  
  const indianResources = [
    {
      name: "NIMHANS",
      description: "National Institute of Mental Health and Neurosciences - India's premier mental health institution offering counseling and support.",
      contact: "080-26995566",
      url: "https://nimhans.ac.in"
    },
    {
      name: "iCall Helpline",
      description: "Free telephone counseling service by TISS providing emotional support and crisis intervention.",
      contact: "022-25521111",
      url: "https://icallhelpline.org/"
    },
    {
      name: "Vandrevala Foundation",
      description: "24/7 mental health support and crisis intervention helpline.",
      contact: "1860-2662-345",
      url: "https://www.vandrevalafoundation.com"
    },
    {
      name: "AASRA",
      description: "24/7 helpline for individuals experiencing emotional crisis or suicidal thoughts.",
      contact: "91-9820466726",
      url: "http://www.aasra.info/"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-calm-50">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-medium text-calm-900 mb-2">Indian Mental Health Resources</h1>
            <p className="text-calm-700 mb-12">
              Access trusted mental health support services across India. These organizations provide counseling, crisis intervention, and emotional support.
            </p>
            
            {/* Crisis Resources */}
            <section className="mb-12">
              <div className="glass-morphism rounded-xl p-8 border-l-4 border-l-mind-600">
                <h2 className="text-xl font-medium text-calm-900 mb-4 flex items-center">
                  <Phone size={20} className="text-mind-600 mr-2" />
                  Immediate Support Resources
                </h2>
                <p className="text-calm-700 mb-6">
                  If you're experiencing a mental health crisis, please reach out to one of these national helplines:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-mind-50 rounded-lg p-5">
                    <h3 className="text-lg font-medium text-calm-900 mb-1">NIMHANS Crisis Helpline</h3>
                    <p className="text-calm-700 text-sm mb-3">24/7 toll-free mental health support</p>
                    <div className="bg-white rounded-md p-3 text-center font-medium text-mind-700">
                      080-26995566
                    </div>
                  </div>
                  
                  <div className="bg-mind-50 rounded-lg p-5">
                    <h3 className="text-lg font-medium text-calm-900 mb-1">iCall Helpline</h3>
                    <p className="text-calm-700 text-sm mb-3">Professional counseling service</p>
                    <div className="bg-white rounded-md p-3 text-center font-medium text-mind-700">
                      022-25521111
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Resource Cards */}
            <section className="mb-12">
              <h2 className="text-2xl font-medium text-calm-900 mb-6">Support Organizations</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {indianResources.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="card-hover h-full">
                      <div className="p-6">
                        <h3 className="text-lg font-medium text-calm-900 mb-2">{resource.name}</h3>
                        <p className="text-calm-700 text-sm mb-4">{resource.description}</p>
                        
                        {resource.contact && (
                          <div className="flex items-center mb-4">
                            <Phone size={16} className="text-mind-500 mr-2" />
                            <span className="text-sm text-calm-800">{resource.contact}</span>
                          </div>
                        )}
                        
                        <a 
                          href={resource.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-mind-600 hover:text-mind-700 font-medium text-sm"
                        >
                          Visit Website
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>
            
            {/* Take Assessment CTA */}
            <section>
              <div className="bg-mind-50 rounded-xl p-8 text-center">
                <div className="max-w-2xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-mind-100 text-mind-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <Heart size={24} />
                    </div>
                    <h2 className="text-2xl font-medium text-calm-900 mb-3">Haven't taken the assessment yet?</h2>
                    <p className="text-calm-700 mb-6">
                      Take our evidence-based depression screening to understand your symptoms and get personalized recommendations.
                    </p>
                    <Button 
                      onClick={() => navigate('/quiz')}
                      className="button-primary"
                    >
                      <BookOpen size={16} className="mr-2" />
                      Take the Assessment
                    </Button>
                  </motion.div>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Resources;
