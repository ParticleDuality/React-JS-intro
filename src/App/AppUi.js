import React from 'react'
import { Context } from '../Context'
import { Header } from "../Header"
import { SearchBox } from "../SearchBox"
import { List } from "../List"
import { Item } from "../Item"
import { CreateButton } from "../CreateButton"
import { Modal } from '../Modal'
import { Form } from '../Form'

export function AppUi() {
  const { 
    error,
    loading,
    changeTodoStatus,
    deleteTodo,
    searchedTodos,
    modalIsOpen,
    setModalIsOpen
  } = React.useContext(Context)

  return (
    <>
      <Header />

      <SearchBox />

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

      {modalIsOpen && (
        <Modal>
          <Form />
        </Modal>
      )}

      <CreateButton 
        setModalIsOpen={setModalIsOpen} 
        modalIsOpen={modalIsOpen}
      />
    </>
  )
}