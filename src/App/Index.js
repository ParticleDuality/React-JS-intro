import React from "react"
import { AppUi } from "./AppUi"
import { Provider } from "../Context"

// const DEFAULT_TODOS = [
//   { text: "Estudiar", completed: true },
//   { text: "Trabajar", completed: false },
//   { text: "Leer", completed: false },
// ]
export function App() {
  return (
    <Provider>
      <AppUi />
    </Provider>
  )
}

export default App
