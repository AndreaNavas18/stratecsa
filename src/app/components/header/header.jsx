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
                        src="/img/facebook.png"/>
                </a>
                <a className={Styles.cRedes} href="https://www.instagram.com/">
                    <img
                        className={Styles.iconSocial}
                        src="/img/instagram.png"/>
                </a>
                <a className={Styles.cRedes} href="https://www.twitter.com/">
                    <img
                        className={Styles.iconSocial}
                        src="/img/twitter.png"/>
                </a>
                <a className={Styles.cRedes} href="https://www.linkedin.com/">
                    <img 
                        className={Styles.iconSocial}
                        src="/img/linkedin.png"/>
                </a>

            </div>
        </div>
    </section>

  
  );
}

export default Header;