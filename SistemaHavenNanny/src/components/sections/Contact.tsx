import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement contact form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contato" className="py-16 bg-primary-50 dark:bg-primary-900/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-lg text-primary-700 dark:text-primary-300 max-w-2xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-primary-800/50 p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-6">
              {t('contactForm')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-1">
                  {t('name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-primary-300 dark:border-primary-600 bg-white dark:bg-primary-800 text-primary-900 dark:text-primary-100"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-1">
                  {t('email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-primary-300 dark:border-primary-600 bg-white dark:bg-primary-800 text-primary-900 dark:text-primary-100"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-1">
                  {t('subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-primary-300 dark:border-primary-600 bg-white dark:bg-primary-800 text-primary-900 dark:text-primary-100"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-1">
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-primary-300 dark:border-primary-600 bg-white dark:bg-primary-800 text-primary-900 dark:text-primary-100"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-medium rounded-lg transition-colors"
              >
                {t('sendMessage')}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-primary-800/50 p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-6">
                {t('contactInfo')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-accent-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-primary-900 dark:text-primary-100">
                      {t('address')}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-300">
                      Av. Paulista, 1000<br />
                      São Paulo - SP<br />
                      CEP: 01310-100
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-accent-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-primary-900 dark:text-primary-100">
                      {t('phone')}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-300">
                      +55 (11) 3000-0000
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-accent-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-primary-900 dark:text-primary-100">
                      {t('email')}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-300">
                      contato@havennanny.com.br
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-primary-800/50 p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-6">
                {t('faq')}
              </h3>
              <div className="space-y-4">
                {/* Add FAQ items here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;