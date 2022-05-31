import React from 'react'
import './Loading.css'

export function Loading() {
  return (
    <ul className="loading-container">
      {
        new Array(4).fill().map((item, index) => (
          <li className='loading-skeleton' key={index}></li>
        ))
      }
    </ul>
  )
}
