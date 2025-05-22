import React from 'react';
import { useTranslation } from 'react-i18next';

const Privacy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="privacidade" className="py-16 bg-white dark:bg-primary-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-4">
            {t('privacyTitle')}
          </h2>
          <p className="text-sm text-primary-600 dark:text-primary-400 mb-8">
            {t('privacyLastUpdated')}
          </p>

          <div className="prose prose-primary dark:prose-invert max-w-none">
            {/* Add privacy policy content here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;