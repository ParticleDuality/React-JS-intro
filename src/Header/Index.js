import React from 'react'
import './Header.css'

export function Header({ total, completed }) {
  return (
    <div className="container">
      <h1 className="title">TODO MACHINE 🕑</h1>
      <h2 className="todo-counter">Has <b>completado { completed }</b> de { `${total} ${total <= 1 ? 'TODO' : 'TODOs' }` }</h2>
    </div>
  )
}
