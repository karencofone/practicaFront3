import React from 'react'

const Item = ({producto, setTotal, totalCantidad, setPrecio, totalPrecio}) => {
  

  const aumentarCantidad = () => {
    setTotal(totalCantidad + 1)
  }

  const sumarPrecio = () => {
    setPrecio(totalPrecio + producto.precio)
  }

  const agregar = () => {
    aumentarCantidad()
    sumarPrecio()
  }

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <img src={producto.img} alt={producto.nombre} />
      <h5>{producto.precio}</h5>
      <button onClick={agregar}>COMPRAR</button>
    </div>
  )
}
export default Item;
