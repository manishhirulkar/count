import { useState } from 'react'
import './App.css'

function App() {
  let [number , setnumber]=useState(0)

  const addValue = () =>{
    setnumber(number+1)
  }

  const removeValue = () =>{
    setnumber(number-1)
  }


  return (
    <>
      <h1>Hare Krishna</h1>
      <h3>count {number}</h3>
      <button onClick={addValue}>Add Value</button>
      <br/>

      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
