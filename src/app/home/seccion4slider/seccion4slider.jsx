"use client";
import Styles from './seccion4slider.module.css';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const servicios = [
    {
        icono: "/logos/ultimamilla.png", 
        nombre: "Ultima Milla y Datos", 
        id: "ultimaMilla",
        url: "/servicios/ultima-milla"
    },
    {
        icono: "/logos/internet_ded.png", 
        nombre: "Internet Dedicado", 
        id: "internetDedicado",
        url: "/servicios/internet-dedicado"
    },
    {
        icono: "/logos/ciberseguridad1.png", 
        nombre: "Ciberseguridad", 
        id: "ciberSeguridad",
        url: "/servicios/ciberseguridad"
    },
    {
        icono: "/logos/enlace.png", 
        nombre: "Enlace de Datos", 
        id: "enlacededatos",
        url: "/servicios/enlace-datos"
    },
    {
        icono: "/logos/comun_uni.png", 
        nombre: "Comunicaciones Unificadas", 
        id: "comunicacionesUnificadas",
        url: "/servicios/comunicaciones-unificadas"
    },
    {
        icono: "/logos/sec_cloud.png", 
        nombre: "Security Cloud", 
        id: "securityCloud",
        url: "/servicios/security-cloud"
    },
    {
        icono: "/logos/colocation.png", 
        nombre: "Colocation", 
        id: "colocation",
        url: "/servicios/colocation"
    },
    {
        icono: "/logos/servidor.png", 
        nombre: "Servidor Dedicado", 
        id: "servidorDedicado",
        url: "/servicios/servidor-dedicado"
    },
    {
        icono: "/logos/cloud_server.png",
        nombre: "Cloud Server",
        id: "cloudServer",
        url: "/servicios/cloud-server"
    },
    {
        icono: "/logos/cloud_backup.png", 
        nombre: "Cloud Backup", 
        id: "cloudBackup",
        url: "/servicios/cloud-backup"
    },
    {
        icono: "/logos/correo.png", 
        nombre: "Correo Corporativo", 
        id: "correoCorporativo",
        url: "/servicios/correo-corporativo"
    },
    {
        icono: "/logos/outsourcing.png", 
        nombre: "Outsourcing TIC", 
        id: "outsourcingTIC",
        url: "/servicios/outsourcing"
    },
];

const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
};

const divS4Styles = {
    backgroundImage: `url(/new/final1.jpeg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%', 
    width: '100%', 
  };


function Seccion4Slider () {
    return(
        <>
            <div className={Styles.seccion4slider} style={divS4Styles}>
                <div className={Styles.content}>
                    <h2 className={Styles.tituloS4}>Nuestros Servicios</h2>
                    <p className={Styles.parrafoS4}>
                        Contamos con múltiples servicios y productos de excelente calidad que
                        te ayudarán a dar solución a tus problemas IT, para que cumplas con tus
                        objetivos empresariales.
                    </p>
                    <div>
                        <Slider {...settings}>
                            {
                                servicios.map((servicio, index) => {
                                    return(
                                    <>
                                        <div className={Styles.botonesS4}>
                                                <button 
                                                    key={index} 
                                                    className={Styles.buttonS4}
                                                    onClick={() => window.location.href = servicio.url}
                                                >
                                                <img
                                                    className={Styles.iconoServicioS4}
                                                    src={servicio.icono} 
                                                    />
                                                    {servicio.nombre}
                                                </button>
                                        </div>
                                    </>
                                )
                            })
                            }
                        </Slider>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Seccion4Slider;

//AQUI QUEDE, ESTA HAY QUE CAMBIARLA A LA FORMA DE LATAM, IDEA QUE YA TENIA