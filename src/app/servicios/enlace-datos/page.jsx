"use client";
import React from 'react';
import Servicios from '../../servicios/page.jsx';
import Styles from '../productos/productos.module.css';
import Beneficios from '../../components/beneficios/beneficios.jsx';

function EnlaceDatos() {
    const parrafColor = {
        color: '#009cda', 
    }

    const datosSliders = [
        {
            imagen: '/new/img10.jpg',
            span: 'Mayor productividad. ',
            parrafo: 'Promoción, venta y atención a pedidos en línea con mejores tiempos de respuesta.',
        },
        {
            imagen: '/new/img10.jpg',
            span: 'Seguridad. ',
            parrafo: 'Servicio seguro, tienes un canal dedicado solo para ti.',
        },
        {
            imagen: '/new/img10.jpg',
            span: 'Menor inversión. ',
            parrafo: 'Transmite y vigila grandes volúmenes de información en línea, disminuye las inversiones de software.',
        },
        {
            imagen: '/new/img10.jpg',
            span: 'Red dedicado veloz. ',
            parrafo: 'Servicio único para tu empresa, canal exclusivo de alto rendimiento, usuarios protegidos de interrupción alguna.',
        },
        {
            imagen: '/new/img10.jpg',
            span: 'Ips múltiples. ',
            parrafo: 'Podrás generar tantas IPs como necesites y eliminarlas cuando lo desees.',
        },
        {
            imagen: '/new/img10.jpg',
            span: 'Estabilidad. ',
            parrafo: 'Tendrás el ancho de banda que requieres, sin que ningún fallo de la red arruine tu trabajo o el de tu equipo.',
        },
    ];
    return (
        <div>
        <Servicios />
            <div>
                <div className={Styles.containerP}>
                    <div className={Styles.seccion1}>
                        <h1 className={Styles.titleP}>Enlace de Datos</h1>
                        <p className={Styles.parrafosP}>
                        Enlace de datos te brindan soluciones que te permiten manejar en línea tus operaciones 
                        e implementar soluciones de videoconferencia, video vigilancia, servicios en línea para 
                        tus clientes.
                        </p>
                        &nbsp;
                            <ul className={Styles.ulP}>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    Información en tiempo real de tus clientes y ventas.
                                </li>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    Suministra un tránsito de datos confiable.
                                </li>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    Contabilidad en línea.
                                </li>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    Ahorrar costos de comunicación con soluciones de voz en todas 
                                    sus sedes
                                </li>
                                <li className={Styles.liP}>
                                    sin utilizar las redes de telefonía pública básica conmutada y 
                                    sin ningún costo.
                                </li>
                            </ul>
                        &nbsp;
                            <p className={Styles.parrafosP}>
                            Enlace de Datos para toda Colombia, Debemos efectuar una 
                            visita de pre-viabilidad técnica.
                            </p>
                    </div>
                    <div className={`${Styles.seccion2} ${Styles.noneM}`}>
                        <div className={Styles.divImg}>
                            <img src="/new/img10.jpg" className={Styles.img2P}/>
                        </div>
                        <div className={Styles.divCont}>
                            <h1 className={Styles.title2P}>¿Cuales son los beneficios del Enlace de datos?</h1>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>1) Mayor productividad.</span> Promoción, venta y atención a pedidos en línea con mejores tiempos de respuesta.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>2) Seguridad.</span> Servicio seguro, tienes un canal dedicado solo para ti.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>3) Menor inversión.</span> Transmite y vigila grandes volúmenes de información en línea, disminuye las inversiones de software.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>4) Red dedicado veloz.</span> Servicio único para tu empresa, canal exclusivo de alto rendimiento, usuarios protegidos de interrupción alguna.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>5) Ips múltiples.</span> Podrás generar tantas IPs como necesites y eliminarlas cuando lo desees.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>6) Estabilidad.</span> Tendrás el ancho de banda que requieres, sin que ningún fallo de la red arruine tu trabajo o el de tu equipo.</p>
                        </div>
                    </div>
                    <div className={`${Styles.seccion2} ${Styles.nonePC}`}>
                        <Beneficios datosSliders={datosSliders} />
                    </div>
                    <div className={Styles.botonID}>
                        <button className={Styles.buttonP2}>Solicitar información</button>
                    </div>
                </div>

            </div>

        &nbsp;
        </div>
        );
}

export default EnlaceDatos;