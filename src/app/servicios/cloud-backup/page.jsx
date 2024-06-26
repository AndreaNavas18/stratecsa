"use client";
import React from 'react';
import Servicios from '../../servicios/page.jsx';
import Styles from '../productos/productos.module.css';
import Beneficios from '../../components/beneficios/beneficios.jsx';

function CloudBackup () {
  const parrafColor = {
      color: '#009cda', 
  }
  const carac = {
    fontWeight: '600',
  }

    const datosSliders = [
        {
            imagen: '/new/img35.jpeg',
            span: 'Respaldo. ',
            parrafo: 'Copia de seguridad en la nube.',
        },
        {
            imagen: '/new/img35.jpeg',
            span: 'Ahorro costos. ',
            parrafo: 'Optimiza sus costos y el retorno de su inversión.',
        },
        {
            imagen: '/new/img35.jpeg',
            span: 'Fácil acceso. ',
            parrafo: 'Puedes acceder a ello cuando lo necesites.',
        },
        {
            imagen: '/new/img35.jpeg',
            span: 'Flexibilidad. ',
            parrafo: 'Flexible y adaptable a las necesidades de su empresa.',
        },
        {
            imagen: '/new/img35.jpeg',
            span: 'Ahorro espacio. ',
            parrafo: 'No requiere equipamiento adicional al de un acceso dedicado normal.',
        },
        {
            imagen: '/new/img35.jpeg',
            span: 'Diferencia de consumo. ',
            parrafo: 'Permite diferenciar el consumo entrante y saliente, tanto nacional como internacional.',
        },
    ];


return (
    <div>
    <Servicios />
        <div className={Styles.containerP}>
            <div className={Styles.seccion1}>
                <h1 className={Styles.titleP}>Cloud Backup</h1>
                <p className={Styles.parrafosP}>
                Los archivos perdidos y las fallas de sistema pueden paralizar un proyecto; 
                Por eso es fundamental tener un plan de emergencias.
                </p>
                <p className={Styles.parrafosP}>
                Cloud Backup resguarda su negocio al ayudarlo a proteger los archivos importantes que su sitio web 
                o aplicación necesita. Regrese rápidamente a un funcionamiento normal al restaurar rápidamente los 
                archivos después de una falla del sistema o pérdida de archivos. Proteger los archivos.
                </p>
                &nbsp;
                <p className={Styles.parrafosP}>
                    <span style={carac}>Características</span>
                </p>
                &nbsp;
                    <ul className={Styles.ulP}>
                        <li className={Styles.liP}>
                            <img alt="" src="/img/cheque(1).png" className={Styles.imgP}/>
                            Elegir la cantidad de núcleos, memoria RAM y almacenamiento que su negocio requiera.
                        </li>
                        <li className={Styles.liP}>
                            <img alt="" src="/img/cheque(1).png" className={Styles.imgP}/>
                            Proteger el ingreso y salida de datos, así como de aplicaciones. 
                        </li>
                        
                    </ul>
            </div>
            <div className={`${Styles.seccion2} ${Styles.noneM}`}>
                <div className={Styles.divImg}>
                    <img alt="" src="/new/img35.jpeg" className={Styles.img2P}/>
                </div>
                <div className={Styles.divCont}>
                    <h1 className={Styles.title2P}>¿Cuales son los beneficios del Cloud Backup?</h1>
                    <p className={Styles.parrafosP2}><span style={parrafColor}>1) Respaldo. </span> 
                    Copia de seguridad en la nube.</p>
                    <p className={Styles.parrafosP2}><span style={parrafColor}>2) Ahorro costos. </span> 
                    Optimiza sus costos y el retorno de su inversión.</p>
                    <p className={Styles.parrafosP2}><span style={parrafColor}>3) Fácil acceso. </span> 
                    Puedes acceder a ello cuando lo necesites.</p>
                    <p className={Styles.parrafosP2}><span style={parrafColor}>4) Flexibilidad. </span> 
                    Flexible y adaptable a las necesidades de su empresa. </p>
                    <p className={Styles.parrafosP2}><span style={parrafColor}>5) Ahorro espacio. </span> 
                    No requiere equipamiento adicional al de un acceso dedicado normal.</p>
                    <p className={Styles.parrafosP2}><span style={parrafColor}>6) Diferencia de consumo. </span> 
                    Permite diferenciar el consumo entrante y saliente, tanto nacional como internacional.</p>
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
};

export default CloudBackup;
