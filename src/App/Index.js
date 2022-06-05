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
import { Empty } from "./Empty"
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
      <Header loading={loading}>
        <Counter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          // loading={loading}
        />

        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          // loading={loading}
        />
      </Header>

      <List
        totalTodos={totalTodos}
        searchText={searchValue}
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={() => <Error />}
        onLoading={() => <Loading />}
        onEmpty={() => <Empty />}
        onEmptySearch={(searchText) => (
          <p className="empty-label">
            No se encontró un TODO para {searchText}
          </p>
        )}
        // render={(todo, index) => (
        //   <Item
        //     key={index}
        //     {...todo}
        //     onChangeStatus={() => changeTodoStatus(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
        {(todo, index) => (
          <Item
            key={index}
            {...todo}
            onChangeStatus={() => changeTodoStatus(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </List>

      {/* <List>
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
      </List> */}

      {modalIsOpen && (
        <Modal>
          <Form addTodo={addTodo} setModalIsOpen={setModalIsOpen} />
        </Modal>
      )}

      <CreateButton setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen} />
    </>
  )
}

export default App
