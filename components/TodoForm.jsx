import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition">
        <input
          type="text"
          className="block w-full py-3 px-4 bg-transparent focus:outline-none text-gray-700 placeholder-gray-500"
          placeholder="What needs to be done?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-3 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none transition-colors duration-200"
          disabled={!value.trim()}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;