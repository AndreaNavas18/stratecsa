"use client";
import React from 'react';
import Servicios from '../../servicios/page.jsx';
import Styles from '../productos/productos.module.css';
import Beneficios from '../../components/beneficios/beneficios.jsx';

function CorreoCorporativo() {
    const parrafColor = {
        color: '#009cda', 
    }
    const carac = {
        fontWeight: '600',
    }

    const datosSliders = [
        {
            imagen: '/new/img33.jpeg',
            span: 'Clientes felices. ',
            parrafo: 'Proporcionar una gran experiencia para impulsar las ventas futuras.',
        },
        {
            imagen: '/new/img33.jpeg',
            span: 'Medir y mejorar su servicio. ',
            parrafo: 'Puedes ver cuando el tráfico es más pesado, y planificar el futuro.',
        },
        {
            imagen: '/new/img33.jpeg',
            span: 'Antispam personalizado. ',
            parrafo: 'Esta herramienta de software se encarga de tener un control personalizado de cada uno de los correos que llegan al servidor.',
        },
        {
            imagen: '/new/img33.jpeg',
            span: 'Flexibilidad. ',
            parrafo: 'Flexible y adaptable a las necesidades de su empresa.',
        },
        {
            imagen: '/new/img33.jpeg',
            span: 'Email corporativo. ',
            parrafo: 'Brinda alta disponibilidad, eficiencia y una excelente funcionalidad, Solución segura y eficiente genera mayor confianza.',
        },
        {
            imagen: '/new/img33.jpeg',
            span: 'Seguridad. ',
            parrafo: 'La seguridad es un aspecto fundamental a la hora gestionar una cuenta de correo electrónico.',
        },
    ];


    return (
        <div>
        <Servicios />
            <div>
                <div className={Styles.containerP}>
                    <div className={Styles.seccion1}>
                        <h1 className={Styles.titleP}>Correo Corporativo</h1>
                        <p className={Styles.parrafosP}>
                        Servicios de correo corporativo es la solución de correo empresarial seguro y eficiente, 
                        que le brinda la posibilidad de tener su propio dominio, acceso a sus correos a través de 
                        los protocolos POP3, IMAP y Webmail, además de administrar las cuentas por medio de un panel 
                        de control web dinámico y fácil de utilizar. .
                        </p>
                        &nbsp;
                        <p className={Styles.parrafosP}>
                            <span style={carac}>Características</span>
                        </p>
                        &nbsp;
                            <ul className={Styles.ulP}>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    Elegir la cantidad de núcleos, memoria RAM y almacenamiento que su negocio requiera.
                                </li>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    Proteger el ingreso y salida de datos, así como de aplicaciones. 
                                </li>
                                
                            </ul>
                    </div>
                    <div className={`${Styles.seccion2} ${Styles.noneM}`}>
                        <div className={Styles.divImg}>
                            <img src="/new/img33.jpeg" className={Styles.img2P}/>
                        </div>
                        <div className={Styles.divCont}>
                            <h1 className={Styles.title2P}>¿Cuales son los beneficios del Correo Corporativo?</h1>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>1) Clientes felices. </span> 
                            Proporcionar una gran experiencia para impulsar las ventas futuras.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>2) Medir y mejorar su servicio. </span> 
                            Puedes ver cuando el tráfico es más pesado, y planificar el futuro.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>3) Antispam personalizado. </span> 
                            Esta herramienta de software se encarga de tener un control personalizado de cada uno de los 
                            correos que llegan al servidor.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>4) Flexibilidad. </span> 
                            Flexible y adaptable a las necesidades de su empresa. </p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>5) Email corporativo. </span> 
                            Brinda alta disponibilidad, eficiencia y una excelente funcionalidad, Solución segura 
                            y eficiente genera mayor confianza.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>6) Seguridad. </span> 
                            La seguridad es un aspecto fundamental a la hora gestionar una cuenta de correo electrónico.</p>
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

export default CorreoCorporativo;