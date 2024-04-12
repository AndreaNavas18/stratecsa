"use client";
import React from 'react';
import Servicios from '../../servicios/page.jsx';
import Styles from '../productos/productos.module.css';

function ComunicacionesUnificadas() {
    const parrafColor = {
        color: '#009cda', 
    }
    return (
        <div>
        <Servicios />
            <div>
                <div className={Styles.containerP}>
                    <div className={Styles.seccion1}>
                        <h1 className={Styles.titleP}>Comunicaciones Unificadas</h1>
                        <p className={Styles.parrafosP}>
                        Servicios de Telefonía IP-PBX mucho más que un servicio de telefonía ya que 
                        te permite integrar más estrechamente las diferentes formas que tenemos para 
                        comunicarnos con los procesos de negocios permitiendo colaborar en tiempo real 
                        mediante aplicaciones avanzadas, como:
                        </p>
                        &nbsp;
                            <ul className={Styles.ulP}>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    Telefonía IP.
                                </li>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    Videoconferencias.
                                </li>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    Audio conferencias.
                                </li>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    Conferencias web integradas.
                                </li>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    Softphones IP móviles.
                                </li>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    Voicemail.
                                </li>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    Mensajería unificada.
                                </li>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    Centros de contacto.
                                </li>
                            </ul>
                        {/* &nbsp; */}
                    </div>
                    <div className={Styles.seccion2}>
                        <div className={Styles.divImg}>
                            <img src="/new/img13.jpg" className={Styles.img2P}/>
                        </div>
                        <div className={Styles.divCont}>
                            <h1 className={Styles.title2P}>¿Cuales son los beneficios de las comunicaciones unificadas?</h1>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>1) Fácil instalación y manejo.</span>PBX permite aprovechar la potencia avanzada de procesamiento de una computadora y la interfaz de usuario.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>2) Fácil de administrar.</span> Servicio seguro, tienes un canal dedicado solo para ti.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>3) Menor inversión.</span> Disminuye las inversiones significativamente en líneas telefónicas.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>4) Escalable.</span> Una computadora estándar puede manejar fácilmente un gran número de líneas telefónicas y extensiones.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>5) Mejor servicio al cliente.</span> Mayor agilidad para la atención de tus clientes.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>6) Mayor productividad.</span> para tu empresa con el mejor sistema de comunicaciones unificadas.</p>
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

export default ComunicacionesUnificadas;