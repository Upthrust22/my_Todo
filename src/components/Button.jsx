import React from 'react'

function Button(props) {
  return (
    <button onClick={props.action} className={props.className}>
        {props.title}
    </button>
  )
}

export default Button