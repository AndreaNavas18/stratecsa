import React from 'react';
import Servicios from '../../servicios/page';
import Styles from '../ultima-milla/ultimamilla.module.css';

function Ciberseguridad() {

    const parrafColor = {
        color: '#009cda', 
    }
    const carac = {
      fontWeight: '600',
    }
    return (
        <div>
        <Servicios />
            <div>
                <div className={Styles.containerP}>
                    <div className={Styles.seccion1}>
                        <h1 className={Styles.titleP}>Ciberseguridad</h1>
                        <p className={Styles.parrafosP}>
                        <span style={parrafColor}>Protección Avanzada para tu Empresa con Soluciones de Ciberseguridad </span>
                        Asegura las operaciones de tu empresa con una red de ciberseguridad robusta, confiable y segura.
                        <br/>
                        Con nuestro servicio de ciberseguridad empresarial, tu compañía disfrutará de protección avanzada contra amenazas digitales,
                         manteniendo tus comunicaciones y datos seguros en todo momento. Nuestra solución de seguridad en la nube (Cloud Security) 
                         opera con los más altos estándares internacionales.
                        </p>
                        &nbsp;
                        <p className={Styles.parrafosP}>
                            <span style={carac}>Características</span>
                        </p>
                        &nbsp;
                            <ul className={Styles.ulP}>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    Servicio de 
                                    <span style={parrafColor}>protección  </span>
                                    completa contra todo tipo de amenazas.
                                </li>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    Herramientas avanzadas de 
                                    <span style={parrafColor}>detección de amenazas </span>
                                    y respuestas a incidentes.
                                </li>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    Protege tus datos y aplicaciones en la nube, 
                                    <span style={parrafColor}>garantizando </span>
                                    su integridad y confidencialidad.
                                </li>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    Formación en ciberseguridad para tu equipo, para que puedan 
                                    <span style={parrafColor}>identificar y evitar </span>
                                    amenazas
                                </li>
                                
                            </ul>
                    </div>
                    <div className={Styles.seccion2}>
                        <div className={Styles.divImg}>
                            <img src="/new/img39.jpeg" className={Styles.img2P}/>
                        </div>
                        <div className={Styles.divCont}>
                            <h1 className={Styles.title2P}>¿Cuales son los beneficios de la Ciberseguridad?</h1>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>1) Tranquilidad: </span> 
                            Sabrás que tu empresa está protegida contra las amenazas digitales, lo que te permitirá 
                            centrarte en lo que realmente importa: hacer crecer tu negocio.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>2) Reducción de riesgos: </span> 
                            Al proteger tu empresa contra las amenazas digitales, reduces el riesgo de sufrir interrupciones 
                            en tus operaciones o pérdidas financieras debido a un ciberataque.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>3) Confianza de los clientes: </span> 
                            Al demostrar que tomas en serio la ciberseguridad, ganarás la confianza de tus clientes, lo que 
                            puede ayudarte a atraer y retener a más clientes.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>4) Competitividad: </span> 
                            En un mundo cada vez más digital, tener una sólida estrategia de ciberseguridad puede darte una ventaja competitiva.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>5) Cumplimiento de Normativas: </span> 
                            Al cumplir con las normativas de seguridad de la información, evitarás posibles sanciones y mejorará tu reputación en el mercado.</p>
                        </div>
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

export default Ciberseguridad;