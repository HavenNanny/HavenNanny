import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-primary-600 dark:text-primary-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        {t('pageNotFound')}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-md mb-8">
        {t('pageNotFoundDescription')}
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors flex items-center"
      >
        <Home className="h-5 w-5 mr-2" />
        {t('backToHome')}
      </Link>
    </div>
  );
};

export default NotFound;