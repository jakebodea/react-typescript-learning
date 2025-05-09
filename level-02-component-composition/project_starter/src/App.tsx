import { useState } from 'react'
import { TodoForm } from './components/TodoForm'
import type TTodoItem from './types/TTodoItem'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [todoList, updateTodoList] = useState<TTodoItem[]>([])

  return (
    <>
      <div>
        <h1>ToDo List App!</h1>
        <TodoForm list={todoList} updateList={updateTodoList}/>
        <TodoList list={todoList} updateList={updateTodoList}/>

      </div>
    </>
  )
}

export default App
