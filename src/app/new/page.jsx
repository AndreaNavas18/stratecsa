"use client";
import React, { useState } from 'react';
import Styles from '../servicios/servicios.module.css';

function New() {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [email, setEmail] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost/phpBackend/index.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre, edad, email })
            });

            if (response.ok) {
                console.log('Correo enviado correctamente');
            } else {
                console.error('Error al enviar correo');
            }
        } catch (error) {
            console.error('Error de red:', error);
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
                    <label>Email:</label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    );
}

export default New;