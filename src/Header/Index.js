import React from 'react'
import { Context } from '../Context'
import './Header.css'

export function Header() {
  const { totalTodos, completedTodos } = React.useContext(Context)

  return (
    <div className="header-container">
      <h1 className="title">TODO MACHINE 🕑</h1>
      <h2 className="todo-counter">
        Has <b>completado {completedTodos}</b> de{" "}
        {`${totalTodos} ${totalTodos === 1 ? "TODO" : "TODOs"}`}
      </h2>
    </div>
  )
}
