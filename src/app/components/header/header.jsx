import Styles from './header.module.css';	

function Header() {
  return (
    <section className={Styles.sectionHeader}>
        <div className={Styles.divHeader1}>
            <img
                className={Styles.iconBusqueda} 
                src="/img/lupa.png"/>
            <button
                className={Styles.buttonContact}
            >
                Contactanos
            </button>
            <div className={Styles.divRedes}>
                <a className={Styles.cRedes} href="https://www.facebook.com/">
                    <img
                        className={Styles.iconSocial}
                        src="/logos/straface.png"/>
                </a>
                <a className={Styles.cRedes} href="https://www.instagram.com/">
                    <img
                        className={Styles.iconSocial}
                        src="/logos/strains.png"/>
                </a>
                <a className={Styles.cRedes} href="https://www.linkedin.com/">
                    <img
                        className={Styles.iconSocial}
                        src="/logos/stralink.png"/>
                </a>
                <a className={Styles.cRedes} href="https://www.whatsapp.com/">
                    <img 
                        className={Styles.iconSocial}
                        src="/logos/strawhats.png"/>
                </a>
                <a className={Styles.cRedes} href="https://www.youtube.com/">
                    <img 
                        className={Styles.iconSocial}
                        src="/logos/strayou.png"/>
                </a>

            </div>
        </div>
    </section>

  
  );
}

export default Header;