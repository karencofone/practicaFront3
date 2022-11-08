import React from "react";
import Item from "./Item";

const Card = ({setTotal, totalCantidad, setPrecio, totalPrecio}) => {

    const productos = [
        {
          id: 1,
          nombre: "Macbook",
          img: "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
          precio:  7999
        },
        {
          id: 2,
          nombre: "Parlante",
          img: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
          precio:  379
        },
        {
          id: 3,
          nombre: "Camara",
          img: "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
          precio:  99
        },
        {
          id: 4,
          nombre: "Control",
          img: "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
          precio:  1599
        }
    ]

    return(
        <div>
            {productos.map(item => <Item key={item.id} producto={item} setTotal={setTotal} totalCantidad={totalCantidad} setPrecio={setPrecio} totalPrecio={totalPrecio}/>)}
        </div>
    ) 
};

export default Card;