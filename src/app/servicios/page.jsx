"use client";
import React, { useState } from 'react';
import Styles from './servicios.module.css';
import InternetDedicado from './productos/internetDedicado';
import EnlaceDatos from './productos/enlaceDatos';
import ComunicacionesUnif from './productos/comunicacionesUnif';
import SecurityCloud from './productos/securityCloud';
import Colocation from './productos/colocation';
import ServidorDed from './productos/servidorDed';
import CloudServer from './productos/cloudServer';
import CloudBackup from './productos/cloudBackup';
import CorreoCorp from './productos/correoCorp';
import Outsourcing from './productos/outsourcing';

const servicios = [
    {icono: "/logos/internet_ded.png", nombre: "Internet Dedicado", id: "internetDedicado"},
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


  const itemsPorPagina = 5;

function Servicios() {
    const containerSty = {
        backgroundImage: `url(/img/pruebafondo1.png)`,
      };

        const [paginaActual, setPaginaActual] = useState(0);
        // const [seccionActiva, setSeccionActiva] = useState(null);
        const [servicioActivo, setServicioActivo] = useState(null);
        const [servicioSeleccionado, setServicioSeleccionado] = useState(null);


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

        const mostrarBoton = (servicio, index) => (
            <button 
                key={index} 
                className={Styles.buttonS4}
                onClick={() => seleccionarServicio(servicio.id)}
            >
              <img
                className={Styles.iconoServicioS4}
                src={servicio.icono} 
                />
                {servicio.nombre}
            </button>
          );

        //   const mostrarSeccion = (id) => {
        //     setSeccionActiva(id);
        //   };

          const seleccionarServicio = (idServicio) => {
            setServicioSeleccionado(idServicio);
          };


    return (
        
        <>
            <div className={`${Styles.container}`} style={containerSty}>
                <h1 className={Styles.titleSR}>Servicios</h1>
            </div>
            <div className={Styles.slideBtn}>
                    <div className={Styles.controlesSlider}>
                        <button
                        // className={Styles.buttonS4}
                        onClick={anteriorPagina}
                        >
                        <img
                        className={Styles.backS4} 
                        src="/img/flechaAtras.png"/>
                        </button>
                    </div>

                {/* slide  */}
                <div className={Styles.botonesS4}>
                        {mostrarBotones.map((servicio, index) => 
                        mostrarBoton(servicio, index)
                        )}
                </div>
                    <div className={Styles.controlesSlider}>
                        <button 
                        // className={Styles.buttonS4} 
                        onClick={siguientePagina}>
                        <img
                        className={Styles.sigS4} 
                        src="/img/flechaSig.png"/>
                        </button>
                    </div>
            </div>
            <div>
                {servicioSeleccionado === 'internetDedicado' && <InternetDedicado />}
                {servicioSeleccionado === 'enlacededatos' && <EnlaceDatos />}
                {servicioSeleccionado === 'comunicacionesUnificadas' && <ComunicacionesUnif />}
                {servicioSeleccionado === 'securityCloud' && <SecurityCloud />}
                {servicioSeleccionado === 'colocation' && <Colocation />}
                {servicioSeleccionado === 'servidorDedicado' && <ServidorDed />}
                {servicioSeleccionado === 'cloudServer' && <CloudServer />}
                {servicioSeleccionado === 'cloudBackup' && <CloudBackup />}
                {servicioSeleccionado === 'correoCorporativo' && <CorreoCorp />}
                {servicioSeleccionado === 'outsourcingTIC' && <Outsourcing />}

                {/* {servicios.map((servicio) => (
                <div key={servicio.id} style={{ display: seccionActiva === servicio.id ? 'block' : 'none' }}>
                    <div className={Styles.containerServicios}> 
                        <h2>{servicio.nombre}</h2>
                        <p></p>
                    </div>
                </div>
                ))} */}
            </div>
            {/* <div>
                <div id='internetDedicado'>
                    <h2>Internet dedicado</h2>
                    <p>Internet dedicado</p>
                </div>
                <div id='enlacededatos'>
                    <h2>Enlace de datos</h2>
                    <p>Enlace de datos</p>
                </div>
            </div> */}
        </>
    );
}

export default Servicios;