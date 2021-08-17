import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Tarjeta from './Tarjeta';
import './Inicio.css';
import './Navbar.css'
import poligono from './assets/poligono.png'

const InicioWindbnb = () => {
const [activo, setActivo] = useState(false)
const [hoteles, setHoteles] = useState([]);
const [location, setLocation] = useState('')
const [cantidad, setCantidad] = useState(0)

useEffect(()=>{
const informacionHoteles = async()=>{
const res = await axios('./hoteles.json')
const propiedades = res.data;
setHoteles(propiedades)
}
informacionHoteles();
}, []);


const enviarFormulario = async() =>{
const res = await axios('./hoteles.json')
const propiedades = res.data;
const nuevoArray = await propiedades.filter(item => item.city === location && item.beds >= cantidad)
setHoteles(nuevoArray)
console.log(hoteles)
}
const buscar = (e) => {
e.preventDefault()
enviarFormulario()
setCantidad(0)
setActivo(false)
}

const abrirMenu = ()=>{
setActivo(true)
}
return (
<div className='contenedor-general'>
    <div className='navbar'>
        <div className="logo">
            <a href="/windbnb"><img src={poligono} alt="triangulo naranja de logo" /></a>
        </div>
        <div className='input'>
            <button onClick={()=>abrirMenu()}
                className='location'>Add Location
            </button>
            <button onClick={()=>abrirMenu()}
                className='guest' >Add Guests</button>
            <i class="fas fa-search"></i>
        </div>
        <div className={activo ? 'menu' : 'menuEscondido' }>
            <form className='formulario' onSubmit={enviarFormulario}>
                <select className='select' onChange={(e)=>setLocation(e.target.value)}
                    aria-label='Default select example'
                    defaultValue='Location'
                    >

                    <option className='opcion' value='Location'>Location</option>
                    <option className='opcion' value="Helsinki">Helsinki</option>
                    <option className='opcion' value="Turku">Turku</option>
                    <option className='opcion' value="Oulu">Oulu</option>
                    <option className='opcion' value="Vaasa">Vaasa</option>


                </select>
                <input type="number" placeholder='guests' min="0" max="6" onChange={(e)=>setCantidad(e.target.value)}
                className='input-form'
                value={cantidad}
                />
                <button className='btn-buscar' onClick={(e)=> buscar(e)}><i class="fas fa-search"></i>Search</button>
            </form>
        </div>

    </div>
    <h3 className='titulo-hotel'>Stay in Finland</h3>

    <div className='contenedor-hoteles'>
        {

        hoteles < 1 ? (<h4 className='mensaje'>Disculpe no hay alojamientos con esas características</h4>) : ( hoteles.map(item=> (
            <Tarjeta key={item.photo} imagen={item.photo} beds={item.beds} city={item.city} country={item.country}
                maxGuests={item.maxGuests} rating={item.rating} superHost={item.superHost} title={item.title}
                type={item.type} />
            )
            ))
            }
    </div>

</div>
)
}

export default InicioWindbnb