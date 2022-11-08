import { useState } from 'react'
import './App.css'
import Cabecera from './Components/Cabecera'
import Card from './Components/Card'
import Formexample from './Components/Formexample'

function App() {
  const [totalCantidad, setTotal] = useState(0)
  const [totalPrecio, setPrecio] = useState(0)

  return (
    <div className="App">
      <Cabecera totalCantidad={totalCantidad} totalPrecio={totalPrecio}/>
      <Formexample/>
      <Card setTotal={setTotal} totalCantidad={totalCantidad} totalPrecio={totalPrecio} setPrecio={setPrecio}/>
      <p>ESTO SE ESTÁ RENDERIZANDO</p>
    </div>
  )
}

export default App;
