import React from 'react';

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <li className="py-3 group transition-all duration-200 hover:bg-gray-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => toggleTodo(todo.id)}
            className={`w-5 h-5 border rounded-full mr-3 flex items-center justify-center transition-colors ${
              todo.completed ? 'bg-green-500 border-green-500' : 'border-gray-400'
            }`}
          >
            {todo.completed && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
          <span
            className={`text-gray-800 ${
              todo.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            {todo.text}
          </span>
        </div>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-gray-400 hover:text-red-600 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;