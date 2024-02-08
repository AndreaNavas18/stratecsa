import Styles from './header2.module.css';

function Header2() {
    return(
        <section className={Styles.sectionNav}>
            <div className={Styles.container}>
                <div className={Styles.divIcon}>
                <a href="/home">
                    <img
                        className={Styles.iconStra}
                        src="/img/logofinal.png"/>
                </a>
                </div>
                <div className={Styles.divNavBar}>
                    <nav>
                        <ul className={Styles.ulNav}>
                            <li className={Styles.liNav}>
                                <a href="/home">Inicio</a>
                            </li>
                            <li className={Styles.liNav}>
                                <a href="/servicios/internet-dedicado">Servicios</a>
                            </li>
                            <li className={Styles.liNav}>
                                <a href="/nosotros">Acerca de nosotros</a>
                            </li>
                            <li className={Styles.liNav}>
                                <a href="/cobertura">Cobertura</a>
                            </li>
                            <li className={Styles.liNav}>
                                <a href="/contact">Contactenos</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </section>
    );
}

export default Header2;