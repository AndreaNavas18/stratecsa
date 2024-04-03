"use client";
import Image from 'next/image';
import Styles from './sliderhome.module.css';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const sliders = [
    {
        id: 1,
        imagen:  '/new/img4.jpg',
        alt: 'imagen1',
    },
    {
        id: 2,
        imagen: '/new/img9.jpg',
        alt: 'imagen2',
    },
    {
        id: 3,
        imagen: '/new/img14.jpg',
        alt: 'imagen3',
    },
    {
        id: 4,
        imagen: '/new/img1.jpg',
        alt: 'imagen4',
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
                            </div>
                        )
                    
                    })
                }
            </Slider>
                <div className={`${Styles.divSlider} ${Styles.divSliderM}`}>
                    <h1 className={`${Styles.titleSlider} ${Styles.titleSliderM}`}>
                    Creamos para ti una red más sólida, más rápida, más segura.
                    </h1>
                    <p className={`${Styles.descripSlider} ${Styles.descripSlider}`}>
                    Una red en la cual te conectes mas facil con tus clientes, 
                    con tus proveedores, con el mundo.
                    </p>
                    <a href='/contacto' className={`${Styles.buttonSlider} ${Styles.buttonSliderM}`}>
                        Contactanos
                    </a>
                    {/* <button
                        className={Styles.buttonSlider}
                    >Contactanos
                    </button> */}
                </div>
        </div>
    </>
    );
}

export default SliderHome;