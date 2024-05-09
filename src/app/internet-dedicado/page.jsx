"use client";
import Servicios from '../servicios/page.jsx';
import Styles from '../servicios/productos/productos.module.css'
import React from "react";
import Beneficios from '../components/beneficios/beneficios.jsx';

function InternetDedicado1() {
    const parrafColor = {
        color: '#009cda', 
    }

    const datosSliders = [
        {
            imagen: '/benf/intded.png',
            span: 'Mayor productividad. ',
            parrafo: 'Promoción, venta y atención a pedidos en línea con mejores tiempos de respuesta.',
        },
        {
            imagen: '/benf/intded.png',
            span: 'Seguridad. ',
            parrafo: 'Servicio seguro, tienes un canal dedicado solo para ti.',
        },
        {
            imagen: '/benf/intded.png',
            span: 'Menor inversión. ',
            parrafo: 'Transmite y vigila grandes volúmenes de información en línea, disminuye las inversiones de software.',
        },
        {
            imagen: '/benf/intded.png',
            span: 'Red dedicado veloz. ',
            parrafo: 'Servicio único para su empresa, canal exclusivo de alto rendimiento, usuarios protegidos de interrupción alguna.',
        },
        {
            imagen: '/benf/intded.png',
            span: 'Ips múltiples. ',
            parrafo: 'Podrás generar tantas IPs como necesites y eliminarlas cuando lo desees.',
        },
        {
            imagen: '/benf/intded.png',
            span: 'Estabilidad. ',
            parrafo: 'Tendrás el ancho de banda que requieres, sin que ningún fallo de la red arruine su trabajo o el de su equipo.',
        },

    ];

    return (
        <div>
        <Servicios />
            <div className={Styles.containerP}>
                <div className={Styles.seccion1}>
                    <h1 className={Styles.titleP}>Internet Dedicado</h1>
                    <p className={Styles.parrafosP}>
                    Su organización obtendrá un servicio de internet empresarial de alta velocidad (Carrier Class) que opera en configuración local o internacional y permitirá optimizar las comunicaciones con un acceso estable y continuo a internet,
                     garantizando una excelente calidad en velocidad de conexión, costos y soporte técnico.
                    </p>
                    <p className={Styles.parrafosP}>
                    <br/>
                    Comunicaciones eficientes en Colombia y el resto del mundo. Internet Dedicado de Stratecsa 
                    cuenta con las siguientes características:
                    </p>
                    &nbsp;
                        <ul className={Styles.ulP}>
                            <li className={Styles.liP}>
                                <img alt="" src="/img/cheque(1).png" className={Styles.imgP}/>
                                Ofrecemos medios de conexión inalámbricos o soluciones de fibra óptica, 
                                según sus preferencias y requisitos técnicos.
                            </li>
                            <li className={Styles.liP}>
                                <img alt="" src="/img/cheque(1).png" className={Styles.imgP}/>
                                Flexibilidad en las opciones de facturación.
                            </li>
                            <li className={Styles.liP}>
                                <img alt="" src="/img/cheque(1).png" className={Styles.imgP}/>
                                Atención al Cliente Centralizada para ayudar con la administración de fallas, 
                                implementación del servicio y consultas en general. 
                            </li>
                            <li className={Styles.liP}>
                                <img alt="" src="/img/cheque(1).png" className={Styles.imgP}/>
                                Puede registrar un dominio propio a nombre de su empresa. 
                                Los servidores de nombres primarios asociados con el dominio serán su responsabilidad.
                            </li>
                          
                        </ul>
                    &nbsp;
                        <p className={Styles.parrafosP}>
                            Internet Dedicado para toda Colombia, se requieren direcciones o 
                            coordenadas para viabilidad técnica.
                        </p>
                </div>
                <div className={`${Styles.seccion2} ${Styles.noneM}`}>
                    <div className={Styles.divImg}>
                        <img alt="" src="/new/img11.jpg" className={Styles.img2P}/>
                    </div>
                    <div className={Styles.divCont}>
                        <h1 className={Styles.title2P}>¿Cuales son los beneficios del Internet Dedicado?</h1>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>1) Mayor productividad.</span> Promoción, venta y atención a pedidos en línea con mejores tiempos de respuesta.</p>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>2) Seguridad garantizada.</span> Su empresa tendrá acceso a un canal exclusivo y dedicado, lo que proporciona un servicio seguro.</p>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>3) Menor inversión.</span> Transmisión y monitoreo de grandes volúmenes de información en línea, lo que reduce las inversiones en software.</p>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>4) Red dedicado veloz.</span> Servicio único para su empresa, canal exclusivo de alto rendimiento, usuarios protegidos de interrupción alguna.</p>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>5) Ips múltiples.</span> Podrás generar tantas IPs como se necesite y eliminarlas cuando lo desee.</p>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>6) Estabilidad.</span> Tendrá el ancho de banda necesario, sin que ningún fallo de la red arruine su trabajo o el de su equipo.</p>
                    </div>
                </div>
                <div className={`${Styles.seccion2} ${Styles.nonePC}`}>
                    <Beneficios datosSliders={datosSliders} />
                </div>
                <div className={Styles.botonID}>
                    <a href='/contacto' className={Styles.buttonP2}>Solicitar información</a>
                </div>
            </div>
          &nbsp;
        </div>
    );
}

export default InternetDedicado1;