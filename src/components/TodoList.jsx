import React from 'react'
import ListItems from './ListItems'

function TodoList({ todos, handleChange, action}) {
  return (
    <>
        <ul>
            {todos.map(todo => {
              const {id} = todo
             return ( 
              <ListItems
                  key={id}
                  id={id}
                  todo={todo}
                  handleChange={() => handleChange(id)}
                  onClick={() => action(id)}
              />)
            }
            )}
        </ul>
    </>
  )
}

export default TodoList