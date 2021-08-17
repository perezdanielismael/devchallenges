import React from 'react'
import {Boton, BotonHover, BotonDisabled, BotonIconStart, BotonIconEnd, Button} from './Botones'
import './ListaBotones.css'
const ListaBotones = () => {

 

    return (
        <div className='botones-challenge'>
            <h2 className='titulo'>Lista de botones con Styled Components</h2>
            <div className='contenedor'>
                <div className='seccionBotones'> 
                    <div className='seccionBoton'>
                        <h5>{'<Boton />'}</h5>
                        <Boton>Default</Boton>
                    </div>
                    <div className='seccionBoton'>
                        <h5>{'& hover, & focus'}</h5>
                        <BotonHover>Default</BotonHover>
                    </div>
                </div>
                <div className='seccionBotones'> 
                    <div className='seccionBoton'>
                        <h5>{'<Boton outline />'}</h5>
                        <Boton outline>Default</Boton>
                    </div>
                    <div className='seccionBoton'>
                        <h5>{'& hover, & focus'}</h5>
                        <BotonHover outline>Default</BotonHover>
                    </div>
                </div>
                <div className='seccionBotones'> 
                    <div className='seccionBoton'>
                        <h5>{'<Boton text />'}</h5>
                        <Boton text>Default</Boton>
                    </div>
                    <div className='seccionBoton'>
                        <h5>{'& hover, & focus'}</h5>
                        <BotonHover text>Default</BotonHover>
                    </div>
                </div>
                <div className='seccionBotones'> 
                    <div className='seccionBoton'>
                        <h5>{'<Boton disableShadow />'}</h5>
                        <Boton disableShadow>Default</Boton>
                    </div>
                </div>
                <div className='seccionBotones'> 
                    <div className='seccionBoton'>
                        <h5>{'<Boton disabled />'}</h5>
                        <Boton disabled>Disabled</Boton>
                    </div>
                    <div className='seccionBoton'>
                        <h5>{'<BotonDisabled/>'}</h5>
                        <BotonDisabled disabled>Disabled</BotonDisabled>
                    </div>
                </div>
                <div className='seccionBotones'> 
                    <div className='seccionBoton'>
                        <h5>{'<BotonIconStart />'}</h5>
                        <BotonIconStart ><i class="fas fa-shopping-cart"></i> Default</BotonIconStart>
                    </div>
                    <div className='seccionBoton'>
                        <h5>{'<BotonIconEnd />'}</h5>
                        <BotonIconEnd >Default<i class="fas fa-shopping-cart"></i></BotonIconEnd>
                    </div>
                </div>
                <div className='seccionBotones'> 
                    <div className='seccionBoton'>
                        <h5>{'<Button size="sm"/>'}</h5>
                        <Button size='sm'>Default</Button>
                    </div>
                    <div className='seccionBoton'>
                        <h5>{'<Button size="md"/>'}</h5>
                        <Button size='md'>Default</Button>
                    </div>
                    <div className='seccionBoton'>
                    <h5>{'<Button size="lg"/>'}</h5>
                        <Button size='lg'>Default</Button>
                    </div>
                </div>
                <div className='seccionBotones'> 
                    <div className='seccionBoton'>
                        <h5>{'<Button color="default"/>'}</h5>
                        <Button color='default'>Default</Button>
                    </div>
                    <div className='seccionBoton'>
                        <h5>{'<Button color="primary"/>'}</h5>
                        <Button color='primary'>Primary</Button>
                    </div>
                    <div className='seccionBoton'>
                    <h5>{'<Button color="secondary"/>'}</h5>
                        <Button color='secondary'>Secondary</Button>
                    </div>
                    <div className='seccionBoton'>
                    <h5>{'<Button color="danger"/>'}</h5>
                        <Button color='danger'>Danger</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListaBotones
