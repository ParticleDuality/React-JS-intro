import React from 'react'
import './Header.css'

export function Header({ children, loading }) {
  return <header className="parent-header">
    { 
      React.Children
        .toArray(children)
        .map(child => React.cloneElement(child, { loading }))
    }
  </header>
}