import React from 'react'
import './Tarjeta.css'
const Tarjeta = (props) => {

    return (
        <div className='contenedor-tarjeta'>
            <div className='contenedor-imagen'>
                <img className='imagen'src={props.imagen} alt="" />
            </div>
            <div className='contenedor-detalle'>
                <div className='text-left'> 
                    {props.superHost && (
                    <div className='host'>SUPER HOST</div>)}
                    <div className='type-bed'>{props.type} {props.beds} </div>
                </div>
                <div className="text-right">
                    <span class="material-icons estrella"><i class="fas fa-star"></i></span>{props.rating}
                </div>
            </div>
            <div className='description'>{props.title}</div>
        </div>
    )
}

export default Tarjeta
