import React from 'react'
import { useLocalStorage } from '../Hooks/useLocalStorage'

export const Context = React.createContext()

export function Provider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", [])

  const [searchValue, setSearchValue] = React.useState("")
  const [modalIsOpen, setModalIsOpen] = React.useState(false)

  const completedTodos = todos.filter((todo) => todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = todos

  if (searchValue.length > 0) {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()

      return todoText.includes(searchText)
    })
  }

  const changeTodoStatus = (name) => {
    const todoIndex = todos.findIndex((todo) => todo.text === name)
    const newTodos = [...todos]

    newTodos[todoIndex].completed === true
      ? (newTodos[todoIndex].completed = false)
      : (newTodos[todoIndex].completed = true)
    saveTodos(newTodos)
  }

  const deleteTodo = (name) => {
    const todoIndex = todos.findIndex((todo) => todo.text === name)
    const newTodos = [...todos]

    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <Context.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      changeTodoStatus,
      deleteTodo,
      modalIsOpen,
      setModalIsOpen
    }}>
      { props.children }
    </Context.Provider>
  )
}