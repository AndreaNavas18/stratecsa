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
        parrafo: 'Contamos con múltiples servicios que te ayudarán a cumplir tus metas.',
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
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
};

const divS4Styles = {
    backgroundImage: `url(/new/chica.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%', 
    width: '100%', 
  };

  const divSobre = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  }

function SeccionXSlider() {
        return (
            <>
                 <div className={Styles.sliderMM} style={divS4Styles}>
                 <div style={divSobre}>
                    <Slider {...settings}>
                        {
                            sliders.map((slider, index) => {
                                return(
                                <>
                                        <div key={index} className={Styles.cardMM}>
                                            <img src={slider.imagen} alt={slider.alt} className={Styles.imagenMM} />
                                            <h2 className={Styles.titleXMM}>{slider.titulo}</h2>
                                            <p className={Styles.parrafoMM}>{slider.parrafo}</p>
                                        </div>
                                    
                                </>
                            )
                        })
                        }
                    </Slider>
                    </div>
                 </div>
            </>
        );
}

export default SeccionXSlider;