import React from 'react';

const TodoFilters = ({ filter, setFilter }) => {
  return (
    <div className="flex space-x-1">
      <FilterButton 
        text="All" 
        isActive={filter === 'all'} 
        onClick={() => setFilter('all')} 
      />
      <FilterButton 
        text="Active" 
        isActive={filter === 'active'} 
        onClick={() => setFilter('active')} 
      />
      <FilterButton 
        text="Completed" 
        isActive={filter === 'completed'} 
        onClick={() => setFilter('completed')} 
      />
    </div>
  );
};

const FilterButton = ({ text, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-md text-sm transition-colors ${
        isActive
          ? 'bg-blue-100 text-blue-700 font-medium'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {text}
    </button>
  );
};

export default TodoFilters;