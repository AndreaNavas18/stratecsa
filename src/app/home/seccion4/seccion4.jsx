"use client";
import React, { useState } from 'react';
import Styles from '../home.module.css';

const servicios = [
    {icono: "/logos/internet_ded.png", nombre: "Internet Dedicado"},
    {icono: "/logos/enlace.png", nombre: "Enlace de Datos"},
    {icono: "/logos/comun_uni.png", nombre: "Comunicaciones Unificadas"},
    {icono: "/logos/sec_cloud.png", nombre: "Security Cloud"},
    {icono: "/logos/colocation.png", nombre: "Colocation"},
    {icono: "/logos/servidor.png", nombre: "Servidor Dedicado"},
    {icono: "/logos/cloud_server.png", nombre: "Cloud Server"},
    {icono: "/logos/cloud_backup.png", nombre: "Cloud Backup"},
    {icono: "/logos/correo.png", nombre: "Correo Corporativo"},
    {icono: "/logos/outsourcing.png", nombre: "Outsourcing TIC"},
  ];

  const itemsPorPagina = 5;

export default function Seccion4() {

    const [paginaActual, setPaginaActual] = useState(0);

    const mostrarBotones = servicios.slice(
        paginaActual * itemsPorPagina,
        (paginaActual + 1) * itemsPorPagina
    );

    const siguientePagina = () => {
        setPaginaActual((prevPagina) => (prevPagina + 1) % Math.ceil(servicios.length / itemsPorPagina));
    };

    const anteriorPagina = () => {
        setPaginaActual((prevPagina) => {
          const nuevaPagina = (prevPagina - 1 + Math.ceil(servicios.length / itemsPorPagina)) % Math.ceil(servicios.length / itemsPorPagina);
          return nuevaPagina;
        });
      };
      
    //   const obtenerClaseBoton = (index) => {
    //     const color1 = ['button1', 'button5', 'button9'];
    //     const color2 = ['button2', 'button6', 'button10'];
    //     const color3 = ['button3', 'button7', 'button11'];
    //     const color4 = ['button4', 'button8', 'button12'];
      
    //     if (color1.includes(`button${index + 1}`)) {
    //       return 'color1';
    //     } else if (color2.includes(`button${index + 1}`)) {
    //       return 'color2';
    //     } else if (color3.includes(`button${index + 1}`)) {
    //         return 'color3';
    //     } else if (color4.includes(`button${index + 1}`)) {
    //         return 'color4';
    //     } else {
    //         return ''; // Puedes manejar otros casos según sea necesario
    //     }
    // };
    
    const mostrarBoton = (servicio, index) => (
        <button 
            key={index} 
            className={Styles.buttonS4}
        >
          <img
            className={Styles.iconoServicioS4}
            src={servicio.icono} 
            />
            {servicio.nombre}
        </button>
      );

      const divS4Styles = {
        backgroundImage: `url(/img/prueba3.jpg)`,
      };

    return(
        <>
            <section className={Styles.seccion4}>
                <div className={`${Styles.divS4}`} style={divS4Styles}>
                    {/* <img
                        className={Styles.imagenS4} 
                        src="/img/prueba3.jpg"/> */}
                    <h1 className={Styles.titleS4}>Nuestros productos y servicios</h1>
                    <p className={Styles.descripS4}>
                    Contamos con múltiples servicios y productos de excelente calidad
                    que te ayudarán a dar solución a tus problemas IT, para que cumplas
                    con tus objetivos empresariales.
                    </p>
                    {/* La idea es poner un slider de botones ya que son muchos servicios */}
                    <div className={Styles.botonesS4}>
                        {mostrarBotones.map((servicio, index) => 
                        mostrarBoton(servicio, index)
                        )}
                    </div>
                    <div className={Styles.controlesSlider}>
                        <button
                        // className={Styles.buttonS4}
                        onClick={anteriorPagina}
                        >
                        <img
                        className={Styles.backS4} 
                        src="/img/flecha-atras.png"/>
                        </button>
                        <button 
                        // className={Styles.buttonS4} 
                        onClick={siguientePagina}>
                        <img
                        className={Styles.sigS4} 
                        src="/img/flecha-sig.png"/>
                        </button>
                    </div>


                    {/* <div className={Styles.botonesS4}>
                        <button
                            className={Styles.buttonS4}
                        >Internet Dedicado
                        </button>
                        <button
                            className={Styles.buttonS4}
                        >Enlace de Datos
                        </button>
                        <button
                            className={Styles.buttonS4}
                        >Fibra Óptica
                        </button>
                        <button
                            className={Styles.buttonS4}
                        >Comunicaciones Unificadas
                        </button>
                        <button
                            className={Styles.buttonS4}
                        >Security Cloud
                        </button>
                        <button
                            className={Styles.buttonS4}
                        >Colocation
                        </button>
                        <button
                            className={Styles.buttonS4}
                        >Servidor Dedicado 
                        </button>
                        <button
                            className={Styles.buttonS4}
                        >Cloud Server
                        </button>
                        <button
                            className={Styles.buttonS4}
                        >Desarrollo de Software
                        </button>
                        <button
                            className={Styles.buttonS4}
                        >Cloud Backup
                        </button>
                        <button
                            className={Styles.buttonS4}
                        >Correo Corporativo
                        </button>
                        <button
                            className={Styles.buttonS4}
                        >Outsourcing TIC
                        </button>
                    </div> */}
                </div>
            </section>

        </>
    );
}