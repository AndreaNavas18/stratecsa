import React from 'react';
import Styles from './productos.module.css';

const CloudBackup = ({ nombre, contenido }) => {
  const parrafColor = {
      color: '#009cda', 
  }
  const carac = {
    fontWeight: '600',
  }
return (
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
                      <img src="/img/cheque(1).png" className={Styles.imgP}/>
                      Elegir la cantidad de núcleos, memoria RAM y almacenamiento que su negocio requiera.
                  </li>
                  <li className={Styles.liP}>
                      <img src="/img/cheque(1).png" className={Styles.imgP}/>
                      Proteger el ingreso y salida de datos, así como de aplicaciones. 
                  </li>
                
              </ul>
      </div>
      <div className={Styles.seccion2}>
          <div className={Styles.divImg}>
              <img src="/new/img19.jpg" className={Styles.img2P}/>
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
      <div className={Styles.botonID}>
          <button className={Styles.buttonP2}>Solicitar información</button>
      </div>
  </div>
);
};

export default CloudBackup;
