"use client";

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useEffect } from 'react';

import Styles from '../home.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
    '/new/img4.jpg',
    '/new/img9.jpg',
    '/new/img14.jpg',
    '/new/img1.jpg',
    // Agrega más URLs de imágenes según sea necesario
];

// Componente personalizado para el botón de retroceso
const CustomPrevButton = ({ onClick, ...rest }) => (
    <button {...rest} onClick={onClick} className={Styles.btnBack}>
        <img className={Styles.backSli} src="/new/backk.png"/>
    </button>
);

// Componente personalizado para el botón de avance
const CustomNextButton = ({ onClick, ...rest }) => (
    <button {...rest} onClick={onClick} className={Styles.btnBef}>
        <img className={Styles.sigSli} src="/new/sigg.png"/>
    </button>
);

export default function CustomSlider() {

    useEffect(() => {
        // Preload images
        images.forEach(imageUrl => {
            const img = new Image();
            img.src = imageUrl;
        });
    }, []);
      
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
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <CustomPrevButton
                                onClick={onClickHandler}
                                title={label}
                                aria-label="Previous Slide"
                            />
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <CustomNextButton
                                onClick={onClickHandler}
                                title={label}
                                aria-label="Next Slide"
                            />
                        )
                    }
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
            </section>
        </>
    );
}