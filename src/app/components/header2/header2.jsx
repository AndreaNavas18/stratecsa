"use client";
import Styles from './header2.module.css';
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faXmark, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Header2() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuVisible2, setMenuVisible2] = useState(false);
    const [menuVisible3, setMenuVisible3] = useState(false);
    const menuRef = useRef(null);
    const menuRef3 = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuVisible(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef3.current && !menuRef3.current.contains(event.target)) {
                setMenuVisible3(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const toggleMenu2 = () => {
        setMenuVisible2(!menuVisible2);
    }

    const toggleMenu3 = () => {
        setMenuVisible3(!menuVisible3);
    }

    return(
        <section className={`${Styles.sectionNav} ${Styles.sectionNavM}`}>
            <div className={`${Styles.container} ${Styles.containerM}`}>
                <div className={`${Styles.divIcon} ${Styles.divIconM}`}>
                    <a href="/">
                        <img
                            className={`${Styles.iconStra} ${Styles.iconStraM}`}
                            src="/img/logofinal.png"/>
                    </a>
                </div>
                <div className={`${Styles.divNavBar} ${Styles.divNavBarM}`}>
                    <nav>
                        <ul className={Styles.ulNav}>
                            <li className={Styles.liNav}>
                                <a href="/">Inicio</a>
                            </li>
                            <div className={Styles.dropdown} ref={menuRef3}>
                                <li>
                                    <button className={Styles.toggleButton} onClick={toggleMenu3}>
                                        Servicios
                                        <FontAwesomeIcon icon={faChevronDown} className={Styles.iconChevron} />
                                    </button>
                                        <ul className={`${Styles.menuItems} ${menuVisible3 ? Styles.menuVisible3 : ''}`}>
                                            <li className={Styles.subMenu}>
                                                <a href='/servicios/internet-dedicado'>Internet Dedicado</a>
                                            </li>
                                            <li className={Styles.subMenu}>
                                                <a href='/servicios/ciberseguridad' >Ciberseguridad</a>
                                            </li>
                                            <li className={Styles.subMenu}>
                                                <a href='/servicios/red-mpls' >Red MPLS</a>
                                            </li>
                                            <li className={Styles.subMenu}>
                                                <a href='/servicios/cloud-backup'>Cloud Backup</a>
                                            </li>
                                            <li className={Styles.subMenu}>
                                                <a href='/servicios/cloud-server'>Cloud Server</a>
                                            </li>
                                            <li className={Styles.subMenu}>
                                                <a href='/servicios/Colocation'>Colocation</a>
                                            </li>
                                            <li className={Styles.subMenu}>
                                                <a href='/servicios/comunicaciones-unificadas'>Comunicaciones Unificadas</a>
                                            </li>
                                            <li className={Styles.subMenu}>
                                                <a href='/servicios/enlace-datos'>Enlace de Datos</a>
                                            </li>
                                            <li className={Styles.subMenu}>
                                                <a href='/servicios/outsourcing'>Outsourcing TIC</a>
                                            </li>
                                            <li className={Styles.subMenu}>
                                                <a href='/servicios/servidor-dedicado'>Servidor Dedicado</a>
                                            </li>
                                            <li className={Styles.subMenu}>
                                                <a href='/servicios/security-cloud'>Security Cloud</a>
                                            </li>
                                            <li className={Styles.subMenu}>
                                                <a href='/servicios/correo-corporativo'>Correo Corporativo</a>
                                            </li>
                                        </ul>
                                </li>
                            </div>
                            <li className={Styles.liNav}>
                                <a href="/nosotros">Acerca de nosotros</a>
                            </li>
                            <div className={Styles.dropdown} ref={menuRef}>
                                <li>
                                    <button className={Styles.toggleButton} onClick={toggleMenu}>
                                        Cobertura
                                        <FontAwesomeIcon icon={faChevronDown} className={Styles.iconChevron} />
                                    </button>
                                        <ul className={`${Styles.menuItems} ${menuVisible ? Styles.menuVisible : ''}`}>
                                            <li className={Styles.subMenu}>
                                                <a href='/cobertura/colombia'>Colombia</a>
                                            </li>
                                            <li className={Styles.subMenu}>
                                                <a href='/cobertura/brasil' >Brasil</a>
                                            </li>
                                            <li className={Styles.subMenu}>
                                                <a href='/cobertura/latinoamerica' >Latinoamérica</a>
                                            </li>
                                        </ul>
                                </li>
                            </div>
                            <li className={Styles.liNav}>
                                <a href="/contacto">Contactenos</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={`${Styles.navMovil} ${Styles.navMovilS}`}>
                    <a href='https://www.stratecsa.cloud'>
                        <FontAwesomeIcon icon={faUser} className={Styles.iconClient} />
                    </a>
                    <FontAwesomeIcon icon={faBars} className={Styles.iconFabars} onClick={toggleMenu2} />

                </div>
            </div>
            {menuVisible2 && 
            <div className={Styles.divMenuMovil}>
                <FontAwesomeIcon icon={faXmark} className={Styles.closeButton} onClick={toggleMenu2} />

                <nav className={Styles.navM}>
                    <ul className={Styles.ulMenuMovil}>
                        <li className={Styles.liMenuMovil}>
                            <a href="/">Inicio</a>
                        </li>
                        <li className={Styles.liMenuMovil}>
                            <a href="/servicios/internet-dedicado">Servicios</a>
                        </li>
                        <li className={Styles.liMenuMovil}>
                            <a href="/nosotros">Acerca de nosotros</a>
                        </li>
                        <li className={Styles.liMenuMovil}>
                            <a href="">Cobertura</a>
                            <FontAwesomeIcon icon={faChevronDown} className={Styles.iconChevron} />
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