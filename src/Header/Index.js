import React from 'react'
import './Header.css'

export function Header() {
  return (
    <div className="container">
      <h1 className="title">TODO MACHINE 🕑</h1>
      <h2 className="todo-counter">Has <b>completado 2</b> de 3 TODO's</h2>
    </div>
  )
}
