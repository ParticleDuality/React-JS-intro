import React from "react"
import withStorageListener from "./withStorageListener"
import './ChangeAlert.css'

export function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div className="change-alert-bg">
        <div className="change-alert-container">
          <p>
            Parece que cambiaste tus TODOs en otra pestaña o ventana del
            navegador.
          </p>
          <p>¿Quieres sincronizar tus TODOs?</p>
          <button
            className="button button-add"
            onClick={toggleShow}
          >
            Yes!
          </button>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)
