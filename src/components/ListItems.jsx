import React from 'react';
import Input from './Input';
import Button from './Button';

function ListItems({ todo, handleChange, value, onClick }) {
  return (
    <>
        <li className={todo.checked ? "completed" : ""}>
            <Input
                className="checkbox" 
                type="checkbox"
                checked={todo.checked}
                value={value}
                handleChange={handleChange}
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