"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Styles from '../cobertura.module.css';

const sliders = [
    { id: 1,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Antigua y Barbuda'},
    { id: 2,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Argentina'},
    { id: 3,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Bahamas'},
    { id: 4,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Belice'},
    { id: 5,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Bolivia'},
    { id: 6,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Brasil'},
    { id: 7,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Chile'},
    { id: 8,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Colombia'},
    { id: 9,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Costa Rica'},
    { id: 10,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Dominica'},
    { id: 11,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Ecuador'},
    { id: 12,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'El Salvador'},
    { id: 13,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Granada'},
    { id: 14,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Guatemala'},
    { id: 15,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Guyana'},
    { id: 16,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Haití'},
    { id: 17,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Honduras'},
    { id: 18,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Jamaica'},
    { id: 19,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'México'},
    { id: 20,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Nicaragua'},
    { id: 21,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Panamá'},
    { id: 22,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Paraguay'},
    { id: 23,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Perú'},
    { id: 24,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'República Dominicana'},
    { id: 25,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Santa Lucía'},
    { id: 26,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Saint Kitts'},
    { id: 27,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Nevis'},
    { id: 28,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'San Vicente '},
    { id: 29,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Las Granadinas'},
    { id: 30,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Suriname'},
    { id: 31,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Trinidad y Tobago'},
    { id: 32,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Uruguay'},
    { id: 33,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Venezuela'},
       
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