import React from "react"
import { Header } from "../Header/Index"
import { SearchBox } from "../SearchBox/Index"
import { List } from "../List/Index"
import { Item } from "../Item/Index"
import { CreateButton } from "../CreateButton/Index"

const TODOS = [
  { text: "Estudiar", completed: true },
  { text: "Trabajar", completed: false },
  { text: "Leer", completed: false },
]

function App() {
  return (
    <>
      <Header />

      <SearchBox />

      <List>
        { TODOS.map(todo => (
            <Item key={ todo.text } text={ todo.text } completed={ todo.completed } />
        ))}
      </List>

      <CreateButton />
    </>
  )
}

export default App
