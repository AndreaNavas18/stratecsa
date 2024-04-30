"use client";
import React from 'react';
import Servicios from '../../servicios/page.jsx';
import Styles from '../productos/productos.module.css';
import Beneficios from '../../components/beneficios/beneficios.jsx';


function CloudServer () {
    const parrafColor = {
        color: '#009cda', 
    }
    const carac = {
      fontWeight: '600',
    }

    const datosSliders = [
        {
            imagen: '/new/img34.jpeg',
            span: 'Monitoreo. ',
            parrafo: 'Obtendrá reportes y monitoreo de sus servicio en tiempo real.',
        },
        {
            imagen: '/new/img34.jpeg',
            span: 'Escalabilidad. ',
            parrafo: 'Posibilidad de aumentar la cantidad de almacenamiento.',
        },
        {
            imagen: '/new/img34.jpeg',
            span: 'Ahorro de costos. ',
            parrafo: 'Servicios adaptados a cada necesidad de su empresa.',
        },
        {
            imagen: '/new/img34.jpeg',
            span: 'Olvídate de los problemas de rendimiento. ',
            parrafo: 'Aumentar los recursos y la capacidad de su servidor siempre que lo necesitas.',
        },
        {
            imagen: '/new/img34.jpeg',
            span: 'Seguridad. ',
            parrafo: 'Mayor seguridad con el mejor servicio de cloud server de país.',
        },
        {
            imagen: '/new/img34.jpeg',
            span: 'Aumento en la productividad. ',
            parrafo: 'Mayor productividad para su empresa.',
        },
    ];



  return (
        <div>
            <Servicios />
                <div>
                    <div className={Styles.containerP}>
                        <div className={Styles.seccion1}>
                            <h1 className={Styles.titleP}>Cloud Server</h1>
                            <p className={Styles.parrafosP}>
                            Con el servidor en nube Podrá maximizar y optimizar el rendimiento de su 
                            infraestructura de IT. Despréndase del dimensionamiento de los equipos 
                            físicos y disfrute de todos los beneficios de un servidor dedicado en la 
                            nube Stratecsa.
                            </p>
                            <p className={Styles.parrafosP}>
                            <br/>
                            Aloje sus aplicaciones con los beneficios de los servidores dedicados 
                            diseñados a medida y ubicados en centros de datos altamente calificados.
                            </p>
                            &nbsp;
                            <p className={Styles.parrafosP}>
                                <span style={carac}>El servicio cloud server le permite</span>
                            </p>
                            &nbsp;
                                <ul className={Styles.ulP}>
                                    <li className={Styles.liP}>
                                        <img alt="" src="/img/cheque(1).png" className={Styles.imgP}/>
                                        Elegir la cantidad de núcleos, memoria RAM y almacenamiento que su negocio requiera.
                                    </li>
                                    <li className={Styles.liP}>
                                        <img alt="" src="/img/cheque(1).png" className={Styles.imgP}/>
                                        Proteger el ingreso y salida de datos, así como de aplicaciones, servicio de antivirus 
                                        NAT, DHCP, Load Balancer, DLP. 
                                    </li>
                                    <li className={Styles.liP}>
                                        <img alt="" src="/img/cheque(1).png" className={Styles.imgP}/>
                                        Conectar su nube a Internet de 5 Mbps, con dirección IP permanente (VXLAN) y transferencia ilimitada. 
                                    </li>
                                </ul>
                            
                        </div>
                        <div className={`${Styles.seccion2} ${Styles.noneM}`}>
                            <div className={Styles.divImg}>
                                <img alt="" src="/new/img34.jpeg" className={Styles.img2P}/>
                            </div>
                            <div className={Styles.divCont}>
                                <h1 className={Styles.title2P}>¿Cuales son los beneficios del Cloud Server?</h1>
                                <p className={Styles.parrafosP2}><span style={parrafColor}>1) Monitoreo. </span> 
                                Obtener reportes y monitoreo de sus servicio en tiempo real.</p>
                                <p className={Styles.parrafosP2}><span style={parrafColor}>2) Escalabilidad. </span> 
                                Posibilidad de aumentar la cantidad de almacenamiento.</p>
                                <p className={Styles.parrafosP2}><span style={parrafColor}>3) Ahorro de costos. </span> 
                                Servicios adaptados a cada necesidad de su empresa.</p>
                                <p className={Styles.parrafosP2}><span style={parrafColor}>4) Olvídate de los problemas de rendimiento. </span> 
                                Aumentar los recursos y la capacidad de su servidor siempre que lo necesitas.</p>
                                <p className={Styles.parrafosP2}><span style={parrafColor}>5) Seguridad. </span> 
                                Mayor seguridad con el mejor servicio de cloud server de país.</p>
                                <p className={Styles.parrafosP2}><span style={parrafColor}>6) Aumento en la productividad. </span> 
                                Mayor productividad para su empresa.</p>
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
};

export default CloudServer;