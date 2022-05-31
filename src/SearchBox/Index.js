import React from 'react'
import { Context } from '../Context'
import './SearchBox.css'

export function SearchBox() {
  const { searchValue, setSearchValue } = React.useContext(Context)

  const onSearchChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return (
    <input
      className="search-box"
      placeholder="Buscar TODOs..."
      value={searchValue}
      onChange={onSearchChange}
    />
  )
}
