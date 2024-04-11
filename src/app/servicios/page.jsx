
"use client";
import React, { useState} from 'react';
import Styles from './servicios.module.css';

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

function Servicios() {
    const containerSty = {
        backgroundImage: `url(/img/pruebafondo1.png)`,
      };

    return (
        
        <>
           
            <div className={`${Styles.container}`} style={containerSty}>
                <h1 className={Styles.titleSR}>Servicios</h1>
            </div>
          &nbsp;
        </>
    );
}

export default Servicios;