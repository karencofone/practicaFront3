import React, { useState } from 'react'

const Formexample = () => {

    const gh = ["juan", "tora", "nacho", "cata", "thiago", "julieta REYNA", "juliana", "maxi", "marcos", "romina", "coti", "el cone", "froddo", "ALFA 🧡"]

    const [user, setUser] = useState({
        nombre:"",
        apellido:"",
        edad:"",
        contrasenia:"",
        personaje:""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if(user.nombre.length > 3 && user.contrasenia.length > 5){
            alert('Bien ahí!')
        }
    }

    const [jugadorSelecc, setJugadorSelecc] = useState()

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input name="nombre" type="text" onChange={(e) => setUser({...user, nombre: e.target.value})} />
        <label>Apellido</label>
        <input name="apellido" type="text" onChange={(e) => setUser({...user, apellido: e.target.value})} />
        <label>Edad</label>
        <input name="edad" type="number" onChange={(e) => setUser({...user, edad: e.target.value})}/>
        <label>Contraseña</label>
        <input name="contrasenia" type="password" onChange={(e) => setUser({...user, contrasenia: e.target.value})}/>
        <div>
            <h2>¿Quién querés que se vaya?</h2>
            <select name="" id="" onChange={(e) => {
                setJugadorSelecc(e.target.value)
                setUser({...user, personaje: e.target.value})}
                }>
                <option value="">Jugador</option>
                {gh.map((item, index) => <option key={index}>{item}</option>)}
            </select>
        </div>
        
        <button>REGISTRAR VOTO</button>
      </form>

      <div>
        <h3>Nombre: {user.nombre}</h3>
        <h3>Apellido: {user.apellido}</h3>
        <h4>Edad: {user.edad}</h4>
        <h4>Contraseña: {user.contrasenia}</h4>
        <h4>Quién se va? {user.personaje}</h4>
      </div>
    </>
  )
}

export default Formexample
