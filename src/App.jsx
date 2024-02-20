import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import Button from './components/Button';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedData = localStorage.getItem('myTodos');
    return savedData ? JSON.parse(savedData) : [];
  })
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todos));
  }, [todos]);

  function handleAddTodos() {
    if (inputValue.trim() !== "") {
      setTodos(prevTodos => (
        [ ...prevTodos, {
          id: uuidv4(),
          text: inputValue,
          checked: false
        }]
      ))
    }
    setInputValue("");
  }
  
  function handleDeleteTodo(id) {
    if(confirm("Are you sure")) {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    }
  }

  function handleCheckboxChange(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <div className='card'>
      <h1>Todo List</h1>
      <div className='inputContainer'>
        <input
              className="text-input" 
              type="text" 
              value={inputValue} 
              name="my-todos"
              placeholder='Enter Todo' 
              onChange={(e) => setInputValue(e.target.value)} 
        />
        <Button 
            action={handleAddTodos} 
            className="btn btn-add"
            title="Add"
        />

      </div>
      <div>
        <TodoList
          todos={todos}
          handleChange={handleCheckboxChange}
          action={handleDeleteTodo}
        />
      </div> 
    </div>
  )
}

export default App
