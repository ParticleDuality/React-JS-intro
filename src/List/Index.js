import React from 'react'
import './List.css'

export function List(props) {
  return (
    <div className="list">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onEmpty()}

      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearch(props.searchText)}

        {props.searchedTodos.map(
          props.children || props.render
        )}
    </div>
  )
}
