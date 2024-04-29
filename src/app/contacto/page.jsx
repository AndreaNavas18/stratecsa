"use client";
import Styles from './contacto.module.css';
import GoogleMapComponent from '../googlemaps';
import { useState } from 'react';

function Contacto () {
  const [message, setMessage] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const response = await fetch(e.target.action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    })
    const result = await response.json()
    if(!response.ok) {
      setMessage(result.errors.map(error => error.message).
      join(', '))
      return false
    }
    setMessage('Mensaje enviado con éxito')
  }

  const containerSty = {
    backgroundImage: `url(/new/contacto4.png)`,
  };

  return (
    <>
      <div className={`${Styles.container} ${Styles.containerM}`} style={containerSty}>
        <div className={`${Styles.contenedor2} ${Styles.contenedor2M}`}>
          <h1 className={`${Styles.titleCT} ${Styles.titleCTM}`}>Contacto</h1>
          <p className={`${Styles.parrafoCT} ${Styles.parrafoCTM} ${Styles.parD}`}>¡Listos para mejorar tu red y llevar tu empresa <br/> al siguiente nivel!</p>
          {/* Parrafo movil */}
          <p className={`${Styles.parrafoCT} ${Styles.parrafoCTM} ${Styles.parM}`}>¡Listos para mejorar tu red y llevar tu empresa al siguiente nivel!</p>
          <p className={`${Styles.parrafoCT2} ${Styles.parrafoCT2M}`}>Completa el formulario y descubre cómo podemos <br/> hacerlo juntos.</p>
        </div>
      </div>
      <div className={Styles.parD}>
        <form action="https://formspree.io/f/xwkgaaag" method="POST" onSubmit={handleSubmit} className={`${Styles.formulario} ${Styles.formularioM}`}>
          <div className={`${Styles.contenedor3} ${Styles.contenedor3M}`}>
            <div className={`${Styles.contenedor4} ${Styles.contenedor4M}`}>
              <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>Nombre</label>
              <input className={`${Styles.inputCT} ${Styles.inputCTM}`} type="text" placeholder="John Smith" name='name' />
            </div>
            <div className={`${Styles.contenedor4} ${Styles.contenedor4M}`}>
              <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>Empresa</label>
              <input className={`${Styles.inputCT} ${Styles.inputCTM}`} type="text" placeholder="Stratecsa SAS" name='company' />
            </div>
            <div className={`${Styles.contenedor4} ${Styles.contenedor4M}`}>
              <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>País</label>
              <input className={`${Styles.inputCT} ${Styles.inputCTM}`} type="text" placeholder="Colombia" name='pais' />
            </div>
          </div>
          <div className={`${Styles.contenedor3} ${Styles.contenedor3M}`}>
            <div className={`${Styles.contenedor4} ${Styles.contenedor4M}`}>
                <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>Provincia</label>
                <input className={`${Styles.inputCT} ${Styles.inputCTM}`} type="text" placeholder="Valle del Cauca" name='tags' />
            </div>
            <div className={`${Styles.contenedor4} ${Styles.contenedor4M}`}>
              <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>Teléfono</label>
              <input className={`${Styles.inputCT} ${Styles.inputCTM}`} type="tel" placeholder="320 550 1223" name='phone' />
            </div>
            <div className={`${Styles.contenedor4} ${Styles.contenedor4M}`}>
              <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>Correo</label>
              <input className={`${Styles.inputCT} ${Styles.inputCTM}`} type="email" placeholder="Correo" name='email' />
            </div>
          </div>
          <div className={`${Styles.contenedor3} ${Styles.contenedor3M}`}>
            <div className={`${Styles.contenedor4} ${Styles.contenedor4M}`}>
              <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>Asunto</label>
              <input className={`${Styles.inputCT2} ${Styles.inputCT2M}`} type="text" placeholder="Asunto" name='subject' />
            </div>
          </div>
          <div className={`${Styles.contenedor5} ${Styles.contenedor5M}`}>
            <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>Mensaje</label>
            <textarea className={Styles.textAreaCT} placeholder="Mensaje" name='message' ></textarea>
          </div>
          <div className={`${Styles.contenedor6} ${Styles.contenedor6M}`}>
            <button className={`${Styles.botonCT} ${Styles.botonCTM}`} type="submit">Enviar</button>
          </div>
        </form>
      </div> 
      <div className={Styles.parM}>
        {/* Formulario movil  */}
        <form action="https://formspree.io/f/xwkgaaag" method="POST" onSubmit={handleSubmit} className={`${Styles.formulario} ${Styles.formularioM}`}>
          <div className={`${Styles.contenedor3} ${Styles.contenedor3M}`}>
            <div className={`${Styles.contenedor4} ${Styles.contenedor4M}`}>
              <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>Nombre</label>
              <input className={`${Styles.inputCT} ${Styles.inputCTM}`} type="text" placeholder="John Smith" name='name' />
            </div>
            <div className={`${Styles.contenedor4} ${Styles.contenedor4M}`}>
              <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>Empresa</label>
              <input className={`${Styles.inputCT} ${Styles.inputCTM}`} type="text" placeholder="Stratecsa SAS" name='company' />
            </div>
            
          </div>

          <div className={`${Styles.contenedor3} ${Styles.contenedor3M}`}>
            <div className={`${Styles.contenedor4} ${Styles.contenedor4M}`}>
              <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>País</label>
              <input className={`${Styles.inputCT} ${Styles.inputCTM}`} type="text" placeholder="Colombia" name='pais' />
            </div>
            <div className={`${Styles.contenedor4} ${Styles.contenedor4M}`}>
                <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>Provincia</label>
                <input className={`${Styles.inputCT} ${Styles.inputCTM}`} type="text" placeholder="Valle del Cauca" name='tags' />
            </div>
           
          </div>

          <div className={`${Styles.contenedor3} ${Styles.contenedor3M}`}>
            <div className={`${Styles.contenedor4} ${Styles.contenedor4M}`}>
              <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>Teléfono</label>
              <input className={`${Styles.inputCT} ${Styles.inputCTM}`} type="tel" placeholder="320 550 1223" name='phone' />
            </div>
            <div className={`${Styles.contenedor4} ${Styles.contenedor4M}`}>
              <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>Correo</label>
              <input className={`${Styles.inputCT} ${Styles.inputCTM}`} type="email" placeholder="Correo" name='email' />
            </div>
            
          </div>
          <div className={`${Styles.contenedor5} ${Styles.contenedor5M}`}>
            <div className={`${Styles.contenedor4} ${Styles.contenedor44M}`}>
              <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>Asunto</label>
              <input className={`${Styles.inputCT2} ${Styles.inputCT2M}`} type="text" placeholder="Asunto" name='subject' />
            </div>
            <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>Mensaje</label>
            <textarea className={`${Styles.textAreaCT} ${Styles.textAreaCTM}`} placeholder="Mensaje" name='message' ></textarea>
          </div>

          <div className={`${Styles.contenedor6} ${Styles.contenedor6M}`}>
            <button className={`${Styles.botonCT} ${Styles.botonCTM}`} type="submit">Enviar</button>
          </div>
        </form>
      </div>
        <div className={`${Styles.contLocationCT} ${Styles.contLocationCTM}`}>
          <h1 className={`${Styles.titleLCT2} ${Styles.titleLCT2M}`}>Nuestra Locación</h1>
          <div className={`${Styles.divmapaCT} ${Styles.divmapaCTM}`}>
            <GoogleMapComponent />
              <div className={`${Styles.locacionCT} ${Styles.locacionCTM}`}>
                  <p className={`${Styles.parrPRIN} ${Styles.parrPRINM}`}>
                    Nuestros servicios se prestan a nivel nacional, pero en caso de que quieras comunicarte para una solicitud,
                    nuestra sede principal se encuentra en la ciudad de Cali - Colombia.
                  </p>
                  <div className={`${Styles.contdivsCTT} ${Styles.contdivsCTTM}`}>
                    <div className={`${Styles.firstDiv} ${Styles.firstDivM}`}>
                      <img alt="" className={`${Styles.backS4} ${Styles.backS4M}`} src="/new/iconoubi.png"/>
                        <div className={`${Styles.textoCTT} ${Styles.textoCTTM}`}>
                          <h1 className={`${Styles.titleCT2} ${Styles.titleCT2M}`}>UBICACIÓN</h1>
                          <p className={`${Styles.parrafoCT3} ${Styles.parrafoCT3M}`}>Avenida 4 Norte # 26N - 18. Cali, Valle del Cauca</p>
                        </div>
                    </div>
                    <div className={`${Styles.firstDiv} ${Styles.firstDivM}`}>
                    <img alt="" className={`${Styles.backS4} ${Styles.backS4M}`} src="/new/iconotel.png"/>
                      <div className={`${Styles.textoCTT} ${Styles.textoCTTM}`}>
                        <h1 className={`${Styles.titleCT2} ${Styles.titleCT2M}`}>LINEAS TELEFÓNICAS</h1>
                        <p className={`${Styles.parrafoCT3} ${Styles.parrafoCT3M}`}>(+57) 314 865 4018</p>
                      </div>
                    </div>
                    <div className={`${Styles.firstDiv} ${Styles.firstDivM}`}>
                    <img alt="" className={`${Styles.backS4} ${Styles.backS4M}`} src="/new/iconomes.png"/>
                      <div className={`${Styles.textoCTT} ${Styles.textoCTTM}`}>
                        <h1 className={`${Styles.titleCT2} ${Styles.titleCT2M}`}>EMAIL</h1>
                        <p className={`${Styles.parrafoCT3} ${Styles.parrafoCT3M}`}>info@stratecsa.com</p>
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