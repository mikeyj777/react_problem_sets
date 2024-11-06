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
  }

  const handleSubmit = (event) => {
    if (event.key === 'Enter' && newTodo.trim()) {
    event.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo('');
    }
  }

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  const removeLastTodo = () => {
    if (!todos.length) return;
    setTodos(todos => todos.slice(0,-1));
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
      <div className="todo-container">
        {todos.map((todo, index) => (
            <div key={index} className="todo-item">
                <span className="todo-text">{todo}</span>
                <CustomButton
                    variant="minus"
                    onClick={() => removeTodo(index)}
                />
            </div>
        ))}
      </div>
      <div className="todo-pop">
        <CustomButton variant="pop" onClick={() => removeLastTodo()} label="Remove Last Todo">
          Remove Last Todo
        </CustomButton>

      </div>
    </div>
  );
};

export default Proj003ToDoList;





// const removeTodo = (index) => {
//   const updatedTodos = [...todos];
//   updatedTodos.splice(index, 1);
//   setTodos(updatedTodos);
// }

// const removeLastTodo = () => {
//   if (!todos.length) return;
//   setTodos(todos => todos.slice(0,-1));
// }

// return (
//   <div className="component-group">
//     <h1>Project 3</h1>
//     <h2>Project 3 ToDo List</h2>
//     <input 
//       className=".custom-input" 
//       type="text" 
//       value={newTodo} 
//       onChange={handeNewTodo} 
//       onKeyDown={handleSubmit}
//       label="new To Do"
//     />
//     <div className="todo-container">
//       {todos.map((todo, index) => (
//           <div key={index} className="todo-item">
//               <span className="todo-text">{todo}</span>
//               <CustomButton
//                   variant="minus"
//                   onClick={() => removeTodo(index)}
//               />
//           </div>
//       ))}
//     </div>
//     <CustomButton
//         variant="minus"
//         onClick={removeLastTodo()}
//         label="Remove Last Todo"
//     />
//   </div>
// );