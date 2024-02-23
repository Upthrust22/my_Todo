import React from 'react'
import ListItems from './ListItems'

function TodoList({ todos, handleChecked, handleDelete}) {
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
                  handleChecked={handleChecked}
                  handleDelete={handleDelete}
              />)
            }
            )}
        </ul>
    </>
  )
}

export default TodoList