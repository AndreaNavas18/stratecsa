"use client";
import Styles from './contacto.module.css';
import GoogleMapComponent from '../googlemaps';

function Contacto () {

  const containerSty = {
    backgroundImage: `url(/new/img38.jpg)`,
  };

  return (
    <>
      <div className={`${Styles.container}`} style={containerSty}>
        <div className={Styles.contenedor2}>
          <h1 className={Styles.titleCT}>Contacto</h1>
          <p className={Styles.parrafoCT}>¡Listos para mejorar tu red y llevar tu empresa <br/> al siguiente nivel!</p>
          <p className={Styles.parrafoCT2}>Completa el formulario y descubre cómo podemos <br/> hacerlo juntos.</p>
        </div>
      </div>
      <div>
        <form className={Styles.formulario}>
          <div className={Styles.contenedor3}>
            <div className={Styles.contenedor4}>
              <label className={Styles.labelCT}>Nombre</label>
              <input className={Styles.inputCT} type="text" placeholder="John Smith" />
            </div>
            <div className={Styles.contenedor4}>
              <label className={Styles.labelCT}>Empresa</label>
              <input className={Styles.inputCT} type="text" placeholder="Stratecsa SAS" />
            </div>
            <div className={Styles.contenedor4}>
              <label className={Styles.labelCT}>País</label>
              <input className={Styles.inputCT} type="text" placeholder="Colombia" />
            </div>  
          </div>
          <div className={Styles.contenedor3}>
            <div className={Styles.contenedor4}>
                <label className={Styles.labelCT}>Provincia</label>
                <input className={Styles.inputCT} type="text" placeholder="Valle del Cauca" />
            </div> 
            <div className={Styles.contenedor4}>
              <label className={Styles.labelCT}>Teléfono</label>
              <input className={Styles.inputCT} type="tel" placeholder="320 550 1223" />
            </div>
            <div className={Styles.contenedor4}>
              <label className={Styles.labelCT}>Correo</label>
              <input className={Styles.inputCT} type="email" placeholder="Correo" />
            </div>
          </div>
          <div className={Styles.contenedor3}>
            <div className={Styles.contenedor4}>
              <label className={Styles.labelCT}>Asunto</label>
              <input className={Styles.inputCT2} type="text" placeholder="Asunto" />
            </div>
          </div>
          <div className={Styles.contenedor5}>
            <label className={Styles.labelCT}>Mensaje</label>
            <textarea className={Styles.textAreaCT} placeholder="Mensaje"></textarea>
          </div>
          <div className={Styles.contenedor6}>
            <button className={Styles.botonCT} type="submit">Enviar</button>
          </div>
        </form>
      </div>
        <div className={Styles.contLocationCT}>
          <h1 className={Styles.titleLCT2}>Nuestra Locación</h1>
          <div className={Styles.divmapaCT}>
            <GoogleMapComponent />
              <div className={Styles.locacionCT}>
                  <p className={Styles.parrPRIN}>
                    Nuestros servicios se prestan a nivel nacional, pero en caso de que quieras comunicarte para una solicitud, 
                    nuestra sede principal se encuentra en la ciudad de Cali - Colombia.
                  </p>
                  <div className={Styles.contdivsCTT}>
                    <div className={Styles.firstDiv}>
                      <img className={Styles.backS4} src="/new/iconoubi.png"/>
                        <div className={Styles.textoCTT}>
                          <h1 className={Styles.titleCT2}>UBICACIÓN</h1>
                          <p className={Styles.parrafoCT3}>Avenida 4 Norte # 26N - 18. Cali, Valle del Cauca</p>
                        </div>
                    </div>
                    <div className={Styles.firstDiv}>
                    <img className={Styles.backS4} src="/new/iconotel.png"/>
                      <div className={Styles.textoCTT}>
                        <h1 className={Styles.titleCT2}>LINEAS TELEFÓNICAS</h1>
                        <p className={Styles.parrafoCT3}>(+57) 314 865 4018</p>
                      </div>
                    </div>
                    <div className={Styles.firstDiv}>
                    <img className={Styles.backS4} src="/new/iconomes.png"/>
                      <div className={Styles.textoCTT}>
                        <h1 className={Styles.titleCT2}>EMAIL</h1>
                        <p className={Styles.parrafoCT3}>info@stratecsa.com</p>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>

      &nbsp;

    </>
  )
}

export default Contacto;