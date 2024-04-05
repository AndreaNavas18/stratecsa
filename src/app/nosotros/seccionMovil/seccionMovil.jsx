"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Styles from './seccionMovil.module.css';

const sliders = [
    {
        id: 1,
        imagen:  '/new/img27.png',
        alt: 'imagen1',
        parrafo: 'El valor agregado de Stratecsa es su rápido tiempo de respuesta, contamos con múltiples servicios para darte solución inmediata.',
    },
    {
        id: 2,
        imagen:  '/new/img28.png',
        alt: 'imagen2',
        parrafo: 'La capacitación e interacción constante con los requerimientos del marcado, nos permite ofrecer una óptima solución infomática para su negocio.',
    },
    {
        id: 3,
        imagen:  '/new/img29.png',
        alt: 'imagen3',
        parrafo: 'Nuestro equipo humano está conformado por asesores multidisciplinarios y especialistas en cada tipo de industria e ingenieros y desarrolladores de tecnología.',
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

export default function SeccionMovil() {
    return (
        <>
            <div className={Styles.slider}>
                <Slider {...settings}>
                    {
                        sliders.map((slider, index) => (
                            <div key={index} className={Styles.card}>
                                <img src={slider.imagen} alt={slider.alt} className={Styles.imagen} />
                                <p className={Styles.parrafo}>{slider.parrafo}</p>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </>
    );
}