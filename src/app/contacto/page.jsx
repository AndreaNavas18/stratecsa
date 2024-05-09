"use client";
import Styles from './contacto.module.css';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const GoogleMapComponent = dynamic(() => import('../googlemaps'), { ssr: false });

function Contacto () {
  const [message, setMessage] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [pais, setPais] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [servicio, setServicio] = useState('internetDedicado');

  useEffect(() => {
    if(servicio === ''){
      setServicio('internetDedicado');
    }

  }, [servicio])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('https://agata.stratecsa.com/contacto.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phone, mensaje, email })
        });

        if (response.ok) {
            console.log('Correo enviado correctamente');
        } else {
            console.error('Error al enviar correo');
        }
      setEnviado(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error) {
        console.error('Error de red:', error);
    }
  };


  const containerSty = {
    backgroundImage: `url(/new/contacto4.png)`,
  };

  const wii = {
    width: '720px',
  };


  return (
    <>
      <div className={`${Styles.container} ${Styles.containerM}`} style={containerSty}>
        <div className={`${Styles.contenedor2} ${Styles.contenedor2M}`}>
          <h1 className={`${Styles.titleCT} ${Styles.titleCTM}`}>Contacto</h1>
          <p className={`${Styles.parrafoCT} ${Styles.parrafoCTM} ${Styles.parD}`}>¡Listos para mejorar su red y llevar su empresa <br/> al siguiente nivel!</p>
          {/* Parrafo movil */}
          <p className={`${Styles.parrafoCT} ${Styles.parrafoCTM} ${Styles.parM}`}>¡Listos para mejorar su red y llevar su empresa al siguiente nivel!</p>
          <p className={`${Styles.parrafoCT2} ${Styles.parrafoCT2M}`}>Completa el formulario y descubre cómo podemos <br/> hacerlo juntos.</p>
        </div>
      </div>
      <div className={Styles.parD}>
      {enviado ? ( <p className={Styles.aviso}>¡Gracias por preferirnos, nos comunicaremos contigo pronto!</p>) : (
        <form onSubmit={handleSubmit} className={`${Styles.formulario} ${Styles.formularioM}`}>
          <div className={`${Styles.contenedor3} ${Styles.contenedor3M}`}>
            <div className={`${Styles.contenedor4} ${Styles.contenedor4M}`}>
              <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>Nombre</label>
              <input className={`${Styles.inputCT} ${Styles.inputCTM}`} type="text" placeholder="John Smith" name='name' value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className={`${Styles.contenedor4} ${Styles.contenedor4M}`}>
              <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>Teléfono</label>
              <input className={`${Styles.inputCT} ${Styles.inputCTM}`} type="number" placeholder="320 550 1223" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} required/>
            </div>
           
          </div>
          <div className={`${Styles.contenedor3} ${Styles.contenedor3M}`}>         
            <div className={`${Styles.contenedor4} ${Styles.contenedor4M}`} style={wii}>
              <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>Correo</label>
              <input className={`${Styles.inputCT} ${Styles.inputCTM}`} type="email" placeholder="Correo" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>
          <div className={`${Styles.contenedor5} ${Styles.contenedor5M}`}>
            <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>Mensaje</label>
            <textarea className={Styles.textAreaCT} placeholder="Mensaje" name='mensaje' value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
          </div>
          <div className={`${Styles.contenedor6} ${Styles.contenedor6M}`}>
            <button className={`${Styles.botonCT} ${Styles.botonCTM}`} type="submit">Enviar</button>
          </div>
        </form>
      )}
      </div> 
      <div className={Styles.parM}>
        {/* Formulario movil  */}
        {enviado ? ( <p className={Styles.aviso}>¡Gracias por preferirnos, nos comunicaremos contigo pronto!</p>) : (
        <form className={`${Styles.formulario} ${Styles.formularioM}`}>
          <div className={`${Styles.contenedor3} ${Styles.contenedor3M}`}>
            <div className={`${Styles.contenedor4} ${Styles.contenedor4M}`}>
              <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>Nombre</label>
              <input className={`${Styles.inputCT} ${Styles.inputCTM}`} type="text" placeholder="John Smith" name='name' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            
          </div>

          <div className={`${Styles.contenedor3} ${Styles.contenedor3M}`}>
            <div className={`${Styles.contenedor4} ${Styles.contenedor4M}`}>
              <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>Teléfono</label>
              <input className={`${Styles.inputCT} ${Styles.inputCTM}`} type="number" placeholder="320 000 0000" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            
          </div>

          <div className={`${Styles.contenedor3} ${Styles.contenedor3M}`}>
            <div className={`${Styles.contenedor4} ${Styles.contenedor4M}`}>
              <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>Correo</label>
              <input className={`${Styles.inputCT} ${Styles.inputCTM}`} type="email" placeholder="Correo" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>


          <div className={`${Styles.contenedor5} ${Styles.contenedor5M}`}>
            <label className={`${Styles.labelCT} ${Styles.labelCTM}`}>Mensaje</label>
            <textarea className={`${Styles.textAreaCT} ${Styles.textAreaCTM}`} placeholder="Mensaje" name='mensaje' value={mensaje} onChange={(e) => setMensaje(e.target.value)} ></textarea>
          </div>

          <div className={`${Styles.contenedor6} ${Styles.contenedor6M}`}>
            <button className={`${Styles.botonCT} ${Styles.botonCTM}`} type="submit">Enviar</button>
          </div>
        </form>
      )}
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