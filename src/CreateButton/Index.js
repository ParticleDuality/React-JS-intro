import React from 'react'
import './CreateButton.css'

export function CreateButton({ setModalIsOpen, modalIsOpen }) {
  const onClickButton = () => {
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <button className={(modalIsOpen && "close-button") || 'create-button'} type="button" onClick={onClickButton}>
      +
    </button>
  )
}
