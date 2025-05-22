import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Globe } from 'lucide-react';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BabysitterDashboard from './pages/BabysitterDashboard';
import ParentDashboard from './pages/ParentDashboard';
import BabysittersList from './pages/BabysittersList';
import ParentsList from './pages/ParentsList';
import NotFound from './pages/NotFound';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  
  // Check for user's preferred theme
  useEffect(() => {
    if (localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  // Toggle language
  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <Navbar />
        
        <div className="fixed top-4 right-4 flex space-x-2 z-50">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100"
            aria-label={darkMode ? t('switchToLightMode') : t('switchToDarkMode')}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={toggleLanguage}
            className="p-2 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100"
            aria-label={t('changeLanguage')}
          >
            <Globe size={20} />
          </button>
        </div>
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/babysitter-dashboard" element={<BabysitterDashboard />} />
            <Route path="/parent-dashboard" element={<ParentDashboard />} />
            <Route path="/babysitters" element={<BabysittersList />} />
            <Route path="/parents" element={<ParentsList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;