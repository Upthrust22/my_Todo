import React from 'react';
import Input from './Input';
import Button from './Button';

function ListItems({ todo, handleInputChange, value, onClick }) {
  return (
    <>
        <li className={todo.checked ? "completed" : ""}>
            <Input
                className="checkbox" 
                type="checkbox"
                checked={todo.checked}
                value={value}
                handleInputChange={handleInputChange}
                todo={todo}
            />
            {todo.text}
            <Button
                action={onClick}
                className="btn btn-delete"
                title="Delete"
            />
        </li>
    </>
  )
}

export default ListItems