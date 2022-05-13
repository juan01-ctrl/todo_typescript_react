import React from 'react'
import Header from '../components/header/Header'
import Todo from '../components/todo/Todo'




const TodoPage = () => {

  const todoStyles = {
    minHeight: "100vh",
    backgroundColor:"#1f1c1c",
  }

  return (
    <div style={todoStyles}>
        <Header/>
        <Todo/>
    </div>
  )
}

export default TodoPage