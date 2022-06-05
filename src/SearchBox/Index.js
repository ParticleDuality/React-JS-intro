import React from 'react'
import './SearchBox.css'

export function SearchBox({ searchValue, setSearchValue, loading }) {
  const onSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <input
      className="search-box"
      placeholder="Buscar TODOs..."
      value={searchValue}
      onChange={onSearchChange}
      disabled={loading}
    />
  )
}
