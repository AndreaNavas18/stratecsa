"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Styles from './beneficios.module.css';

const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function Beneficios({ datosSliders}) {
    return (
        <>
            <div className={Styles.slider}>
                <Slider {...settings}>
                    {datosSliders.map((slider, index) => (
                        <div key={index} className={Styles.card}>
                            <img src={slider.imagen} alt={slider.alt} className={Styles.imagen} />
                            <div className={Styles.letras}>
                                <span className={Styles.span}>{slider.span}</span>
                                <p className={Styles.parrafo}>{slider.parrafo}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}