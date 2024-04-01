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
                <a className={Styles.cRedes} href="https://www.facebook.com/Stratecsa?locale=es_LA" target="_blank" rel="noopener noreferrer">
                    <img
                        className={Styles.iconSocial}
                        src="/logos/straface.png"/>
                </a>
                <a className={Styles.cRedes} href="https://www.instagram.com/stratecsa/" target="_blank" rel="noopener noreferrer">
                    <img
                        className={Styles.iconSocial}
                        src="/logos/strains.png"/>
                </a>
                <a className={Styles.cRedes} href="linkedin.com/company/stratecsahttps://www.youtube.com/channel/UCuGt4UxB2RHM9BoRumkYo1w" target="_blank" rel="noopener noreferrer">
                    <img
                        className={Styles.iconSocial}
                        src="/logos/stralink.png"/>
                </a>
                <a className={Styles.cRedes} href="https://wa.link/7kydod" target="_blank" rel="noopener noreferrer">
                    <img 
                        className={Styles.iconSocial}
                        src="/logos/strawhats.png"/>
                </a>
                <a className={Styles.cRedes} href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
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