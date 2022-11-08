import React from 'react'

const Cabecera = ({totalCantidad, totalPrecio}) => {
  return (
    <header>
        <h1>Tienda online Ariel Cofone</h1>
        <p>PRODUCTOS: <span>{totalCantidad}</span></p>
        <p>PRECIO: $<span>{totalPrecio}</span></p>
    </header>
  )
}

export default Cabecera
