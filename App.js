import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

const App = () => {
  // Load todos from localStorage or use empty array
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [filter, setFilter] = useState('all');

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Get filtered todos based on the current filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') {
      return !todo.completed;
    } else if (filter === 'completed') {
      return todo.completed;
    }
    return true;
  });

  // Count active todos
  const activeTodoCount = todos.filter(todo => !todo.completed).length;

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="p-8">
          <Header />
          <TodoForm addTodo={addTodo} />
          <TodoList 
            todos={filteredTodos} 
            deleteTodo={deleteTodo} 
            toggleTodo={toggleTodo} 
          />
          {todos.length > 0 && (
            <Footer 
              activeCount={activeTodoCount}
              filter={filter}
              setFilter={setFilter}
              clearCompleted={clearCompleted}
              completedCount={todos.length - activeTodoCount}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;