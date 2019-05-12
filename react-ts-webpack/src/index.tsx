import React, { useState} from 'react'
import ReactDom from 'react-dom'

type FormElem = React.FormEvent<HTMLFormElement>

type ITodo = {
  text: string,
  complete: boolean
}

export default function App(): JSX.Element {
  const [value, setValue] = useState<string>('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }
  
  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, {text, complete: false}]
    setTodos(newTodos)
  }

  const completeTodo = (index: number): void => {
    const tempTodos: ITodo[] = [...todos]
    tempTodos[index].complete = !tempTodos[index].complete
    setTodos(tempTodos)
  }

  const removeTodo = (index: number): void => {
    const tempTodos: ITodo[] = [...todos]
    tempTodos.splice(index, 1)
    setTodos(tempTodos)
  }

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => {
          return (
            <div key={index}>
              <span style={{ textDecoration: todo.complete ? 'line-through' : ''}}>
                {todo.text}
              </span>
              <button type="button" onClick={() => completeTodo(index)}>
                {todo.complete ? 'InComplete' : 'Complete'}
              </button>
              <button type="button" onClick={() => removeTodo(index)}>
                Remove
              </button>
            </div>
          )
        })}
      </section>
    </>
  )
}

const root = document.getElementById('app-root')

ReactDom.render(<App />, root)
