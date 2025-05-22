import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Heart, Star } from 'lucide-react';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <Shield className="w-12 h-12 text-accent-600" />,
      title: t('value1Title'),
      description: t('value1Description')
    },
    {
      icon: <Heart className="w-12 h-12 text-accent-600" />,
      title: t('value2Title'),
      description: t('value2Description')
    },
    {
      icon: <Star className="w-12 h-12 text-accent-600" />,
      title: t('value3Title'),
      description: t('value3Description')
    }
  ];

  return (
    <section id="sobre-nos" className="py-16 bg-white dark:bg-primary-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-4">
            {t('aboutUsTitle')}
          </h2>
          <p className="text-lg text-primary-700 dark:text-primary-300 max-w-2xl mx-auto">
            {t('aboutUsDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-primary-50 dark:bg-primary-800/50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-4">
              {t('ourMission')}
            </h3>
            <p className="text-primary-700 dark:text-primary-300">
              {t('ourMissionDescription')}
            </p>
          </div>

          <div className="bg-accent-50 dark:bg-accent-900/30 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-4">
              {t('ourValues')}
            </h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-900 dark:text-primary-100">
                      {value.title}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;