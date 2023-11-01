import React, { useState } from 'react';
import './App.css'

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [selectedTasks, setSelectedTasks] = useState([]);

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, { task: task, completed: false }]);
      setTask('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }; 

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const showCompletedTasks = () => {
    const completedTasks = todos.filter((e) => e.completed);
    setSelectedTasks(completedTasks);
  };

  return (
      <div className="todo-app">
    <h1>Todo App</h1>
    <div className="todo-input-container">
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
    <div>
      <button className='btn-complete' onClick={showCompletedTasks}>Show Completed Tasks</button>
    </div>
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(index)}
          />
          {todo.task}
          <button onClick={() => removeTodo(index)}>Remove</button>
        </li>
      ))}
    </ul>
    <div className="completed-tasks">
      <h2>Selected (Completed) Tasks:</h2>
      <ul>
        {selectedTasks.map((task, index) => (
          <li key={index}>{task.task}</li>
        ))}
      </ul>
    </div>
  </div>
  );
}

export default TodoApp;
