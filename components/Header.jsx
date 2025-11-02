import React from 'react';

const Header = () => {
  return (
    <header className="mb-8 text-center">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Todo App
      </h1>
      <p className="text-gray-600 mt-2">
        Stay organized and get things done
      </p>
    </header>
  );
};

export default Header;