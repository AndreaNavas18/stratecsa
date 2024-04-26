"use client";
import React from 'react';
import Servicios from '../../servicios/page.jsx';
import Styles from '../productos/productos.module.css';
import Beneficios from '../../components/beneficios/beneficios.jsx';

function SecurityCloud () {
  const parrafColor = {
      color: '#009cda', 
  }
  const carac = {
    fontWeight: '600',
  }

  const datosSliders = [
        {
            imagen: '/new/img15.jpeg',
            span: 'Accesibilidad. ',
            parrafo: 'Acceder a la información desde cualquier dispositivo móvil.',
        },
        {
            imagen: '/new/img15.jpeg',
            span: 'Tranquilidad. ',
            parrafo: 'Stratecsa se encargará de la instalación y las actualizaciones.',
        },
        {
            imagen: '/new/img15.jpeg',
            span: 'Protección en tiempo real. ',
            parrafo: 'Con un antivirus en la nube se está protegido en tiempo real en contra de las múltiples amenazas a las que día a día estamos expuestos en la Internet.',
        },
        {
            imagen: '/new/img15.jpeg',
            span: 'Compatibilidad. ',
            parrafo: 'La tecnología en la nube cuentan con una altísima compatibilidad con cualquier sistema operativo o equipo.',
        },
        {
            imagen: '/new/img15.jpeg',
            span: 'Reducción de costos. ',
            parrafo: 'El sistema de pago y aumento de licencias para equipos es más cómodo para una empresa.',
        },
        {
            imagen: '/new/img15.jpeg',
            span: 'Seguridad. ',
            parrafo: 'Antivirus con tecnología en la nube aumenta su seguridad.',
        },
    
  ];
return (
    <div>
    <Servicios />
        <div>
            <div className={Styles.containerP}>
                <div className={Styles.seccion1}>
                    <h1 className={Styles.titleP}>Security Cloud</h1>
                    <p className={Styles.parrafosP}>
                    Brindamos servicios de seguridad en la nube para protección de servidores y 
                    aplicaciones, unificando la seguridad de los entornos de los Datacenters tradicionales, 
                    virtuales y en Internet.
                    </p>
                    <p className={Styles.parrafosP}>
                    <br/>
                    Brindando de esta forma herramientas de seguridad para sus equipos sin importar el entorno 
                    (físico o virtual), la ubicación geográfica y, garantizando una protección eficiente y escalable.
                    </p>
                    &nbsp;
                    <p className={Styles.parrafosP}>
                        <span style={carac}>Características</span>
                    </p>
                    &nbsp;
                        <ul className={Styles.ulP}>
                            <li className={Styles.liP}>
                                <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                Proteja los equipos contra las amenazas informáticas conocidas y de día cero.
                            </li>
                            <li className={Styles.liP}>
                                <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                Una línea de defensa en el propio servidor, ya sea físico, virtual o en Internet.
                            </li>
                            <li className={Styles.liP}>
                                <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                Ayuda a las organizaciones a evitar que se produzca fuga de datos e interrupciones 
                                en la productividad empresarial.
                            </li>
                            <li className={Styles.liP}>
                                <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                Fomentar la identificación de actividades y comportamientos sospechosos 
                                y tomar medidas proactivas y preventivas.
                            </li>
                        </ul>
                    
                </div>
                <div className={`${Styles.seccion2} ${Styles.noneM}`}>
                    <div className={Styles.divImg}>
                        <img src="/new/img15.jpeg" className={Styles.img2P}/>
                    </div>
                    <div className={Styles.divCont}>
                        <h1 className={Styles.title2P}>¿Cuales son los beneficios de seguridad en la nube?</h1>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>1) Accesibilidad. </span> 
                        Acceder a la información desde cualquier dispositivo móvil.</p>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>2) Tranquilidad. </span> 
                        Stratecsa se encargará de la instalación y las actualizaciones.</p>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>3) Protección en tiempo real. </span> 
                        Con un antivirus en la nube se está protegido en tiempo real en contra de las múltiples 
                        amenazas a las que día a día estamos expuestos en la Internet.</p>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>4) Compatibilidad. </span> 
                        La tecnología en la nube cuentan con una altísima compatibilidad con cualquier sistema operativo o equipo.</p>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>5) Reducción de costos. </span> 
                        El sistema de pago y aumento de licencias para equipos es más cómodo para una empresa.</p>
                        <p className={Styles.parrafosP2}><span style={parrafColor}>6) Seguridad. </span> 
                        Antivirus con tecnología en la nube aumenta su seguridad.</p>
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

export default SecurityCloud;