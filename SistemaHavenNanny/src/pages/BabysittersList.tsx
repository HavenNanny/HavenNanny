import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search, MapPin, Star, Filter, ChevronDown, X } from 'lucide-react';

// Mock data for babysitters
const mockBabysitters = [
  {
    id: 1,
    name: 'Maria Silva',
    location: 'São Paulo, SP',
    rating: 4.9,
    hourlyRate: 50,
    experience: '5 anos',
    description: 'Experiência de 5 anos com crianças de todas as idades. Formada em pedagogia.',
    image: 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'João Santos',
    location: 'Rio de Janeiro, RJ',
    rating: 4.7,
    hourlyRate: 45,
    experience: '3 anos',
    description: 'Estudante de educação física, adora atividades ao ar livre e esportes com crianças.',
    image: 'https://images.pexels.com/photos/1741231/pexels-photo-1741231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Ana Oliveira',
    location: 'Belo Horizonte, MG',
    rating: 5.0,
    hourlyRate: 60,
    experience: '7 anos',
    description: 'Professora de educação infantil com especialização em crianças com necessidades especiais.',
    image: 'https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Pedro Almeida',
    location: 'Curitiba, PR',
    rating: 4.8,
    hourlyRate: 55,
    experience: '4 anos',
    description: 'Estudante de psicologia, paciente e atencioso com crianças de todas as idades.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    name: 'Carla Mendes',
    location: 'Brasília, DF',
    rating: 4.6,
    hourlyRate: 40,
    experience: '2 anos',
    description: 'Estudante de enfermagem, especializada em primeiros socorros e cuidados com bebês.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    name: 'Lucas Ferreira',
    location: 'Salvador, BA',
    rating: 4.9,
    hourlyRate: 48,
    experience: '6 anos',
    description: 'Professor de música, oferece atividades educativas e recreativas para crianças.',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const BabysittersList: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    minRating: 0
  });
  const [sortOption, setSortOption] = useState('newest');
  
  // Filter and sort babysitters
  const filteredBabysitters = mockBabysitters
    .filter(babysitter => {
      // Search filter
      if (searchTerm && !babysitter.location.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !babysitter.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      // Price filter
      if (filters.minPrice && babysitter.hourlyRate < parseInt(filters.minPrice)) {
        return false;
      }
      
      if (filters.maxPrice && babysitter.hourlyRate > parseInt(filters.maxPrice)) {
        return false;
      }
      
      // Rating filter
      if (filters.minRating > 0 && babysitter.rating < filters.minRating) {
        return false;
      }
      
      return true;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case 'priceHighToLow':
          return b.hourlyRate - a.hourlyRate;
        case 'priceLowToHigh':
          return a.hourlyRate - b.hourlyRate;
        case 'highestRated':
          return b.rating - a.rating;
        default:
          return 0; // Default to original order
      }
    });
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };
  
  const handleRatingFilter = (rating: number) => {
    setFilters({
      ...filters,
      minRating: rating === filters.minRating ? 0 : rating
    });
  };
  
  const clearFilters = () => {
    setFilters({
      minPrice: '',
      maxPrice: '',
      minRating: 0
    });
    setSearchTerm('');
  };
  
  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {t('babysitters')}
        </h1>
        
        {/* Search and filter bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder={t('searchPlaceholder')}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <Filter className="h-5 w-5 mr-2" />
            {t('filter')}
            <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
          
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="newest">{t('newest')}</option>
            <option value="priceHighToLow">{t('priceHighToLow')}</option>
            <option value="priceLowToHigh">{t('priceLowToHigh')}</option>
            <option value="highestRated">{t('highestRated')}</option>
          </select>
        </div>
        
        {/* Filters panel */}
        {showFilters && (
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {t('filters')}
              </h3>
              <button
                onClick={clearFilters}
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center"
              >
                <X className="h-4 w-4 mr-1" />
                {t('clearFilters')}
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Price range */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('priceRange')}
                </h4>
                <div className="flex space-x-2">
                  <div className="relative flex-1">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 dark:text-gray-400">
                      R$
                    </span>
                    <input
                      type="number"
                      name="minPrice"
                      value={filters.minPrice}
                      onChange={handleFilterChange}
                      placeholder={t('min')}
                      className="block w-full pl-8 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div className="relative flex-1">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 dark:text-gray-400">
                      R$
                    </span>
                    <input
                      type="number"
                      name="maxPrice"
                      value={filters.maxPrice}
                      onChange={handleFilterChange}
                      placeholder={t('max')}
                      className="block w-full pl-8 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
              </div>
              
              {/* Rating filter */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('rating')}
                </h4>
                <div className="flex space-x-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => handleRatingFilter(rating)}
                      className={`flex items-center justify-center w-10 h-10 rounded-md ${
                        filters.minRating === rating
                          ? 'bg-primary-100 dark:bg-primary-900/30 border-2 border-primary-500 text-primary-700 dark:text-primary-400'
                          : 'bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {rating}+
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Results count */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {filteredBabysitters.length} {t('resultsFound')}
        </p>
        
        {/* Babysitters list */}
        {filteredBabysitters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBabysitters.map((babysitter) => (
              <div key={babysitter.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                <div className="h-48 bg-gray-200 dark:bg-gray-700">
                  <img 
                    src={babysitter.image} 
                    alt={babysitter.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {babysitter.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {babysitter.location}
                      </p>
                    </div>
                    <div className="flex items-center bg-primary-100 dark:bg-primary-900/30 px-2 py-1 rounded">
                      <Star className="text-yellow-500" size={16} />
                      <span className="text-gray-900 dark:text-white font-medium ml-1">{babysitter.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {babysitter.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">
                      R${babysitter.hourlyRate}/hora
                    </span>
                    <Link 
                      to={`/babysitters/${babysitter.id}`} 
                      className="px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      {t('viewProfile')}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {t('noResults')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BabysittersList;