import React from "react"
import { useTodos } from "./useTodos"
import { Header } from "../Header"
import { SearchBox } from "../SearchBox"
import { List } from "../List"
import { Item } from "../Item"
import { CreateButton } from "../CreateButton"
import { Modal } from "../Modal"
import { Form } from "../Form"
import { Error } from "./Error"
import { Loading } from "./Loading"
import { NotFound } from "./NotFound"
import { Counter } from "../Counter"

function App() {
  const {
    error,
    loading,
    changeTodoStatus,
    deleteTodo,
    searchedTodos,
    modalIsOpen,
    setModalIsOpen,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos()

  return (
    <>
      <Header>
        <Counter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />

        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </Header>

      <List>
        {error && <Error error={error} />}
        {loading && <Loading />}
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
          <Form 
            addTodo={addTodo}
            setModalIsOpen={setModalIsOpen}
          />
        </Modal>
      )}

      <CreateButton 
        setModalIsOpen={setModalIsOpen}
        modalIsOpen={modalIsOpen}
      />
    </>
  )
}

export default App
