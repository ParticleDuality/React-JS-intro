import React from "react"
import { AppUi } from "./AppUi"

export function App() {
  const DEFAULT_TODOS = [
    { text: "Estudiar", completed: true },
    { text: "Trabajar", completed: false },
    { text: "Leer", completed: false },
  ]

  const [todos, setTodos] = React.useState(DEFAULT_TODOS)
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = todos

  if (searchValue.length > 0) {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()

      return todoText.includes(searchText)
    })
  }

  const changeTodoStatus = (name) => {
    const todoIndex = todos.findIndex((todo) => todo.text === name)
    const newTodos = [...todos]
    
    newTodos[todoIndex].completed === true
      ? newTodos[todoIndex].completed = false
      : newTodos[todoIndex].completed = true 
    setTodos(newTodos)
  }

  const deleteTodo = (name) => {
    const todoIndex = todos.findIndex((todo) => todo.text === name)
    const newTodos = [...todos]

    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  return (
    <AppUi
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      changeTodoStatus={changeTodoStatus}
      deleteTodo={deleteTodo}
    />
  )
}

export default App
