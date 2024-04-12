"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Styles from '../cobertura.module.css';

const sliders = [
    { id: 1,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Antioquia'},
    { id: 2,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Arauca'},
    { id: 3,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Atlántico'},
    { id: 4,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Bolivar'},
    { id: 5,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Boyacá'},
    { id: 6,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Caldas'},
    { id: 7,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Caquetá'},
    { id: 8,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Casanare'},
    { id: 9,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Cauca'},
    { id: 10,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Cesar'},
    { id: 11,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Chocó'},
    { id: 12,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Córdoba'},
    { id: 13,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Cundinamarca'},
    { id: 14,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Guaviare'},
    { id: 15,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Huila'},
    { id: 16,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'La Guajira'},
    { id: 17,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Magdalena'},
    { id: 18,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Meta'},
    { id: 19,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Nariño'},
    { id: 20,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Putumayo'},
    { id: 21,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Santander'},
    { id: 22,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Quindio'},
    { id: 23,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Risaralda'},
    { id: 24,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'N. de Santander'},
    { id: 25,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Sucre'},
    { id: 26,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Tolima'},
    { id: 27,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Valle del Cauca'},
    
]

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };


function Paises() {
  return (
    <>
        <div>
            <div className={Styles.containerDep}>
                <Slider {...settings}>
                    {
                        sliders.map((slider, index) => {
                            return (
                                <div key={index} >
                                <div className={Styles.contenedorSlider}>
                                    <div>
                                        <img
                                            src={slider.imagen}
                                            alt={slider.alt}
                                            className={Styles.imagenSH}
                                        />
                                    </div>
                                    <div
                                        className={Styles.divsito}
                                    >
                                        <h1
                                            className={Styles.titleSlider}
                                        > 
                                            {slider.titulo} 
                                        </h1>
                                    </div>
                                </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
    </div>
      
    </>
  );
}

export default Paises;