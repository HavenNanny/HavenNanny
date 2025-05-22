import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Baby, Heart, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-inner pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                <Baby size={32} className="text-primary-500" />
                <Heart size={20} className="text-primary-500 -ml-2 -mt-4" />
              </div>
              <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                {t('appName')}
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {t('tagline')}
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              {t('appName')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 text-sm">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/babysitters" className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 text-sm">
                  {t('babysitters')}
                </Link>
              </li>
              <li>
                <Link to="/parents" className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 text-sm">
                  {t('parents')}
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 text-sm">
                  {t('howItWorks')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              {t('resources')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/for-parents" className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 text-sm">
                  {t('forParents')}
                </Link>
              </li>
              <li>
                <Link to="/for-babysitters" className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 text-sm">
                  {t('forBabysitters')}
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 text-sm">
                  {t('aboutUs')}
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 text-sm">
                  {t('contactUs')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              {t('legal')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 text-sm">
                  {t('termsOfService')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 text-sm">
                  {t('privacyPolicy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;