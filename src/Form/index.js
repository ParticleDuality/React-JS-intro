import React from 'react'
import { useTodos } from '../App/useTodos'
import './Form.css'

export function Form({ setModalIsOpen, addTodo }) {
  const [newTodoValue, setNewTodoValue] = React.useState('')

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  const onCancel = () => {
    setModalIsOpen(false)
  }
  
  const onSave = (event) => {
    event.preventDefault()
    addTodo(newTodoValue)
    setModalIsOpen(false)
  }
  
  return (
    <form onSubmit={onSave}>
      <div className="input-container">
        <h2 className="label">Agrega un nuevo TODO</h2>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Ingresa un TODO"
        />
      </div>
      <div className='button-container'>
        <button className="button button-cancel" type="button" onClick={onCancel}>
          Cancelar
        </button>

        <button className="button button-add" type="submit">
          Guardar
        </button>
      </div>
    </form>
  )
}
