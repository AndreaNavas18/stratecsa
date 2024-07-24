"use client";
import Styles from './videofondo.module.css';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

    const sliders = [
        {
            id: 1,
            titulo: 'Cobertura exclusiva en Latinoamérica.',
            parrafo: (
                <>
                    Como Stratecsa, nos expandimos por toda Latinoamérica con una cobertura exclusiva.
                    <br/>
                    Conectamos empresas y personas en la región con soluciones tecnológicas avanzadas.
                </>

            ),
            boton: 'Contáctanos'
        },
        {
            id: 2,
            titulo: 'Tecnología que conecta.',
            parrafo: (
                <>
                    Transmitimos nuestra capacidad para unir personas, empresas y oportunidades a través de la tecnología.
                    <br/>
                    Nuestra red de alta velocidad garantiza conexiones sólidas y seguras.
                </>

            ),
            boton: 'Contáctanos'
        },
        {
            id: 3,
            titulo: 'Internet veloz y seguro para empresas.',
            parrafo:(
                <>
                    Ofrecemos una conexión a Internet rápida y segura, diseñada exclusivamente para empresas. 
                    <br/>
                    Optimiza la productividad y protege tus datos con Stratecsa.
                </>
            ),
            boton: 'Contáctanos'
        },
        {
            id: 4,
            titulo: 'Seguridad y velocidad empresarial.',
            parrafo: (
                <>
                    Priorizamos la seguridad cibernética y la velocidad en la gestión de datos empresariales. 
                    <br/>
                    Confía en Stratecsa para proteger y acelerar su negocio.
                </>
            ),
            boton: 'Contáctanos'
        },
    ]

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const fondoSlider = {
        width: '100%',
        height: '100%',
    };

    const azulito = {
        backgroundColor: '#009cda3f',
        width: '100%',
        height: '500px',
        // position: 'absolute',
        zIndex: 9,
    };


export default function VideoFondo() {
    return(
        <>
        <div className={Styles.contenedor}>
            <div className={Styles.divVideo}>
                <video
                    className={Styles.videoV}
                    src="/videos/videofondo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>
                <Slider {...settings}>
                    {
                        sliders.map((slider, index) => {
                            return (
                                <div key={index} style={fondoSlider}>
                                    <div className={Styles.divSlider}>
                                        <h1 className={Styles.titleSlider}> 
                                            {slider.titulo} 
                                        </h1>
                                        <p className={Styles.descripSlider}>
                                            {slider.parrafo}
                                        </p>
                                        <a href='/contacto' className={Styles.buttonSlider}>
                                            {slider.boton}
                                        </a>
                                    </div>
                                </div>
                            )
                        
                        })
                    }
                </Slider>
        </div>

        </>
    );
}