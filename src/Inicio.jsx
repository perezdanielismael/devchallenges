import React from 'react'
import './inicio.css'
const Inicio = () => {
    return (
        <div className='inicio'>
            <h1 className="titulo-inicio"> Desafíos de DevChallenge </h1>

        <div className='challenge'>
            <a className='challenge-item' href="/styled">Botones con Styled Components</a>
            <a className='challenge-item' href="/windbnb">Windbnb Frontend similar a airbnb</a>
            <a className='challenge-item' href="/weather">Pronóstico del tiempo con Weather API</a>
        </div>
        

        </div>
    )
}

export default Inicio
