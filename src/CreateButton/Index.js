import React from 'react'
import './CreateButton.css'

export function CreateButton({ setModalIsOpen }) {
  const onClickButton = () => {
    setModalIsOpen(true)
  }

  return (
    <button className="create-button" type="button" onClick={onClickButton}>
      +
    </button>
  )
}
