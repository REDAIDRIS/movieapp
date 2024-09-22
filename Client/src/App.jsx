import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Splash from './compenents/splash'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="wrapper">
    <div className="container">
      <Splash/>
     </div>
    </div>
    </>
  )
}
export default App