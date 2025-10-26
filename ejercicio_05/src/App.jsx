import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TarjetaProducto from './TarjetaProducto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TarjetaProducto></TarjetaProducto>
    </>
  )
}

export default App
