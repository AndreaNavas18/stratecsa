"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Styles from '../cobertura.module.css';

const sliders = [
    { id: 1,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Acre'},
    { id: 2,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Alagoas'},
    { id: 3,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: ' Amapa'},
    { id: 4,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Amazonas'},
    { id: 5,imagen:  '/img/depart.jpeg', imgalt: 'imagen', titulo: 'Bahía'},
    { id: 6,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Ceara'},
    { id: 7,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Distrito Federal'},
    { id: 8,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Espirito Santo'},
    { id: 9,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Goias'},
    { id: 10,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Maranhao'},
    { id: 11,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Mato Grosso'},
    { id: 12,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Mato Grosso do Sul'},
    { id: 13,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Minas Gerais'},
    { id: 14,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Para'},
    { id: 15,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: ' Paraiba'},
    { id: 16,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Paraná'},
    { id: 17,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Pernambuco'},
    { id: 18,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Piaui'},
    { id: 19,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Río de Janeiro'},
    { id: 20,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Río Grande do Norte'},
    { id: 21,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Río Grande do Sul'},
    { id: 22,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Rondonia'},
    { id: 23,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Roraima'},
    { id: 24,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Santa Catarina'},
    { id: 25,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Sao Paulo'},
    { id: 26,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Sergipe'},
    { id: 27,imagen:  '/img/depart.jpeg', alt: 'imagen', titulo: 'Tocantins'},
    
]

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };


function Estados() {
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

export default Estados;