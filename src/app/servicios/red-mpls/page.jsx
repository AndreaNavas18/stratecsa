"use client";
import React from 'react';
import Servicios from '../../servicios/page.jsx';
// import Styles from '../red-mpls/ultimamilla.module.css';
import Styles from '../productos/productos.module.css';

import Beneficios from '../../components/beneficios/beneficios.jsx';

function RedMpls() {
    const parrafColor = {
        color: '#009cda', 
    }
    const carac = {
      fontWeight: '600',
    }

    const datosSliders = [
        {
            imagen: '/new/img40.jpeg',
            span: 'Conexión estable y rápida. ',
            parrafo: 'Transfiere datos a tus clientes u otras empresas de manera eficiente.',
        },
        {
            imagen: '/new/img40.jpeg',
            span: 'Respaldo eléctrico. ',
            parrafo: 'Garantizamos el suministro eléctrico sin interrupciones para los dispositivos de red.',
        },
        {
            imagen: '/new/img40.jpeg',
            span: 'Estabilidad y redundancia. ',
            parrafo: 'Las redes se conforman de sistemas que sirven de respaldo entre sí para mantener activo el servicio.',
        },
        {
            imagen: '/new/img40.jpeg',
            span: 'Escalabilidad de conectividad. ',
            parrafo: 'Capacidad de adaptación de la red respecto al crecimiento del tráfico y necesidades del cliente.',
        },
        {
            imagen: '/new/img40.jpeg',
            span: 'Seguridad en redes. ',
            parrafo: 'Se manejan protocolos de seguridad que permiten la protección de los datos e información del cliente.',
        },
        {
            imagen: '/new/img40.jpeg',
            span: 'Sistemas de monitoreo. ',
            parrafo: 'Permiten el monitoreo constante de la actividad de la red, disponibilidad y rendimiento del servicio, así como de los dispositivos que la componen.',
        },
    ];
    return (
        <div>
        <Servicios />
            <div>
                <div className={Styles.containerP}>
                    <div className={Styles.seccion1}>
                        <h1 className={Styles.titleP}>Red MPLS (Red Privada Virtual)</h1>
                        <p className={Styles.parrafosP}>
                        Con la Red MPLS, te conectas con velocidad y eficiencia a través del tramo final de una fibra óptica. 
                        Ofrecemos servicios de transmisión de datos y conectividad de red que operan a nivel nacional.
                        </p>
                        &nbsp;
                        <p className={Styles.parrafosP}>
                            <span style={carac}>Características</span>
                        </p>
                        &nbsp;
                            <ul className={Styles.ulP}>
                                <li className={Styles.liP}>
                                    <img alt="" src="/img/cheque(1).png" className={Styles.imgP}/>
                                    <span style={parrafColor}>Medio de conexión: </span>
                                    Puede ser inalámbrico o basado en soluciones de fibra óptica.
                                </li>
                                <li className={Styles.liP}>
                                    <img alt="" src="/img/cheque(1).png" className={Styles.imgP}/>
                                    <span style={parrafColor}>Interconexión </span>
                                    de datos entre empresas y clientes, proveedores o equipos de manera efectiva.
                                </li>
                                <li className={Styles.liP}>
                                    <img alt="" src="/img/cheque(1).png" className={Styles.imgP}/>
                                    Puede involucrar diversas tecnologías, como 
                                    <span style={parrafColor}>fibra óptica, conexiónes inalámbricas o híbridas.</span>
                                </li>
                                <li className={Styles.liP}>
                                    <img alt="" src="/img/cheque(1).png" className={Styles.imgP}/>
                                    <span style={parrafColor}>Capacidad de transmición</span>
                                    según las necesidades.
                                </li>
                                
                            </ul>
                    </div>
                    <div className={`${Styles.seccion2} ${Styles.noneM}`}>
                        <div className={Styles.divImg}>
                            <img alt="" src="/new/img40.jpeg" className={Styles.img2P}/>
                        </div>
                        <div className={Styles.divCont}>
                            <h1 className={Styles.title2P}>¿Cuales son los beneficios de la Última Milla?</h1>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>1) Conexión estable y rápida: </span> 
                            Transfiere datos a tus clientes u otras empresas de manera eficiente.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>2) Respaldo eléctrico: </span> 
                            Garantizamos el suministro eléctrico sin interrupciones para los dispositivos de red.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>3) Estabilidad y redundancia: </span> 
                            Las redes se conforman de sistemas que sirven de respaldo entre sí para mantener activo el servicio.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>4) Escalabilidad de conectividad: </span> 
                            Capacidad de adaptación de la red respecto al crecimiento del tráfico y necesidades del cliente.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>5) Seguridad en redes: </span> 
                            Se manejan protocolos de seguridad que permiten la protección de los datos e información del cliente.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>6) Sistemas de monitoreo: </span> 
                            Permiten el monitoreo constante de la actividad de la red, disponibilidad y rendimiento del servicio, 
                            así como de los dispositivos que la componen.</p>
                        </div>
                    </div>
                    <div className={`${Styles.seccion2} ${Styles.nonePC}`}>
                        <Beneficios datosSliders={datosSliders} />
                    </div>
                    <div className={Styles.botonID}>
                    <a href='/contacto' className={Styles.buttonP2}>Solicitar información</a>
                    </div>
                </div>
            </div>

            &nbsp;
        </div>
    );
}

export default RedMpls;