"use client";
import React from 'react';
import Servicios from '../../servicios/page.jsx';
import Styles from '../productos/productos.module.css';
import Beneficios from '../../components/beneficios/beneficios.jsx';


function ServidorDedicado () {
  const parrafColor = {
      color: '#009cda', 
  }
  const carac = {
    fontWeight: '600',
  }

  const datosSliders = [
    {
        imagen: '/new/img19.jpeg',
        span: 'Rendimiento. ',
        parrafo: 'Favorece el rendimiento de sitios web y aplicaciones.',
    },
    {
        imagen: '/new/img19.jpeg',
        span: 'Autonomía. ',
        parrafo: 'Con esta solución tendrás total control sobre el ambiente de tu hosting.',
    },
    {
        imagen: '/new/img19.jpeg',
        span: 'Estabilidad. ',
        parrafo: 'Otro aspecto significativo del servidor dedicado es la estabilidad, que suele ser superior por el hecho de ser exclusivo.',
    },
    {
        imagen: '/new/img19.jpeg',
        span: 'Seguridad. ',
        parrafo: 'La preocupación por la seguridad se vuelve mucho menor para quien opta por un servidor dedicado.',
    },
    {
        imagen: '/new/img19.jpeg',
        span: 'Exclusividad. ',
        parrafo: 'Espacio de almacenamiento superior, para aprovechar al máximo todos y cada uno de los recursos del mismo.',
    },
    {
        imagen: '/new/img19.jpeg',
        span: 'Accesibilidad. ',
        parrafo: 'Libertad a la hora de acceder al mismo. De esta manera, puedes aprovechar tú espacio de almacenamiento.',
    },
  ];
return (
    <div>
    <Servicios />
        <div>
            <div className={Styles.containerP}>
                <div className={Styles.seccion1}>
                    <h1 className={Styles.titleP}>Servidor Dedicado</h1>
                    <p className={Styles.parrafosP}>
                    En un servidor dedicado puedes alojar contenido web, bases de datos, 
                    aplicaciones e información corporativa, con acceso completo y en óptimo 
                    rendimiento. Stratecsa proporciona servidores configurados según las mejores 
                    prácticas de la industria, garantizando altos niveles de protección y 
                    seguridad.
                    </p>
                    &nbsp;
                    <p className={Styles.parrafosP}>
                        <span style={carac}>Características</span>
                    </p>
                    &nbsp;
                        <ul className={Styles.ulP}>
                            <li className={Styles.liP}>
                                <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                <span style={parrafColor}>Servidor Virtual: </span>
                                Corresponde a una máquina virtual alojada en un servidor físico, 
                                en el cual se tienen otras máquinas virtuales.
                            </li>
                            <li className={Styles.liP}>
                                <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                <span style={parrafColor}>Servidor Físico: </span>
                                Servidor exclusivo para un solo cliente. 
                            </li>
                            
                        </ul>
                </div>
                <div className={`${Styles.seccion2} ${Styles.noneM}`}>
                    <div className={Styles.divImg}>
                        <img src="/new/img19.jpeg" className={Styles.img2P}/>
                    </div>
                    <div className={Styles.divCont}>
                        <h1 className={Styles.title2P}>¿Cuales son los beneficios del Servidor Dedicado?</h1>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>1) Rendimiento.</span> 
                        Favorece el rendimiento de sitios web y aplicaciones.</p>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>2) Autonomía.</span> 
                        Con esta solución tendrás total control sobre el ambiente de tu hosting..</p>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>3) Estabilidad.</span> 
                        Otro aspecto significativo del servidor dedicado es la estabilidad, que suele ser 
                        superior por el hecho de ser exclusivo.</p>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>4) Seguridad.</span> 
                        La preocupación por la seguridad se vuelve mucho menor para quien opta por un servidor dedicado.</p>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>5) Exclusividad.</span> 
                        Espacio de almacenamiento superior, para aprovechar al máximo todos y cada uno de los recursos del mismo.</p>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>6) Accesibilidad.</span> 
                        Libertad a la hora de acceder al mismo. De esta manera, puedes aprovechar tú espacio de almacenamiento.</p>
                    </div>
                </div>
                <div className={`${Styles.seccion2} ${Styles.nonePC}`}>
                    <Beneficios datosSliders={datosSliders} />
                </div>
                <div className={Styles.botonID}>
                    <button className={Styles.buttonP2}>Resguardar mis equipos</button>
                </div>
            </div>
        </div>

        &nbsp;
    </div>
);
};

export default ServidorDedicado;