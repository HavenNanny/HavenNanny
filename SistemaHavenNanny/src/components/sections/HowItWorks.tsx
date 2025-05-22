import React from 'react';
import { useTranslation } from 'react-i18next';
import { UserPlus, Search, MessageSquare, Calendar } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <UserPlus className="w-12 h-12 text-accent-600" />,
      title: t('step1Title'),
      description: t('step1Description')
    },
    {
      icon: <Search className="w-12 h-12 text-accent-600" />,
      title: t('step2Title'),
      description: t('step2Description')
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-accent-600" />,
      title: t('step3Title'),
      description: t('step3Description')
    },
    {
      icon: <Calendar className="w-12 h-12 text-accent-600" />,
      title: t('step4Title'),
      description: t('step4Description')
    }
  ];

  return (
    <section id="como-funciona" className="py-16 bg-primary-50 dark:bg-primary-900/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-4">
            {t('howItWorksTitle')}
          </h2>
          <p className="text-lg text-primary-700 dark:text-primary-300 max-w-2xl mx-auto">
            {t('howItWorksDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-primary-800/50 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 p-3 bg-accent-100 dark:bg-accent-900/30 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-2">
                {step.title}
              </h3>
              <p className="text-primary-600 dark:text-primary-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;