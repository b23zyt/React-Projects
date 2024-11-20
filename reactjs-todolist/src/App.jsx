import React, { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"



const App = () => {

  const [todo, setTodo] = useState([
    "go to the supermarket",
    "吃饭",
    "cook dinner"
  ]);

  const storeData = (newList) => {
    localStorage.setItem('todo', JSON.stringify({ todo: newList }))
  }

  const [text, setText] = useState("");

  const handleUpdate = (newItem) => {
    setTodo([...todo, newItem])
    storeData([...todo, newItem])
  }

  const handleDelete = (index) => {
    setTodo(todo.filter((todo, todoIndex) => (
      todoIndex !== index
    )))
    storeData(todo.filter((todo, todoIndex) => (
      todoIndex !== index
    )))
  }

  const handleEdit = (index) => {
    setText(todo[index])
    handleDelete(index)
  }

  //utilize useEffect to keep the data during refresh
  useEffect(() => {
    if(!localStorage){
      return
    }
    let localTodo = localStorage.getItem("todo")
    if(!localTodo) return
    setTodo(JSON.parse(localTodo).todo)
  }, [])

  return (
    <div>
      <TodoInput text={text} setText={setText} handleUpdate={handleUpdate}/>
      <TodoList handleDelete={handleDelete} handleEdit={handleEdit} todo={todo}/>
    </div>
  )
}

export default App
