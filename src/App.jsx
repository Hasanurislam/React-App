import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <div>
    <h1>Welcome to tudo App</h1>
    <p>This is a tudo app using react</p>
    <button>click Me</button>
  </div>
   
}

export default App
