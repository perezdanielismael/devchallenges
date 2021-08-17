import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import TarjetaDiaria from './TarjetaDiaria'
import './pronostico.css'

const InicioPronostico = () => {


    const api_key = 'cd3ba7663651a6bd3c07a6a2473bbd7f'
    const [ciudad, setCiudad] = useState('')
    const [estado, setEstado] = useState(null)
    const [icono, setIcono] = useState('')
    const [temp, setTemp] = useState(0)
    const [name, setName] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [pronostico, setPronostico] = useState([])
    const [dia, setDia] = useState('')
    const [number, setNumber] = useState(0)
    const buscar = async() => {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${api_key}`)
        console.log(res.data)
        const lat = await res.data.coord.lat
        const lon = await res.data.coord.lon
        const img = await res.data.weather[0].icon
        const url = `http://openweathermap.org/img/wn/${img}@2x.png`
        const pronosticoExt = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,current&units=metric&lang=es&appid=${api_key}`)
        console.log(pronosticoExt.data)
        setPronostico(pronosticoExt.data.daily)
        setName(res.data.name)
        setTemp(res.data.main.temp)
        setDescripcion(res.data.weather[0].description)
        setIcono(url)
        setEstado(true)
        
    }
    useEffect(() => {
        const fecha = new Date()
        const semana = ['Domingo','Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
        setDia(semana[fecha.getDay()])
        setNumber(fecha.getDate())
    }, [])
    return (
        <div className='content-pro'>
            <div className='buscador'>
                <input type="text" placeholder='Ciudad' className='input-ciudad' onChange={(e)=> setCiudad(e.target.value)} />
                <button className='btn-ciudad' onClick={()=> buscar()}>Buscar</button>
            </div>
           
            {
                estado ? (
                <div className='contenedor-pronostico'> 
                    <div className='pronostico'>
                        <h1>Pronóstico del día</h1>
                        <img className='icono' src={icono} alt="" />
                        <h2> {name}, {dia} {number}</h2>
                        <h2 className='celsius'>{Math.floor(temp)}°C</h2>
                        {/*<h4>Humedad: {humedad}%</h4>*/}
                        <h4 className='descripcion'>{descripcion}</h4>
                    </div>
                    <div className='right'>
                        <h1 className='big'>Pronóstico Extendido</h1>
                    <div className='contenedor-dias'>

                        {
                            
                            pronostico.map(item =>(
 

                               <TarjetaDiaria key={item.dt}
                                    fecha={item.dt}
                                    imagen={item.weather[0].icon}
                                    tempMax={Math.floor(item.temp.max)}
                                    tempMin={Math.floor(item.temp.min)}
                                    descripcion={item.weather[0].description}
                               />
                               
                            ))
                        }
                    </div>
                    
                </div>
                    </div>
                    
                
                ) : 
                (<div><h1>Bienvenido a Weather API</h1></div>) 
            }
        </div>
    )
}

export default InicioPronostico
