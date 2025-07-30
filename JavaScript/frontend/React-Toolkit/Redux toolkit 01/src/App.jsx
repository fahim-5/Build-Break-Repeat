import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterView  from './features/counter/counterView.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Counter App</h1>
     <CounterView/>
    </>
  )
}

export default App
