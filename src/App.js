// import './App.css';
import React from "react"
import { TodoCounter } from "./TodoCounter"
import { TodoSearch } from "./TodoSearch"
import { TodoList } from "./TodoList"
import { TodoItem } from "./TodoItem"

const TODOS = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tormar el curso de intro a react", completed: false },
  { text: "Llorar con la llorona", completed: false },
]

function App() {
  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        { TODOS.map(todo => (
          <TodoItem key={ todo.text } text={ todo.text } />
        ))}
      </TodoList>

      {/* <CreateTodoButton /> */}
    </>
  )
}

export default App
