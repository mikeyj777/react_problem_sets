import React, { useState } from 'react';
import './ui/CustomUI.css'
import '../style/Proj003.css';
import CustomInput from './ui/CustomInput';
import CustomButton from './ui/CustomButton';

const Proj003ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handeNewTodo = (event) => {
    setNewTodo(event.target.value);
    event.target.value = '';
  }

  const handleSubmit = (event) => {
    if (event.key === 'Enter' && newTodo.trim()) {
      event.preventDefault();
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  }

  return (
    <div className="component-group">
      <h1>Project 3</h1>
      <h2>Project 3 ToDo List</h2>
      <input 
        className=".custom-input" 
        type="text" 
        value={newTodo} 
        onChange={handeNewTodo} 
        onKeyDown={handleSubmit}
        label="new To Do"
      />
      <div className="array-display">
        <span className="array-display__bracket">[</span>
          {todos.map((item, index) => (
              <span key={index}>
                  {item}
                  {index < todos.length - 1 && (
                      <span className="array-display__comma">,</span>
                  )}
              </span>
          ))}
          <span className="array-display__bracket">]</span>
      </div>
    </div>
  );
};

export default Proj003ToDoList;