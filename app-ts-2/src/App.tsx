import React from 'react'
import { Store } from './Store'

export default function App(): JSX.Element {
  const store = React.useContext(Store)

  return (
    <>
      {console.log(store)}
      <h1>Rick and Morty</h1>
      <p>Pick your favourites episode!!</p>
    </>
  )
}
