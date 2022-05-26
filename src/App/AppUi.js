import React from 'react'
import { Header } from "../Header"
import { SearchBox } from "../SearchBox"
import { List } from "../List"
import { Item } from "../Item"
import { CreateButton } from "../CreateButton"

export function AppUi({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  changeTodoStatus,
  deleteTodo
}) {
  return (
    <>
      <Header total={totalTodos} completed={completedTodos} />

      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />

      <List>
        {searchedTodos.map((todo, index) => (
          <Item
            key={index}
            {...todo}
            onChangeStatus={() => changeTodoStatus(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </List>

      <CreateButton />
    </>
  )
}