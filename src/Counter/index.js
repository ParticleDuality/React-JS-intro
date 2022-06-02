import React from "react"
import "./Counter.css"

export function Counter({ totalTodos, completedTodos }) {
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
