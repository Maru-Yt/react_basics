import { useState } from 'react'

import './App.css'
import Card from './card'
import Football from './football'
import Basketball from './Basketball'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Wilkommen!!!</h1>
     <div className="card-container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
      <div className="football-container">
       <Football />
       <Football />
       <Football />
       <Football />
       <Football />
       <Football />
      </div>
      <div className="basketball-container">
        <Basketball />
        <Basketball />
        <Basketball />
        <Basketball />
        <Basketball />
        <Basketball />
      </div>

    </>
  )
}

export default App
