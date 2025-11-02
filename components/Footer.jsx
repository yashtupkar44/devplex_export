import React from 'react';
import TodoFilters from './TodoFilters';

const Footer = ({ activeCount, filter, setFilter, clearCompleted, completedCount }) => {
  return (
    <footer className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100 text-sm text-gray-600">
      <div>
        <span>
          {activeCount} {activeCount === 1 ? 'item' : 'items'} left
        </span>
      </div>
      <TodoFilters filter={filter} setFilter={setFilter} />
      {completedCount > 0 && (
        <button
          onClick={clearCompleted}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default Footer;