import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, DollarSign, Users, MessageSquare, Star, Settings } from 'lucide-react';

// Mock data for bookings
const mockBookings = [
  {
    id: 1,
    parentName: 'Família Rodrigues',
    date: '2025-05-15',
    time: '18:00',
    duration: 3,
    status: 'pending',
    children: 2,
    location: 'São Paulo, SP',
    totalPrice: 150
  },
  {
    id: 2,
    parentName: 'Família Costa',
    date: '2025-05-18',
    time: '14:00',
    duration: 4,
    status: 'accepted',
    children: 1,
    location: 'São Paulo, SP',
    totalPrice: 200
  },
  {
    id: 3,
    parentName: 'Família Almeida',
    date: '2025-05-10',
    time: '09:00',
    duration: 6,
    status: 'completed',
    children: 3,
    location: 'São Paulo, SP',
    totalPrice: 300
  },
  {
    id: 4,
    parentName: 'Família Santos',
    date: '2025-05-05',
    time: '17:00',
    duration: 2,
    status: 'cancelled',
    children: 2,
    location: 'São Paulo, SP',
    totalPrice: 100
  }
];

// Mock data for messages
const mockMessages = [
  {
    id: 1,
    sender: 'Família Rodrigues',
    lastMessage: 'Olá, gostaria de saber se você está disponível no próximo sábado?',
    timestamp: '2025-05-12T14:30:00',
    unread: true
  },
  {
    id: 2,
    sender: 'Família Costa',
    lastMessage: 'Obrigado por cuidar do nosso filho ontem!',
    timestamp: '2025-05-11T09:15:00',
    unread: false
  },
  {
    id: 3,
    sender: 'Família Almeida',
    lastMessage: 'Podemos remarcar para a próxima semana?',
    timestamp: '2025-05-10T18:45:00',
    unread: false
  }
];

// Mock data for reviews
const mockReviews = [
  {
    id: 1,
    parentName: 'Carla Mendes',
    rating: 5,
    comment: 'Excelente babá! Muito atenciosa e carinhosa com as crianças.',
    date: '2025-05-10'
  },
  {
    id: 2,
    parentName: 'Ricardo Alves',
    rating: 4,
    comment: 'Muito pontual e responsável. As crianças adoraram!',
    date: '2025-05-05'
  }
];

const BabysitterDashboard: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  
  // Filter bookings based on active tab
  const filteredBookings = mockBookings.filter(booking => {
    const bookingDate = new Date(booking.date);
    const today = new Date();
    
    if (activeTab === 'upcoming') {
      return bookingDate >= today && (booking.status === 'pending' || booking.status === 'accepted');
    } else {
      return bookingDate < today || booking.status === 'completed' || booking.status === 'cancelled';
    }
  });
  
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500';
      case 'accepted':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-500';
      case 'completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-500';
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-500';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };
  
  const handleAcceptBooking = (id: number) => {
    console.log('Accept booking:', id);
    // TODO: Implement actual accept logic
  };
  
  const handleRejectBooking = (id: number) => {
    console.log('Reject booking:', id);
    // TODO: Implement actual reject logic
  };
  
  return (
    <div className="space-y-8">
      {/* Profile summary */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-grow">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Maria Silva
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              São Paulo, SP
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <DollarSign className="h-5 w-5 mr-1 text-primary-600 dark:text-primary-400" />
                <span>R$50/hora</span>
              </div>
              
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Star className="h-5 w-5 mr-1 text-yellow-500" />
                <span>4.9 (15 {t('reviews')})</span>
              </div>
              
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Calendar className="h-5 w-5 mr-1 text-primary-600 dark:text-primary-400" />
                <span>5 {t('yearsExperience')}</span>
              </div>
            </div>
          </div>
          
          <button className="px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            {t('editProfile')}
          </button>
        </div>
      </div>
      
      {/* Bookings section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          {t('schedule')}
        </h2>
        
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'upcoming'
                ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            {t('upcoming')}
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'past'
                ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            {t('past')}
          </button>
        </div>
        
        {filteredBookings.length > 0 ? (
          <div className="space-y-4">
            {filteredBookings.map((booking) => (
              <div key={booking.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {booking.parentName}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {booking.location}
                    </p>
                  </div>
                  <div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(booking.status)}`}>
                      {t(booking.status)}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Calendar className="h-5 w-5 mr-2 text-primary-600 dark:text-primary-400" />
                    <span>{new Date(booking.date).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Clock className="h-5 w-5 mr-2 text-primary-600 dark:text-primary-400" />
                    <span>{booking.time} ({booking.duration}h)</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Users className="h-5 w-5 mr-2 text-primary-600 dark:text-primary-400" />
                    <span>{booking.children} {t('children')}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-primary-600 dark:text-primary-400">
                    R${booking.totalPrice}
                  </span>
                  
                  {booking.status === 'pending' && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleRejectBooking(booking.id)}
                        className="px-3 py-1 border border-red-500 text-red-500 font-medium rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                      >
                        {t('reject')}
                      </button>
                      <button
                        onClick={() => handleAcceptBooking(booking.id)}
                        className="px-3 py-1 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                      >
                        {t('accept')}
                      </button>
                    </div>
                  )}
                  
                  {booking.status === 'accepted' && (
                    <button
                      className="px-3 py-1 border border-red-500 text-red-500 font-medium rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    >
                      {t('cancel')}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-400">
              {activeTab === 'upcoming' ? t('noUpcomingBookings') : t('noPastBookings')}
            </p>
          </div>
        )}
      </div>
      
      {/* Messages section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {t('messages')}
          </h2>
          <button className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
            {t('viewAll')}
          </button>
        </div>
        
        {mockMessages.length > 0 ? (
          <div className="space-y-4">
            {mockMessages.map((message) => (
              <div key={message.id} className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt={message.sender} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {message.sender}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(message.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                  <p className={`text-sm ${message.unread ? 'font-semibold text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}>
                    {message.lastMessage}
                  </p>
                </div>
                
                {message.unread && (
                  <div className="w-3 h-3 bg-primary-600 rounded-full ml-2"></div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-400">
              {t('noMessages')}
            </p>
          </div>
        )}
      </div>
      
      {/* Reviews section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {t('reviews')}
          </h2>
          <div className="flex items-center">
            <Star className="text-yellow-500 h-5 w-5 mr-1" />
            <span className="font-semibold text-gray-900 dark:text-white">4.9</span>
            <span className="text-gray-600 dark:text-gray-300 text-sm ml-1">
              ({mockReviews.length})
            </span>
          </div>
        </div>
        
        {mockReviews.length > 0 ? (
          <div className="space-y-6">
            {mockReviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {review.parentName}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={i < review.rating ? "text-yellow-500" : "text-gray-300 dark:text-gray-600"} 
                      size={16} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-400">
              {t('noReviews')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BabysitterDashboard;