import React from 'react'

const TodoCard = ({handleDelete, handleEdit, todo, index}) => {
  const handleDeleteClick = () => {
    handleDelete(index)
  }

  const handleEditClick = () => {
    handleEdit(index)
  }
  return (
    <li className='todoItem'>
        <div className='actionsContainer'>
            {todo}
            <button onClick={handleEditClick}> 
              <i className='fa-solid fa-pen-to-square'></i>
            </button>
            <button onClick={handleDeleteClick}>
              <i className='fa-regular fa-trash-can'></i>
            </button>
        </div>            
    </li>
  )
}

export default TodoCard
