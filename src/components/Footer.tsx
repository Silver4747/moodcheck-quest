
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ExternalLink, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-calm-100 border-t border-calm-200 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-medium text-mind-900 mb-2">MindCheck</h3>
            <p className="text-calm-700 max-w-md text-sm">
              A screening tool to help assess symptoms of depression. Not a diagnostic tool.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-calm-900">Navigation</h4>
              <ul className="space-y-2">
                <li><NavLink to="/" className="text-sm text-calm-700 hover:text-mind-600 transition-colors">Home</NavLink></li>
                <li><NavLink to="/quiz" className="text-sm text-calm-700 hover:text-mind-600 transition-colors">Assessment</NavLink></li>
                <li><NavLink to="/resources" className="text-sm text-calm-700 hover:text-mind-600 transition-colors">Resources</NavLink></li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-calm-900">Help</h4>
              <ul className="space-y-2">
                <li><a href="https://www.nami.org/help" target="_blank" rel="noopener noreferrer" className="text-sm text-calm-700 hover:text-mind-600 transition-colors flex items-center">NAMI <ExternalLink size={12} className="ml-1" /></a></li>
                <li><a href="https://988lifeline.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-calm-700 hover:text-mind-600 transition-colors flex items-center">988 Lifeline <ExternalLink size={12} className="ml-1" /></a></li>
                <li><a href="https://www.crisistextline.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-calm-700 hover:text-mind-600 transition-colors flex items-center">Crisis Text Line <ExternalLink size={12} className="ml-1" /></a></li>
              </ul>
            </div>
            
            <div className="space-y-3 col-span-2 md:col-span-1 mt-6 md:mt-0">
              <h4 className="text-sm font-medium text-calm-900">Disclaimer</h4>
              <p className="text-xs text-calm-700">
                This assessment is not a diagnostic tool. It is meant to help identify symptoms that may warrant professional evaluation. If in crisis, call 988 or go to your nearest emergency room.
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-calm-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-calm-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} MindCheck. Created with compassion.
          </p>
          <p className="text-xs text-calm-600 flex items-center">
            Made with <Heart size={12} className="mx-1 text-mind-500" /> for mental health awareness
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
