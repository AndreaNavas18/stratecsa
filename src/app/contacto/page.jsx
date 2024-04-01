import Styles from './contacto.module.css';

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
          </div>
          <div className={Styles.contenedor3}>
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
              <input className={Styles.inputCT} type="text" placeholder="Asunto" />
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
      &nbsp;

    </>
  )
}

export default Contacto;