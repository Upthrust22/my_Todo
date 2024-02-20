import React from 'react'
import ListItems from './ListItems'

function TodoList({ todos, handleChange, action}) {
  return (
    <>
        <ul>
            {todos.map(todo => (
                <ListItems
                    key={todo.id}
                    id={todo.id}
                    todo={todo}
                    handleChange={() => handleChange(todo.id)}
                    onClick={() => action(todo.id)}
                />
            ))}
        </ul>
    </>
  )
}

export default TodoList