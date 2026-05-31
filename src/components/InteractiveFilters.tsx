import { useState } from 'react';
import { Filter } from 'lucide-react';

interface InteractiveFiltersProps {
  onFilterChange: (activeFilters: string[]) => void;
}

const ALL_FILTERS = [
  'Low Capital',
  'Home-Based',
  'Online',
  'Service Business',
  'Agriculture',
  'Under ₦50k',
  'Under ₦100k'
];

export default function InteractiveFilters({ onFilterChange }: InteractiveFiltersProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    let newFilters;
    if (activeFilters.includes(filter)) {
      newFilters = activeFilters.filter(f => f !== filter);
    } else {
      newFilters = [...activeFilters, filter];
    }
    setActiveFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="my-8 bg-brand-bg rounded-2xl p-6 border border-gray-100">
      <div className="flex items-center gap-2 mb-4 text-brand-text font-bold">
        <Filter className="w-5 h-5 text-brand-primary" />
        <h3>Find a Business Idea</h3>
      </div>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {ALL_FILTERS.map(filter => {
          const isActive = activeFilters.includes(filter);
          return (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                isActive 
                  ? 'bg-brand-primary border-brand-primary text-white shadow-md shadow-brand-primary/20' 
                  : 'bg-white border-gray-200 text-brand-muted hover:border-brand-primary/50 hover:text-brand-text'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
}
