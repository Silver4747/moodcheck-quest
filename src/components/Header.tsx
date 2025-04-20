
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, HelpCircle, BookOpen, Heart, Wind, CheckSquare } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 glass-morphism py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2">
          <div className="bg-mind-500 text-white p-1.5 rounded-md">
            <Home size={18} />
          </div>
          <span className="font-medium text-lg text-mind-900">MindCheck</span>
        </NavLink>
        
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `text-calm-800 hover:text-mind-600 transition-colors ${isActive ? 'text-mind-600 font-medium' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/quiz" 
            className={({isActive}) => 
              `text-calm-800 hover:text-mind-600 transition-colors ${isActive ? 'text-mind-600 font-medium' : ''}`
            }
          >
            Take Assessment
          </NavLink>
          <NavLink 
            to="/mood-tracker" 
            className={({isActive}) => 
              `text-calm-800 hover:text-mind-600 transition-colors ${isActive ? 'text-mind-600 font-medium' : ''}`
            }
          >
            Mood Tracker
          </NavLink>
          <NavLink 
            to="/breathing-exercise" 
            className={({isActive}) => 
              `text-calm-800 hover:text-mind-600 transition-colors ${isActive ? 'text-mind-600 font-medium' : ''}`
            }
          >
            Breathing
          </NavLink>
          <NavLink 
            to="/self-care" 
            className={({isActive}) => 
              `text-calm-800 hover:text-mind-600 transition-colors ${isActive ? 'text-mind-600 font-medium' : ''}`
            }
          >
            Self-Care
          </NavLink>
          <NavLink 
            to="/resources" 
            className={({isActive}) => 
              `text-calm-800 hover:text-mind-600 transition-colors ${isActive ? 'text-mind-600 font-medium' : ''}`
            }
          >
            Resources
          </NavLink>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="hidden md:flex items-center">
            <HelpCircle size={16} className="mr-2" />
            <span>Help</span>
          </Button>
          <Button variant="default" size="sm" className="bg-mind-600 hover:bg-mind-700">
            <BookOpen size={16} className="mr-2" />
            <span>Resources</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
