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
                        Descripcion ciberseguridad
                        </p>
                        &nbsp;
                        <p className={Styles.parrafosP}>
                            <span style={carac}>Características</span>
                        </p>
                        &nbsp;
                            <ul className={Styles.ulP}>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    <span style={parrafColor}>Caracteristica 1 </span>
                                    Descripcion de la caracteristica
                                </li>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    <span style={parrafColor}>Caracteristica 2</span>
                                    Descripcion de la caracteristica
                                </li>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    Caracteristica 3
                                    <span style={parrafColor}>Descripcion de la caracteristica</span>
                                </li>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    <span style={parrafColor}>Caracteristica 4</span>
                                    Descripcion de la caracteristica
                                </li>
                                
                            </ul>
                    </div>
                    <div className={Styles.seccion2}>
                        <div className={Styles.divImg}>
                            <img src="/new/img19.jpeg" className={Styles.img2P}/>
                        </div>
                        <div className={Styles.divCont}>
                            <h1 className={Styles.title2P}>¿Cuales son los beneficios de la Ciberseguridad?</h1>
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