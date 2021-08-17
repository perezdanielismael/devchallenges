import React from 'react'
import './tarjetaDia.css'

const TarjetaDiaria = (props) => {
    const semana = ['Domingo','Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    let fechaObj = new Date(props.fecha * 1000)
    let date = fechaObj.getDate()
    let day = semana[fechaObj.getDay()]

    return (
        <div>
            <div className='tarjeta-dia'>
                <img className='icono mini' src={`http://openweathermap.org/img/wn/${props.imagen}@2x.png`} alt="" />
                <h4 className='fecha'>{day} {date}</h4>
                <h4 className='temp'>Temp. Máx: {props.tempMax}°C</h4>
                <h4 className='temp'>Temp. Min: {props.tempMin}°C</h4>
                <h4 className='descripcion tamaño'>{props.descripcion}</h4>
            </div>
        </div>
    )
}

export default TarjetaDiaria
