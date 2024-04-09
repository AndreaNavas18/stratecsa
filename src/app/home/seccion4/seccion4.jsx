"use client";
import React, { useState, useEffect } from 'react';
import Styles from '../home.module.css';

  const servicios = [
    {icono: "/logos/ultimamilla.png", nombre: "Ultima Milla y Datos", id: "ultimaMilla"},
    {icono: "/logos/internet_ded.png", nombre: "Internet Dedicado", id: "internetDedicado"},
    {icono: "/logos/ciberseguridad1.png", nombre: "Ciberseguridad", id: "ciberSeguridad"},
    {icono: "/logos/enlace.png", nombre: "Enlace de Datos", id: "enlacededatos"},
    {icono: "/logos/comun_uni.png", nombre: "Comunicaciones Unificadas", id: "comunicacionesUnificadas"},
    {icono: "/logos/sec_cloud.png", nombre: "Security Cloud", id: "securityCloud"},
    {icono: "/logos/colocation.png", nombre: "Colocation", id: "colocation"},
    {icono: "/logos/servidor.png", nombre: "Servidor Dedicado", id: "servidorDedicado"},
    {icono: "/logos/cloud_server.png", nombre: "Cloud Server", id: "cloudServer"},
    {icono: "/logos/cloud_backup.png", nombre: "Cloud Backup", id: "cloudBackup"},
    {icono: "/logos/correo.png", nombre: "Correo Corporativo", id: "correoCorporativo"},
    {icono: "/logos/outsourcing.png", nombre: "Outsourcing TIC", id: "outsourcingTIC"},
];

  const itemsPorPagina = 4;

  const idToRoute = {
    ultimaMilla: "/servicios/ultima-milla",
    internetDedicado: "/servicios/internet-dedicado",
    ciberSeguridad: "/servicios/ciberseguridad",
    enlacededatos: "/servicios/enlace-datos",
    comunicacionesUnificadas: "/servicios/comunicaciones-unificadas",
    securityCloud: "/servicios/security-cloud",
    colocation: "/servicios/colocation",
    servidorDedicado: "/servicios/servidor-dedicado",
    cloudServer: "/servicios/cloud-server",
    cloudBackup: "/servicios/cloud-backup",
    correoCorporativo: "/servicios/correo-corporativo",
    outsourcingTIC: "/servicios/outsourcing",
  };

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

      const handleClick = (id) => {
        const ruta = idToRoute[id];
        if (ruta) {
          window.location.href = ruta;
        } else {
          console.error(`No se encontró una ruta para el ID ${id}`);
        }
      };
    
    const mostrarBoton = (servicio, index) => (
        <button 
            key={index} 
            className={Styles.buttonS4}
            onClick={() => handleClick(servicio.id)}
            // onClick={() => seleccionarServicio(servicio.id)}
        >
          <img
            className={Styles.iconoServicioS4}
            src={servicio.icono} 
            />
            {servicio.nombre}
        </button>
      );

      const divS4Styles = {
        backgroundImage: `url(/new/final1.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%', 
        width: '100%', 
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