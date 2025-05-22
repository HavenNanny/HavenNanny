import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search, Calendar, MessageSquare, CheckCircle, Shield, Star } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-16">
      {/* Hero section */}
      <section className="relative bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-700 dark:to-primary-900 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('tagline')}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {t('findBabysitterDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/babysitters" 
                className="px-6 py-3 bg-white text-primary-700 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition-colors text-center"
              >
                {t('findBabysitter')}
              </Link>
              <Link 
                to="/register" 
                className="px-6 py-3 bg-primary-800 text-white font-medium rounded-lg shadow-lg hover:bg-primary-900 transition-colors text-center"
              >
                {t('becomeBabysitter')}
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* How it works section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('howItWorks')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('howItWorksDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-primary-600 dark:text-primary-400" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t('search')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('searchDescription')}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="text-primary-600 dark:text-primary-400" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t('connect')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('connectDescription')}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-primary-600 dark:text-primary-400" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t('book')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('bookDescription')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured babysitters section */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t('featuredBabysitters')}
          </h2>
          <Link 
            to="/babysitters" 
            className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
          >
            {t('viewAll')}
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Babysitter card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 dark:bg-gray-700">
              <img 
                src="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Babysitter" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Maria Silva
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    São Paulo, SP
                  </p>
                </div>
                <div className="flex items-center bg-primary-100 dark:bg-primary-900/30 px-2 py-1 rounded">
                  <Star className="text-yellow-500" size={16} />
                  <span className="text-gray-900 dark:text-white font-medium ml-1">4.9</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Experiência de 5 anos com crianças de todas as idades. Formada em pedagogia.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-primary-600 dark:text-primary-400 font-semibold">
                  R$50/hora
                </span>
                <Link 
                  to="/babysitters/1" 
                  className="px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  {t('viewProfile')}
                </Link>
              </div>
            </div>
          </div>
          
          {/* Babysitter card 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 dark:bg-gray-700">
              <img 
                src="https://images.pexels.com/photos/1741231/pexels-photo-1741231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Babysitter" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    João Santos
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Rio de Janeiro, RJ
                  </p>
                </div>
                <div className="flex items-center bg-primary-100 dark:bg-primary-900/30 px-2 py-1 rounded">
                  <Star className="text-yellow-500" size={16} />
                  <span className="text-gray-900 dark:text-white font-medium ml-1">4.7</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Estudante de educação física, adora atividades ao ar livre e esportes com crianças.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-primary-600 dark:text-primary-400 font-semibold">
                  R$45/hora
                </span>
                <Link 
                  to="/babysitters/2" 
                  className="px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  {t('viewProfile')}
                </Link>
              </div>
            </div>
          </div>
          
          {/* Babysitter card 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 dark:bg-gray-700">
              <img 
                src="https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Babysitter" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Ana Oliveira
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Belo Horizonte, MG
                  </p>
                </div>
                <div className="flex items-center bg-primary-100 dark:bg-primary-900/30 px-2 py-1 rounded">
                  <Star className="text-yellow-500" size={16} />
                  <span className="text-gray-900 dark:text-white font-medium ml-1">5.0</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Professora de educação infantil com especialização em crianças com necessidades especiais.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-primary-600 dark:text-primary-400 font-semibold">
                  R$60/hora
                </span>
                <Link 
                  to="/babysitters/3" 
                  className="px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  {t('viewProfile')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials section */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16 rounded-3xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t('testimonials')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('testimonialsDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Carla Mendes
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Mãe de 2 filhos
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-500" size={16} />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "Encontrei uma babá incrível para meus filhos através do HavenNanny. O processo foi simples e rápido, e a babá superou todas as minhas expectativas!"
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Ricardo Alves
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Pai de 1 filho
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={i < 4 ? "text-yellow-500" : "text-gray-300 dark:text-gray-600"} size={16} />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "Como pai solo, o HavenNanny tem sido um salva-vidas. Consigo encontrar babás confiáveis sempre que preciso, mesmo com pouca antecedência."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Juliana Costa
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Babá
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-500" size={16} />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "Como babá, o HavenNanny me ajudou a encontrar famílias maravilhosas para trabalhar. A plataforma é fácil de usar e me dá total controle sobre minha agenda."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust and safety section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('trustAndSafety')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('trustAndSafetyDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex">
            <div className="mr-4">
              <Shield className="text-primary-600 dark:text-primary-400" size={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('verifiedProfiles')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('verifiedProfilesDescription')}
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex">
            <div className="mr-4">
              <Star className="text-primary-600 dark:text-primary-400" size={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('reviewSystem')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('reviewSystemDescription')}
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex">
            <div className="mr-4">
              <MessageSquare className="text-primary-600 dark:text-primary-400" size={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('secureMessaging')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('secureMessagingDescription')}
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex">
            <div className="mr-4">
              <CheckCircle className="text-primary-600 dark:text-primary-400" size={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('guaranteedBookings')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('guaranteedBookingsDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="bg-primary-600 dark:bg-primary-800 rounded-3xl overflow-hidden">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              {t('readyToStart')}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t('readyToStartDescription')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/register" 
                className="px-6 py-3 bg-white text-primary-700 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition-colors text-center"
              >
                {t('getStarted')}
              </Link>
              <Link 
                to="/how-it-works" 
                className="px-6 py-3 bg-primary-700 text-white font-medium rounded-lg shadow-lg hover:bg-primary-800 transition-colors text-center"
              >
                {t('learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;