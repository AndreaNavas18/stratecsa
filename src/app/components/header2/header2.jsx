"use client";
import Styles from './header2.module.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';

function Header2() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <section className={`${Styles.sectionNav} ${Styles.sectionNavM}`}>
            <div className={`${Styles.container} ${Styles.containerM}`}>
                <div className={`${Styles.divIcon} ${Styles.divIconM}`}>
                    <a href="/home">
                        <img
                            className={`${Styles.iconStra} ${Styles.iconStraM}`}
                            src="/img/logofinal.png"/>
                    </a>
                </div>
                <div className={`${Styles.divNavBar} ${Styles.divNavBarM}`}>
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
                                <a href="/contacto">Contactenos</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={`${Styles.navMovil}`}>
                    <FontAwesomeIcon icon={faUser} className={Styles.iconClient} />
                    <FontAwesomeIcon icon={faBars} className={Styles.iconFabars} onClick={toggleMenu} />

                </div>
            </div>
            {menuOpen && 
            <div className={Styles.divMenuMovil}>
                <FontAwesomeIcon icon={faXmark} className={Styles.closeButton} onClick={toggleMenu} />

                <nav className={Styles.navM}>
                    <ul className={Styles.ulMenuMovil}>
                        <li className={Styles.liMenuMovil}>
                            <a href="/home">Inicio</a>
                        </li>
                        <li className={Styles.liMenuMovil}>
                            <a href="/servicios/internet-dedicado">Servicios</a>
                        </li>
                        <li className={Styles.liMenuMovil}>
                            <a href="/nosotros">Acerca de nosotros</a>
                        </li>
                        <li className={Styles.liMenuMovil}>
                            <a href="/cobertura">Cobertura</a>
                        </li>
                        <li className={Styles.liMenuMovil}>
                            <a href="/contacto">Contactenos</a>
                        </li>
                    </ul>
                </nav>
            </div>}
        </section>
    );
}

export default Header2;