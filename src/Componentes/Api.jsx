import React from 'react'
/* Hooks => Ganchos: mantener informacion*/
import { useState, useEffect } from "react";
import Tarjeta from '../Componentes/Tarjeta';
import { Row, Col } from 'react-bootstrap';
/* import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; */

const URL = 'https://rickandmortyapi.com/api/character';

/* let personaje = 'Pepe';
personaje = 'Juan'; 
setPersonaje = 'Mario'; */

const Api = () => {
    
    const [personaje, setPersonaje] = useState([]);

    /* Llamamos a la api 
    const URL = 'https://rickandmortyapi.com/api/character'; */

    useEffect( () => { //llamada previa para obtener los datos
        fetch(URL)
        .then((respuesta) => respuesta.json())
        .then((respuesta) => setPersonaje(respuesta.results))
    } )
    
    /*console.log(personaje);*/ 

    const imprimirPersonajes = () => {
        console.log(personaje);
    }

    return (
        <div className="m-3">
            <hr></hr>
                <h1 className='m-5 text-center'>
                    Api
                </h1>
            <hr></hr>

            <div className="m-3 text-center">
                <button className='btn btn-danger' onClick={ imprimirPersonajes }>
                    Imprimir personajes en Consola
                </button>
            </div>
            
            <h2 className='m-5 text-center'>
                Personajes de la Base de Datos externa
            </h2>
            
            <div className='m-3'>
                <Row>
                    { personaje.map((p) =>(
                    <Col key={p.id}>
                        {/* <h3>{p.name}</h3> */}
                        <Tarjeta personaje={p}/>
                    </Col>
                    ))}
                </Row>
            </div>

        </div>
    )
}

export default Api;