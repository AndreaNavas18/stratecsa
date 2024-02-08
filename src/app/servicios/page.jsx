"use client";
import React, { useState} from 'react';
import Styles from './servicios.module.css';

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

  const idToRoute = {
    internetDedicado: "/servicios/internet-dedicado",
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

function Servicios() {
    const containerSty = {
        backgroundImage: `url(/img/pruebafondo1.png)`,
      };

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
          &nbsp;
        </>
    );
}

export default Servicios;