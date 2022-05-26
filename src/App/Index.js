import React from "react"
import { AppUi } from "./AppUi"
import { useLocalStorage } from "../Hooks/useLocalStorage"

// const DEFAULT_TODOS = [
//   { text: "Estudiar", completed: true },
//   { text: "Trabajar", completed: false },
//   { text: "Leer", completed: false },
// ]
export function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", [])

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
    saveTodos(newTodos)
  }

  const deleteTodo = (name) => {
    const todoIndex = todos.findIndex((todo) => todo.text === name)
    const newTodos = [...todos]

    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
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
