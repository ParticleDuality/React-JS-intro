import React from 'react'
import './SearchBox.css'

export function SearchBox({ searchValue, setSearchValue }) {
  const onSearchChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return (
    <input
      className="search-box"
      placeholder="Busca un TODO..."
      value={searchValue}
      onChange={onSearchChange}
    />
  )
}
