// Import necessary React modules
import React, { useState, useEffect } from 'react';
import './TodoList.css'

// TodoList component
const TodoList = () => {
  // State to store the todo list data
  const [todos, setTodos] = useState([]);

  // Effect to fetch data from the API when the component mounts
  useEffect(() => {
    // Function to fetch todo list data
    const fetchTodos = async () => {
      try {
        // Fetch data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();

        // Update state with the fetched data
        setTodos(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchTodos function
    fetchTodos();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Render the TodoList component
  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <ul>
        {/* Map through the todos array and render each todo */}
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
