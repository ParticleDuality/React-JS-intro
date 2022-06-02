import React from "react"
import "./Empty.css"

export function Empty() {
  return (
    <div className="empty-label">
      <p>No encontramos ningún TODO.</p>
      <p>¡Crea uno nuevo!</p>
    </div>
  )
}
