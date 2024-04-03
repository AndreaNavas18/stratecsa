import Styles from './header.module.css';	

function Header() {
  return (
    <section className={`${Styles.sectionHeader} ${Styles.sectionHeaderM}`}>
        <div className={`${Styles.divHeader1} ${Styles.divHeader1M}`}>
            {/* <img
                className={`${Styles.iconBusqueda} ${Styles.iconBusquedaM}`} 
                src="/img/lupa.png"/> */}
            
            <a 
                href='/contacto' 
                className={`${Styles.buttonContact} ${Styles.buttonContactM}`}>
                    Contactanos
            </a>
            <div className={`${Styles.divRedes} ${Styles.divRedesM}`}>
                <a className={`${Styles.cRedes} ${Styles.cRedesM}`} href="https://www.facebook.com/Stratecsa?locale=es_LA" target="_blank" rel="noopener noreferrer">
                    <img
                        className={`${Styles.iconSocial} ${Styles.iconSocialM}`}
                        src="/logos/straface.png"/>
                </a>
                <a className={`${Styles.cRedes} ${Styles.cRedesM}`} href="https://www.instagram.com/stratecsa/" target="_blank" rel="noopener noreferrer">
                    <img
                        className={`${Styles.iconSocial} ${Styles.iconSocialM}`}
                        src="/logos/strains.png"/>
                </a>
                <a className={`${Styles.cRedes} ${Styles.cRedesM}`} href="https://www.linkedin.com/company/stratecsa" target="_blank" rel="noopener noreferrer">
                    <img
                        className={`${Styles.iconSocial} ${Styles.iconSocialM}`}
                        src="/logos/stralink.png"/>
                </a>
                <a className={`${Styles.cRedes} ${Styles.cRedesM}`} href="https://wa.link/7kydod" target="_blank" rel="noopener noreferrer">
                    <img 
                        className={`${Styles.iconSocial} ${Styles.iconSocialM}`}
                        src="/logos/strawhats.png"/>
                </a>
                <a className={`${Styles.cRedes} ${Styles.cRedesM}`} href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <img 
                        className={`${Styles.iconSocial} ${Styles.iconSocialM}`}
                        src="/logos/strayou.png"/>
                </a>

            </div>
        </div>
    </section>

  
  );
}

export default Header;