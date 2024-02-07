"use client";

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';

import Styles from '../home.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
    '/new/img4.jpg',
    '/new/img9.jpg',
    '/new/img14.jpg',
    '/new/img1.jpg',
    // Agrega más URLs de imágenes según sea necesario
];

export default function CustomSlider() {
      
    return (
        <>
        {/* Seccion del slider principal */}
            <section className={Styles.sectionSlider}>
            <Carousel
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={3000}
                infiniteLoop={true}
                dynamicHeight={true}
            >
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            className={Styles.imagenSlider}
                            src={image}
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </Carousel>
                <div className={Styles.divSlider}>
                    <h1 className={Styles.titleSlider}>
                    Creamos para ti una red más sólida, más rápida, más segura.
                    </h1>
                    <p className={Styles.descripSlider}>
                    Una red en la cual te conectes mas facil con tus clientes, 
                    con tus proveedores, con el mundo.
                    </p>
                    <button
                        className={Styles.buttonSlider}
                    >Contactanos
                    </button>
                </div>
                {/* <div className={Styles.btnsSlider}>
                    <button className={Styles.btnBack} onClick={goToPrevious}>
                        ←
                    </button>
                    <button className={Styles.btnBef} onClick={goToNext}>
                        →
                    </button>
                </div> */}
            </section>
        </>
    );
}