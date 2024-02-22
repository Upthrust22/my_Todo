import React from 'react'

function Input(props) {
  return (
    <>
        <input
            className={props.className}
            placeholder={props.placeholder} 
            type={props.type} 
            value={props.value} 
            name={props.inputName} 
            onChange={props.handleInputChange}
            checked={props.checked}
            onKeyPress={props.keyPress} 
        />
    </>
  )
}

export default Input; 