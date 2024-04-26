"use client";
import React from 'react';
import Servicios from '../../servicios/page.jsx';
import Styles from '../productos/productos.module.css';
import Beneficios from '../../components/beneficios/beneficios.jsx';


function Colocation () {
  const parrafColor = {
      color: '#009cda', 
  }
  const carac = {
    fontWeight: '600',
  }

  const datosSliders = [
    {
        imagen: '/new/img17.jpg',
        span: 'Escalabilidad bajo demanda. ',
        parrafo: 'Stratecsa ofrece la escalabilidad necesaria para responder con rapidez a nuevas demandas de espacio y/o potencia eléctrica.',
    },
    {
        imagen: '/new/img17.jpg',
        span: 'Equipo técnico especializado. ',
        parrafo: 'Stratecsa será el encargado de suministrar el personal técnico dedicado en exclusiva a la infraestructura.',
    },
    {
        imagen: '/new/img17.jpg',
        span: 'Mayor disponibilidad. ',
        parrafo: 'Al optar por servicios de colocation profesionales se logra así una disponibilidad de casi el 100%, regulada por acuerdos de nivel de servicio.',
    },
    {
        imagen: '/new/img17.jpg',
        span: 'Conectividad múltiple. ',
        parrafo: 'En un centro de datos especializado se multiplica la oferta de proveedores de telecomunicaciones y servicios cloud',
    },
    {
        imagen: '/new/img17.jpg',
        span: 'Disponibilidad de asesorías. ',
        parrafo: 'Nuestro equipo estará siempre disponible para cuando lo necesite.',
    },
    {
        imagen: '/new/img17.jpg',
        span: 'Valor agregado para su negocio. ',
        parrafo: 'Dele un valor agregado a su negocio con el mejor servicio de Colocation del país.',
    },
  ];

return (
    <div>
    <Servicios />
        <div>
            <div className={Styles.containerP}>
                <div className={Styles.seccion1}>
                    <h1 className={Styles.titleP}>Colocation</h1>
                    <p className={Styles.parrafosP}>
                    Stratecsa Colocation cuenta con un espacio sofisticado y seguro para el alojamiento 
                    de sus equipos o servidores. Colocar tus equipos de TI en un espacio físico seguro 
                    y en un entorno acondicionado con energía y enfriamiento de la más alta calidad, 
                    asegurando la continuidad de su negocio.
                    </p>
                    <p className={Styles.parrafosP}>
                    <br/>
                    <span style={carac}>Este servicio se encuentra disponible en dos modalidades:</span>
                    </p>
                    &nbsp;
                        <ul className={Styles.ulP}>
                            <li className={Styles.liP}>
                                <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                <span style={parrafColor}>Basic Colocation: </span>Corresponde al alquiler de racks
                                exclusivos para el cliente, ubicados en salas de uso común.
                            </li>
                            <li className={Styles.liP}>
                                <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                <span style={parrafColor}>Premium Colocation: </span>Bajo esta modalidad, el cliente 
                                podrá contar con salas completas de uso exclusivo, para colocación de equipos. 
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
                        <img src="/new/img17.jpg" className={Styles.img2P}/>
                    </div>
                    <div className={Styles.divCont}>
                        <h1 className={Styles.title2P}>¿Cuales son los beneficios de Colocation?</h1>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>1) Escalabilidad bajo demanda. </span> 
                        Stratecsa ofrece la escalabilidad necesaria para responder con rapidez a nuevas demandas de 
                        espacio y/o potencia eléctrica.</p>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>2) Equipo técnico especializado. </span> 
                        Stratecsa será el encargado de suministrar el personal técnico dedicado en exclusiva a la infraestructura.</p>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>3) Mayor disponibilidad. </span> 
                        Al optar por servicios de colocation profesionales se logra así una disponibilidad de casi 
                        el 100%, regulada por acuerdos de nivel de servicio.</p>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>4)Conectividad múltiple. </span> 
                        En un centro de datos especializado se multiplica la oferta de proveedores de telecomunicaciones 
                        y servicios cloud</p>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>5) Disponibilidad de asesorías. </span> 
                        Nuestro equipo estará siempre disponible para cuando lo necesite.</p>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>6) Valor agregado para su negocio. </span> 
                        Dele un valor agregado a su negocio con el mejor servicio de Colocation del país.</p>
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

export default Colocation;