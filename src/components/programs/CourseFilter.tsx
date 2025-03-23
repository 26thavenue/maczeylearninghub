import { useState } from 'react';
import { X, Check } from 'lucide-react';
import  Button from '../Buttons';

export interface FilterOptions {
  categories: string[];
  levels: string[];
  duration?: string[];
}

interface CourseFiltersProps {
  filters: FilterOptions;
  activeFilters: {
    category: string[];
    level: string[];
    duration: string[];
  };
  setActiveFilters: React.Dispatch<React.SetStateAction<{
    category: string[];
    level: string[];
    duration: string[];
  }>>;
}

const CourseFilters = ({ filters, activeFilters, setActiveFilters }: CourseFiltersProps) => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const toggleFilter = (type: 'category' | 'level' | 'duration', value: string) => {
    setActiveFilters(prev => {
      if (prev[type].includes(value)) {
        return {
          ...prev,
          [type]: prev[type].filter(item => item !== value)
        };
      } else {
        return {
          ...prev,
          [type]: [...prev[type], value]
        };
      }
    });
  };

  const clearFilters = () => {
    setActiveFilters({
      category: [],
      level: [],
      duration: []
    });
  };

  const totalActiveFilters = 
    activeFilters.category.length + 
    activeFilters.level.length + 
    activeFilters.duration.length;

  return (
    <div className="mb-8">
      {/* Mobile filter toggle */}
      <div className="flex items-center justify-between md:hidden mb-4">
        {/* <Button
          variant="outline"
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className="flex items-center"
        >
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Filters
          {totalActiveFilters > 0 && (
            <span className="ml-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {totalActiveFilters}
            </span>
          )}
        </Button>
         */}
        {/* {totalActiveFilters > 0 && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearFilters}
            className="text-sm font-medium"
          >
            Clear all
          </Button>
        )} */}
      </div>

      {/* Filter section - desktop always visible, mobile conditional */}
      <div className={`
        bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100
        ${isMobileFilterOpen ? 'block' : 'hidden md:block'}
      `}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-lg">Filters</h3>
            {totalActiveFilters > 0 && (
              <Button 
                variant="outline" 
                
                buttonName='Clear all'
                onClick={clearFilters}
                className="text-sm font-medium hidden md:flex"
              />
                
              
            )}
            <button 
              className="md:hidden text-gray-400 hover:text-gray-600" 
              onClick={() => setIsMobileFilterOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Filter groups */}
          <div className="space-y-8">
            {/* Categories */}
            <div>
              <h4 className="font-medium mb-3">Categories</h4>
              <div className="space-y-2">
                {filters.categories.map(category => (
                  <div key={category} className="flex items-center">
                    <button
                      className="flex items-center w-full py-1.5 text-left text-sm group"
                      onClick={() => toggleFilter('category', category)}
                    >
                      <div className={`
                        w-5 h-5 rounded-md border mr-3 flex items-center justify-center
                        ${activeFilters.category.includes(category) 
                          ? 'bg-primary border-primary text-white' 
                          : 'border-gray-300 group-hover:border-primary'}
                      `}>
                        {activeFilters.category.includes(category) && (
                          <Check size={14} />
                        )}
                      </div>
                      {category}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Levels */}
            <div>
              <h4 className="font-medium mb-3">Difficulty Level</h4>
              <div className="space-y-2">
                {filters.levels.map(level => (
                  <div key={level} className="flex items-center">
                    <button
                      className="flex items-center w-full py-1.5 text-left text-sm group"
                      onClick={() => toggleFilter('level', level)}
                    >
                      <div className={`
                        w-5 h-5 rounded-md border mr-3 flex items-center justify-center
                        ${activeFilters.level.includes(level) 
                          ? 'bg-primary border-primary text-white' 
                          : 'border-gray-300 group-hover:border-primary'}
                      `}>
                        {activeFilters.level.includes(level) && (
                          <Check size={14} />
                        )}
                      </div>
                      {level}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Duration */}
            {filters.duration && (
              <div>
                <h4 className="font-medium mb-3">Duration</h4>
                <div className="space-y-2">
                  {filters.duration.map(duration => (
                    <div key={duration} className="flex items-center">
                      <button
                        className="flex items-center w-full py-1.5 text-left text-sm group"
                        onClick={() => toggleFilter('duration', duration)}
                      >
                        <div className={`
                          w-5 h-5 rounded-md border mr-3 flex items-center justify-center
                          ${activeFilters.duration.includes(duration) 
                            ? 'bg-primary border-primary text-white' 
                            : 'border-gray-300 group-hover:border-primary'}
                        `}>
                          {activeFilters.duration.includes(duration) && (
                            <Check size={14} />
                          )}
                        </div>
                        {duration}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFilters;