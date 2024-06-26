"use client";
import Styles from './sliderhome.module.css';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const sliders = [
    {
        id: 1,
        imagen:  '/new/caption1.jpg',
        alt: 'imagen1',
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
        imagen: '/new/caption2.jpg',
        alt: 'imagen2',
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
        imagen: '/new/caption5.jpg',
        alt: 'imagen3',
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
        imagen: '/new/img4.jpg',
        alt: 'imagen4',
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

function SliderHome() {

  return (
    <>
        <div className={`${Styles.sectionSlider} ${Styles.sectionSliderM}`}>
            <Slider {...settings}>
                {
                    sliders.map((slider, index) => {
                        return (
                            <div key={index} className={`${Styles.sliderSH} ${Styles.sliderSHM}`}>
                                <div className={`${Styles.divimgSH} ${Styles.divimgSHM}`}>
                                    <img
                                        className={`${Styles.imagenSH} ${Styles.imagenSHM}`}
                                        src={slider.imagen}
                                        alt={slider.alt}
                                    />
                                </div>
                                <div className={`${Styles.divSlider} ${Styles.divsito}`}>
                                    <h1 className={`${Styles.titleSlider} ${Styles.titleSliderM}`}> 
                                        {slider.titulo} 
                                    </h1>
                                    <p className={`${Styles.descripSlider} ${Styles.descripSliderM}`}>
                                        {slider.parrafo}
                                    </p>
                                    <a href='/contacto' className={`${Styles.buttonSlider} ${Styles.buttonSliderM}`}>
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

export default SliderHome;