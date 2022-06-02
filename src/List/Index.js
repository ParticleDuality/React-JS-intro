import React from 'react'
import './List.css'

export function List(props) {
  return (
    <div className='list'>
      <ul>{props.children}</ul>

      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.searchedTodos.length && props.onEmpty()}

      {props.searchedTodos.map((todo, index) => props.render(todo, index))}
    </div>
  )
}
