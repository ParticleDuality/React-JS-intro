import React from 'react'
import { Context } from '../Context'
import { Header } from "../Header"
import { SearchBox } from "../SearchBox"
import { List } from "../List"
import { Item } from "../Item"
import { CreateButton } from "../CreateButton"
import { Modal } from '../Modal'
import { Form } from '../Form'
import { Error } from './Error'
import { Loading } from './Loading'
import { NotFound } from './NotFound'

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
        {
          error && <Error error={error} />
        }
        {
          loading && <Loading />
        }
        {!loading && !searchedTodos.length && <NotFound />}

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