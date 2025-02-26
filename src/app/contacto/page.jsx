"use client";
import Styles from './contacto.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormContacto from './components/formContacto/formContacto';
import ContactoInfo from './components/contactoInfo/contactoInfo';
import WhatsappBanner from './components/whatsappBanner/whatsappBanner';
import Load from '../components/load/load';
import './styles.css';

function Contacto () {

  const containerSty = {
    backgroundImage: `url(/new/contacto4.png)`,
  };

  return (
    <>
    <Load />
    <div className={`${Styles.container} ${Styles.containerM}`} style={containerSty}>
        <div className={`${Styles.contenedor2} ${Styles.contenedor2M}`}>
          <h1 className={`${Styles.titleCT} ${Styles.titleCTM}`}>Contacto</h1>
          <p className={`${Styles.parrafoCT} ${Styles.parrafoCTM} ${Styles.parD}`}>¡Listos para mejorar tu red y llevar tu empresa <br/> al siguiente nivel!</p>
        </div>
      </div>
      <FormContacto />
      <WhatsappBanner />
      <ContactoInfo />

    </>
  )
}

export default Contacto;