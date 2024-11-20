import React from 'react'
import TodoCard from './TodoCard'

const TodoList = ({handleDelete, handleEdit, todo}) => {
  return (
    <div>
        <ul className='main'>
            {todo.map((todo, index) => (
                <TodoCard key={index} handleDelete={handleDelete} handleEdit={handleEdit} todo={todo}  index={index}/>
            ))}     
        </ul>
    </div>
  )
}

export default TodoList
