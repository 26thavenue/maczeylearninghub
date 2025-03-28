import { useState } from 'react';
import { X, Check } from 'lucide-react';
import  Button from '../Buttons';

export interface FilterOptions {
  school: string[];
  location?: string[];
}

interface CourseFiltersProps {
  filters: FilterOptions;
  activeFilters: {
    school: string[];
    location: string[];
  };
  setActiveFilters: React.Dispatch<React.SetStateAction<{
    school: string[];
    location: string[];
  }>>;
}

const CourseFilters = ({ filters, activeFilters, setActiveFilters }: CourseFiltersProps) => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const toggleFilter = (type: 'school'  | 'location', value: string) => {
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
      school: [],
      location: []
    });
  };

  const totalActiveFilters = 
    activeFilters.school.length +  
    activeFilters.location.length;

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
                {filters.school.map(school => (
                  <div key={school} className="flex items-center">
                    <button
                      className="flex items-center w-full py-1.5 text-left text-sm group"
                      onClick={() => toggleFilter('school', school)}
                    >
                      <div className={`
                        w-5 h-5 rounded-md border mr-3 flex items-center justify-center
                        ${activeFilters.school.includes(school) 
                          ? 'bg-primary border-primary text-white' 
                          : 'border-gray-300 group-hover:border-primary'}
                      `}>
                        {activeFilters.school.includes(school) && (
                          <Check size={14} />
                        )}
                      </div>
                      {school}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
      
            
            {/* location */}
            {filters.location && (
              <div>
                <h4 className="font-medium mb-3">Location</h4>
                <div className="space-y-2">
                  {filters.location.map(location => (
                    <div key={location} className="flex items-center">
                      <button
                        className="flex items-center w-full py-1.5 text-left text-sm group"
                        onClick={() => toggleFilter('location', location)}
                      >
                        <div className={`
                          w-5 h-5 rounded-md border mr-3 flex items-center justify-center
                          ${activeFilters.location.includes(location) 
                            ? 'bg-primary border-primary text-white' 
                            : 'border-gray-300 group-hover:border-primary'}
                        `}>
                          {activeFilters.location.includes(location) && (
                            <Check size={14} />
                          )}
                        </div>
                        {location}
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