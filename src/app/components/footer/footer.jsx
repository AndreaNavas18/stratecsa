import Styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={Styles.footer1}>
            <div className={Styles.divFooter}>
                <div className={Styles.div1Footer}>
                    <div className={Styles.divIconF}>
                        <a href="/">
                            <img
                                className={Styles.iconStraF}
                                src="/img/logofinal.png"/>
                        </a>
                    </div>
                    <div className={Styles.divRedes}>
                        <h2 className={Styles.redesTxt}>Siguenos</h2>
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
                <div className={Styles.divMapa}>
                    <div className={Styles.divMapa1}>
                    <h2 className={Styles.titleMapa}>Mapa del sitio</h2>
                        <nav>
                            <ul className={Styles.ulNav}>
                                <li className={Styles.liNav}>
                                    <a href="/">Inicio</a>
                                </li>
                                <li className={Styles.liNav}>
                                    <a href="/servicios">Servicios</a>
                                </li>
                                <li className={Styles.liNav}>
                                    <a href="/nosotros">Acerca de nosotros</a>
                                </li>
                                <li className={Styles.liNav}>
                                    <a href="/cobertura">Cobertura</a>
                                </li>
                                <li className={Styles.liNav}>
                                    <a href="/contacto">Contactenos</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={Styles.divMapa2}>
                    <h2 className={Styles.titleMapa2}>Productos y servicios</h2>
                        <nav>
                            <ul className={Styles.ulNav2}>
                                <li className={Styles.liNav2}>
                                    <a href="/">Amplia cobertura</a>
                                </li>
                                <li className={Styles.liNav2}>
                                    <a href="/servicios">Servicio personalizado</a>
                                </li>
                                <li className={Styles.liNav2}>
                                    <a href="/nosotros">Servicio de soporte</a>
                                </li>
                                <li className={Styles.liNav2}>
                                    <a href="/cobertura">Pago en línea</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={Styles.divMapa3}>
                        <h2 className={Styles.titleMapa3}>Contacto</h2>
                            <ul className={Styles.ulNav3}>
                                <li className={Styles.liNav3}>
                                <h2 className={Styles.subTitleMapa3}>Ubicacion</h2>
                                <p>Avenida 4 Norte # 26N - 18</p>
                                </li>
                                <li className={Styles.liNav3}>
                                <h2 className={Styles.subTitleMapa3}>Email</h2>
                                <p>info@stratecsa.com</p>
                                </li>
                            </ul>
                    </div>
                </div>
                <div className={Styles.copyFooter}>
                    <p className={Styles.copyRight}>Copyright © 2024. Stratecsa - Todos los derechos reservados.</p>
                </div>
                
            </div>
        </footer>
    );
}