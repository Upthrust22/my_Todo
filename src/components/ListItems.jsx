import React from 'react';
import Input from './Input';
import Button from './Button';

function ListItems({ todo, handleChecked, value, handleDelete }) {
  const {checked, id,} = todo
  return (
    <>
        <li className={checked ? "completed" : ""}>
            <Input
                className="checkbox" 
                type="checkbox"
                checked={checked}
                value={value}
                handleInputChange={() => handleChecked(id)}
            />
            {todo.text}
            <Button
                handleClick={() => handleDelete(id)}
                className="btn btn-delete"
                title="Delete"
            />
        </li>
    </>
  )
}

export default ListItems