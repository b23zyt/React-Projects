import React, { useState } from 'react'

const TodoInput = ({text, setText, handleUpdate}) => {

  

  const handleChange = (event) =>{
    setText(event.target.value);
  }

  const handleClick = () => {
    handleUpdate(text);
    setText("");
  }

  return (
    <header>
        <input onChange={handleChange} value={text} placeholder='Enter todos...'/>
        <button onClick={handleClick}>Add</button>
    </header>
  )
}

export default TodoInput
