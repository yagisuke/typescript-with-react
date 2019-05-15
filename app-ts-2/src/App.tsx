import React from 'react'
import { Store } from './Store'

type ActionType = {
  type: 'ADD' | 'SUB' | 'RES'
}

export default function App(): JSX.Element {
  const store = React.useContext(Store)

  const reducer = (state: number, action: ActionType): number => {
    switch(action.type) {
      case 'ADD': return state +1
      case 'SUB': return state -1
      case 'RES': return 0
    }
  }
  const [count, dispatch] = React.useReducer(reducer, 0)

  return (
    <>
      {console.log(store)}
      <h1>Rick and Morty</h1>
      <p>Pick your favourites episode!!</p>
      <section>
        <h1>Simple Counter</h1>
        <div>{count}</div>
        <button type="button" onClick={() => dispatch({ type: 'ADD' })}>+</button>
        <button type="button" onClick={() => dispatch({ type: 'SUB' })}>-</button>
        <button type="button" onClick={() => dispatch({ type: 'RES' })}>reset</button>
      </section>
    </>
  )
}
