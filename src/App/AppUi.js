import React from 'react'
import { Context } from '../Context'
import { Header } from "../Header"
import { SearchBox } from "../SearchBox"
import { List } from "../List"
import { Item } from "../Item"
import { CreateButton } from "../CreateButton"

export function AppUi() {
  return (
    <>
      <Header />

      <SearchBox />

      <Context.Consumer>
        {({ error, loading, changeTodoStatus, deleteTodo, searchedTodos }) => (
          <List>
            {error && <p>Ha ocurrido un error</p>}
            {loading && <p>Cargando...</p>}
            {!loading && !searchedTodos.length && <p>Crea tu primer TODO</p>}

            {searchedTodos.map((todo, index) => (
              <Item
                key={index}
                {...todo}
                onChangeStatus={() => changeTodoStatus(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </List>
        )}
      </Context.Consumer>

      <CreateButton />
    </>
  )
}