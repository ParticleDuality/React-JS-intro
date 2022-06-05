import React from "react"
import "./Counter.css"

export function Counter({ totalTodos, completedTodos, loading }) {
  return (
    <div className="header-container">
      <h1 className="title">TODO MACHINE 🕑</h1>
      <h2 className={`todo-counter ${loading && 'todo-counter--loading'}`}>
        Has <b>completado {completedTodos}</b> de{" "}
        {`${totalTodos} ${totalTodos === 1 ? "TODO" : "TODOs"}`}
      </h2>
    </div>
  )
}
