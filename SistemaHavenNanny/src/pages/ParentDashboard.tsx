import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, DollarSign, User, MessageSquare, Star, Settings, Plus } from 'lucide-react';

// Mock data for children
const mockChildren = [
  {
    id: 1,
    name: 'Lucas Rodrigues',
    age: 5,
    notes: 'Alérgico a amendoim. Gosta de desenhar e brincar com carrinhos.'
  },
  {
    id: 2,
    name: 'Sofia Rodrigues',
    age: 3,
    notes: 'Está aprendendo a usar o banheiro sozinha. Adora histórias e músicas.'
  }
];

// Mock data for bookings
const mockBookings = [
  {
    id: 1,
    babysitterName: 'Maria Silva',
    date: '2025-05-15',
    time: '18:00',
    duration: 3,
    status: 'pending',
    location: 'Casa',
    totalPrice: 150
  },
  {
    id: 2,
    babysitterName: 'João Santos',
    date: '2025-05-18',
    time: '14:00',
    duration: 4,
    status: 'accepted',
    location: 'Casa',
    totalPrice: 180
  },
  {
    id: 3,
    babysitterName: 'Ana Oliveira',
    date: '2025-05-10',
    time: '09:00',
    duration: 6,
    status: 'completed',
    location: 'Casa',
    totalPrice: 360
  },
  {
    id: 4,
    babysitterName: 'Pedro Almeida',
    date: '2025-05-05',
    time: '17:00',
    duration: 2,
    status: 'cancelled',
    location: 'Casa',
    totalPrice: 110
  }
];

// Mock data for messages
const mockMessages = [
  {
    id: 1,
    sender: 'Maria Silva',
    lastMessage: 'Olá, confirmo que estarei aí no horário combinado!',
    timestamp: '2025-05-12T14:30:00',
    unread: true
  },
  {
    id: 2,
    sender: 'João Santos',
    lastMessage: 'Obrigado pela oportunidade, as crianças são adoráveis!',
    timestamp: '2025-05-11T09:15:00',
    unread: false
  },
  {
    id: 3,
    sender: 'Ana Oliveira',
    lastMessage: 'Posso chegar 15 minutos mais cedo no sábado?',
    timestamp: '2025-05-10T18:45:00',
    unread: false
  }
];

// Mock data for favorite babysitters
const mockFavorites = [
  {
    id: 1,
    name: 'Maria Silva',
    location: 'São Paulo, SP',
    rating: 4.9,
    hourlyRate: 50,
    image: 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'João Santos',
    location: 'São Paulo, SP',
    rating: 4.7,
    hourlyRate: 45,
    image: 'https://images.pexels.com/photos/1741231/pexels-photo-1741231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Ana Oliveira',
    location: 'São Paulo, SP',
    rating: 5.0,
    hourlyRate: 60,
    image: 'https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const ParentDashboard: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [showAddChildModal, setShowAddChildModal] = useState(false);
  const [newChild, setNewChild] = useState({
    name: '',
    age: '',
    notes: ''
  });
  
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
  
  const handleCancelBooking = (id: number) => {
    console.log('Cancel booking:', id);
    // TODO: Implement actual cancel logic
  };
  
  const handleAddChild = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Add child:', newChild);
    // TODO: Implement actual add child logic
    setShowAddChildModal(false);
    setNewChild({ name: '', age: '', notes: '' });
  };
  
  const handleChildInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewChild({
      ...newChild,
      [name]: value
    });
  };
  
  return (
    <div className="space-y-8">
      {/* Profile summary */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-grow">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Família Rodrigues
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              São Paulo, SP
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <User className="h-5 w-5 mr-1 text-primary-600 dark:text-primary-400" />
                <span>{mockChildren.length} {t('children')}</span>
              </div>
            </div>
          </div>
          
          <button className="px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            {t('editProfile')}
          </button>
        </div>
      </div>
      
      {/* Children section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {t('children')}
          </h2>
          <button 
            onClick={() => setShowAddChildModal(true)}
            className="px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors flex items-center"
          >
            <Plus className="h-5 w-5 mr-2" />
            {t('addChild')}
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockChildren.map((child) => (
            <div key={child.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {child.name}
                </h3>
                <span className="text-primary-600 dark:text-primary-400 font-medium">
                  {child.age} {t('years')}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                <span className="font-medium">{t('notes')}:</span> {child.notes}
              </p>
              
              <div className="flex justify-end mt-4">
                <button className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium">
                  {t('edit')}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Add Child Modal */}
        {showAddChildModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-md w-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t('addChild')}
              </h3>
              
              <form onSubmit={handleAddChild} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('childName')}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={newChild.name}
                    onChange={handleChildInputChange}
                    required
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('childAge')}
                  </label>
                  <input
                    id="age"
                    name="age"
                    type="number"
                    min="0"
                    max="18"
                    value={newChild.age}
                    onChange={handleChildInputChange}
                    required
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('childNotes')}
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={newChild.notes}
                    onChange={handleChildInputChange}
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div className="flex justify-end space-x-2 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddChildModal(false)}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    {t('cancel')}
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    {t('save')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      
      {/* Bookings section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {t('schedule')}
          </h2>
          <button className="px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors flex items-center">
            <Plus className="h-5 w-5 mr-2" />
            {t('createBooking')}
          </button>
        </div>
        
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
                      {booking.babysitterName}
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
                    <DollarSign className="h-5 w-5 mr-2 text-primary-600 dark:text-primary-400" />
                    <span>R${booking.totalPrice}</span>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  {(booking.status === 'pending' || booking.status === 'accepted') && (
                    <button
                      onClick={() => handleCancelBooking(booking.id)}
                      className="px-3 py-1 border border-red-500 text-red-500 font-medium rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    >
                      {t('cancel')}
                    </button>
                  )}
                  
                  {booking.status === 'completed' && (
                    <button
                      className="px-3 py-1 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      {t('writeReview')}
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
                    src="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
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
      
      {/* Favorite babysitters section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {t('favoriteBabysitters')}
          </h2>
          <button className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
            {t('viewAll')}
          </button>
        </div>
        
        {mockFavorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockFavorites.map((babysitter) => (
              <div key={babysitter.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div className="h-32 bg-gray-200 dark:bg-gray-700">
                  <img 
                    src={babysitter.image} 
                    alt={babysitter.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {babysitter.name}
                    </h3>
                    <div className="flex items-center">
                      <Star className="text-yellow-500" size={16} />
                      <span className="text-gray-900 dark:text-white text-sm font-medium ml-1">
                        {babysitter.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {babysitter.location}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                      R${babysitter.hourlyRate}/hora
                    </span>
                    <button className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium">
                      {t('book')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-400">
              {t('noFavorites')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParentDashboard;