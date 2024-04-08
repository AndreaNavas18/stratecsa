"use client";
import Styles from './seccionxslider.module.css';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const sliders = [
    {
        id: 1,
        imagen:  '/new/img23.png',
        alt: 'imagen1',
        titulo: 'Cobertura',
        parrafo: 'Contamos con la red de Fibra Óptica más amplia a nivel nacional.',
    },
    {
        id: 2,
        imagen:  '/new/img24.png',
        alt: 'imagen2',
        titulo: 'Servicio personalizado',
        parrafo: 'En Stratecsa los clientes son la prioridad, asi que contamos con múltiples servicios que te ayudarán a solucionar tus problemas IT y a cumplir tus metas.',
    },
    {
        id: 3,
        imagen:  '/new/img25.png',
        alt: 'imagen3',
        titulo: 'Atención al cliente',
        parrafo: 'Nuestros clientes son nuestra mayor prioridad.',
    },
    {
        id: 4,
        imagen:  '/new/img26.png',
        alt: 'imagen4',
        titulo: 'Soporte',
        parrafo: 'Estamos disponibles siempre para ti, cuando lo necesites.',
    },
    
]

const settings = {
    autoplay: true,
    dots: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    // appendDots: dots => (
    //     <div
    //       style={{
    //         borderRadius: "10px",
    //         padding: "10px",
    //         margin: "0 auto",
    //         backgroundColor: "#f1f1f1",
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //       }}
    //     >
    //       <ul style={{ margin: "0px" }}> {dots} </ul>
    //     </div>
    //   ),
};

function SeccionXSlider() {
        return (
            <>
                 <div className={Styles.sliderMM}>
                    <Slider {...settings}>
                        {
                            sliders.map((slider, index) => {
                                <div key={index} className={Styles.cardMM}>
                                    <img src={slider.imagen} alt={slider.alt} className={Styles.imagenMM} />
                                    <h2 className={Styles.titleXMM}>{slider.titulo}</h2>
                                    <p className={Styles.parrafoMM}>{slider.parrafo}</p>
                                </div>
                        })
                        }
                    </Slider>
                 </div>
            </>
        );
}

export default SeccionXSlider;