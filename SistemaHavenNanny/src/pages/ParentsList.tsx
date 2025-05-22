import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search, MapPin, Users, Filter, ChevronDown, X } from 'lucide-react';

// Mock data for parents
const mockParents = [
  {
    id: 1,
    name: 'Família Rodrigues',
    location: 'São Paulo, SP',
    childrenCount: 2,
    description: 'Casal com dois filhos (3 e 5 anos) procurando babá para finais de semana.',
    image: 'https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Família Costa',
    location: 'Rio de Janeiro, RJ',
    childrenCount: 1,
    description: 'Mãe solo com um bebê de 8 meses, precisa de ajuda durante a semana.',
    image: 'https://images.pexels.com/photos/3933281/pexels-photo-3933281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Família Almeida',
    location: 'Belo Horizonte, MG',
    childrenCount: 3,
    description: 'Casal com três filhos (2, 4 e 7 anos) procurando babá para período integral.',
    image: 'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Família Santos',
    location: 'Curitiba, PR',
    childrenCount: 2,
    description: 'Pais com gêmeos de 1 ano, precisam de ajuda nos finais de tarde.',
    image: 'https://images.pexels.com/photos/1620653/pexels-photo-1620653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    name: 'Família Oliveira',
    location: 'Brasília, DF',
    childrenCount: 1,
    description: 'Casal com uma filha de 6 anos com necessidades especiais.',
    image: 'https://images.pexels.com/photos/1682497/pexels-photo-1682497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    name: 'Família Ferreira',
    location: 'Salvador, BA',
    childrenCount: 4,
    description: 'Família com quatro crianças (1, 3, 5 e 8 anos) procurando babá para eventos.',
    image: 'https://images.pexels.com/photos/1578269/pexels-photo-1578269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const ParentsList: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    childrenCount: 0
  });
  const [sortOption, setSortOption] = useState('newest');
  
  // Filter and sort parents
  const filteredParents = mockParents
    .filter(parent => {
      // Search filter
      if (searchTerm && !parent.location.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !parent.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      // Children count filter
      if (filters.childrenCount > 0 && parent.childrenCount !== filters.childrenCount) {
        return false;
      }
      
      return true;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case 'childrenHighToLow':
          return b.childrenCount - a.childrenCount;
        case 'childrenLowToHigh':
          return a.childrenCount - b.childrenCount;
        default:
          return 0; // Default to original order
      }
    });
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const handleChildrenFilter = (count: number) => {
    setFilters({
      ...filters,
      childrenCount: count === filters.childrenCount ? 0 : count
    });
  };
  
  const clearFilters = () => {
    setFilters({
      childrenCount: 0
    });
    setSearchTerm('');
  };
  
  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {t('parents')}
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
            <option value="childrenHighToLow">{t('childrenHighToLow')}</option>
            <option value="childrenLowToHigh">{t('childrenLowToHigh')}</option>
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
            
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('children')}
              </h4>
              <div className="flex space-x-2">
                {[1, 2, 3, 4].map((count) => (
                  <button
                    key={count}
                    onClick={() => handleChildrenFilter(count)}
                    className={`flex items-center justify-center px-3 py-2 rounded-md ${
                      filters.childrenCount === count
                        ? 'bg-primary-100 dark:bg-primary-900/30 border-2 border-primary-500 text-primary-700 dark:text-primary-400'
                        : 'bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {count === 4 ? '4+' : count}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Results count */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {filteredParents.length} {t('resultsFound')}
        </p>
        
        {/* Parents list */}
        {filteredParents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredParents.map((parent) => (
              <div key={parent.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                <div className="h-48 bg-gray-200 dark:bg-gray-700">
                  <img 
                    src={parent.image} 
                    alt={parent.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {parent.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {parent.location}
                      </p>
                    </div>
                    <div className="flex items-center bg-primary-100 dark:bg-primary-900/30 px-2 py-1 rounded">
                      <Users className="text-primary-600 dark:text-primary-400" size={16} />
                      <span className="text-gray-900 dark:text-white font-medium ml-1">
                        {parent.childrenCount}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {parent.description}
                  </p>
                  <div className="flex justify-end">
                    <Link 
                      to={`/parents/${parent.id}`} 
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

export default ParentsList;