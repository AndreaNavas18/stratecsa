"use client";
import React, { useState } from 'react';
import Styles from '../servicios/servicios.module.css';

function New() {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Datos del formulario
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('edad', edad);

        try {
            // Realizar la solicitud POST al backend
            const response = await fetch('http://localhost:8000/guardar', {
                method: 'POST',
                body: formData,
                headers: {
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE',
                    "Access-Control-Allow-Origin":"http://localhost:3000",
                    "access-control-allow-headers":"X-Requested-With, Content-Type, X-Token-Auth, Authorization"
                },
            });

            if (!response.ok) {
                throw new Error('Error al enviar los datos');
            }

            // Limpiar el formulario después de enviar los datos
            setNombre('');
            setEdad('');

            // Manejar la respuesta del backend si es necesario
            const responseData = await response.json();
            console.log('Respuesta del servidor:', responseData);
        } catch (error) {
            console.error('Error al enviar los datos:', error.message);
        }
    };

    const containerSty = {
        backgroundImage: `url(/img/service.png)`,
        backgroundPosition: 'center',
        width: 'auto',
        height: 'auto',
    };

    return (
        <>
            <div className={`${Styles.container} ${Styles.containerM}`} style={containerSty}>
                <h1 className={`${Styles.titleSR} ${Styles.titleSRM}`}>Prueba</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Nombre:</label>
                    <input type="text" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <label>Edad:</label>
                    <input type="text" name="edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    );
}

export default New;