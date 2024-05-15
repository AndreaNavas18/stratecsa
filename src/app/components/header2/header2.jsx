"use client";
import Styles from './header2.module.css';
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faXmark, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Header2() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuVisible2, setMenuVisible2] = useState(false);
    const [menuVisible3, setMenuVisible3] = useState(false);
    const [menuVisible4, setMenuVisible4] = useState(false);
    const [menuVisible5, setMenuVisible5] = useState(false);


    const menuRef4 = useRef(null);
    const menuRef5 = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef4.current && !menuRef4.current.contains(event.target)) {
                setMenuVisible3(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef5.current && !menuRef5.current.contains(event.target)) {
                setMenuVisible5(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    //Menu Cobertura desktop
    const handleMouseEnter = () => {
        setMenuVisible(true);
    };
    
    const handleMouseLeave = () => {
        setMenuVisible(false);
    };

    const handleMenuMouseEnter = () => {
        setMenuVisible(true);
    };
    
    const handleMenuMouseLeave = () => {
        setMenuVisible(false);
    };
    const chevronIcon = menuVisible ? faChevronUp : faChevronDown;


    const toggleMenu2 = () => {
        setMenuVisible2(!menuVisible2);
    }

    //Menu Servicios desktop
    const handleMouseEnter3 = () => {
        setMenuVisible3(true);
    };
    
    const handleMouseLeave3 = () => {
        setMenuVisible3(false);
    };

    const handleMenuMouseEnter3 = () => {
        setMenuVisible3(true);
    };
    
    const handleMenuMouseLeave3 = () => {
        setMenuVisible3(false);
    };

    const chevronIcon3 = menuVisible3 ? faChevronUp : faChevronDown;


    const toggleMenu4 = () => {
        setMenuVisible4(!menuVisible4);
    }

    const chevronIcon4 = menuVisible4 ? faChevronUp : faChevronDown;

    const toggleMenu5 = () => {
        setMenuVisible5(!menuVisible5);
    }

    const chevronIcon5 = menuVisible5 ? faChevronUp : faChevronDown;


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
                            <div className={Styles.dropdown} >
                                <li>
                                    <button className={Styles.toggleButton}
                                    onMouseEnter={handleMouseEnter3}
                                    onMouseLeave={handleMouseLeave3}
                                    >
                                        Servicios
                                        <FontAwesomeIcon icon={chevronIcon3} className={Styles.iconChevron} />
                                    </button>
                                        <ul className={`${Styles.menuItems} ${menuVisible3 ? Styles.menuVisible3 : ''}`}
                                        onMouseEnter={handleMenuMouseEnter3}
                                        onMouseLeave={handleMenuMouseLeave3}
                                        >
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
                                                <a href='/servicios/colocation'>Colocation</a>
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
                            <div className={Styles.dropdown}>
                                <li>
                                    <button className={Styles.toggleButton}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    >
                                        Cobertura
                                        <FontAwesomeIcon icon={chevronIcon} className={Styles.iconChevron} />
                                    </button>
                                        <ul className={`${Styles.menuItems} ${menuVisible ? Styles.menuVisible : ''}`}
                                         onMouseEnter={handleMenuMouseEnter}
                                         onMouseLeave={handleMenuMouseLeave}
                                         >
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
                                <a href="/contacto">Contáctenos</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={`${Styles.navMovil} ${Styles.navMovilS}`}>
                    {/* <a href='https://www.agata.stratecsa.com'>
                        <FontAwesomeIcon icon={faUser} className={Styles.iconClient} />
                    </a> */}
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
                        <div className={Styles.dropdownM} ref={menuRef4}>
                            <li className={Styles.liMenuMovil}>
                                <button className={Styles.toggleButtonM} onClick={toggleMenu4}>
                                    Servicios
                                    <FontAwesomeIcon icon={chevronIcon4} className={Styles.iconChevronM} />
                                </button>
                                <ul className={`${Styles.menuItemsM} ${menuVisible4 ? Styles.menuVisible4 : ''}`}>
                                    <li className={Styles.subMenuM}>
                                        <a href='/servicios/internet-dedicado'>Internet Dedicado</a>
                                    </li>
                                    <li className={Styles.subMenuM}>
                                        <a href='/servicios/ciberseguridad' >Ciberseguridad</a>
                                    </li>
                                    <li className={Styles.subMenuM}>
                                        <a href='/servicios/red-mpls' >Red MPLS</a>
                                    </li>
                                    <li className={Styles.subMenuM}>
                                        <a href='/servicios/cloud-backup'>Cloud Backup</a>
                                    </li>
                                    <li className={Styles.subMenuM}>
                                        <a href='/servicios/cloud-server'>Cloud Server</a>
                                    </li>
                                    <li className={Styles.subMenuM}>
                                        <a href='/servicios/colocation'>Colocation</a>
                                    </li>
                                    <li className={Styles.subMenuM}>
                                        <a href='/servicios/comunicaciones-unificadas'>Comunicaciones Unificadas</a>
                                    </li>
                                    <li className={Styles.subMenuM}>
                                        <a href='/servicios/enlace-datos'>Enlace de Datos</a>
                                    </li>
                                    <li className={Styles.subMenuM}>
                                        <a href='/servicios/outsourcing'>Outsourcing TIC</a>
                                    </li>
                                    <li className={Styles.subMenuM}>
                                        <a href='/servicios/servidor-dedicado'>Servidor Dedicado</a>
                                    </li>
                                    <li className={Styles.subMenuM}>
                                        <a href='/servicios/security-cloud'>Security Cloud</a>
                                    </li>
                                    <li className={Styles.subMenuM}>
                                        <a href='/servicios/correo-corporativo'>Correo Corporativo</a>
                                    </li>
                                </ul>
                            </li>
                        </div>
                        <li className={Styles.liMenuMovil}>
                            <a href="/nosotros">Acerca de nosotros</a>
                        </li>
                        <div className={Styles.dropdownM} ref={menuRef5}>
                            <li className={Styles.liMenuMovil}>
                                <button className={Styles.toggleButtonM} onClick={toggleMenu5}>
                                    Cobertura
                                    <FontAwesomeIcon icon={chevronIcon5} className={Styles.iconChevronM} />
                                </button>
                                <ul className={`${Styles.menuItemsM} ${menuVisible5 ? Styles.menuVisible5 : ''}`}>
                                    <li className={Styles.subMenuM}>
                                        <a href='/cobertura/colombia'>Colombia</a>
                                    </li>
                                    <li className={Styles.subMenuM}>
                                        <a href='/cobertura/brasil' >Brasil</a>
                                    </li>
                                    <li className={Styles.subMenuM}>
                                        <a href='/cobertura/latinoamerica' >Latinoamérica</a>
                                    </li>
                                </ul>
                            </li>
                        </div>
                        <li className={Styles.liMenuMovil}>
                            <a href="/contacto">Contáctenos</a>
                        </li>
                    </ul>
                </nav>
            </div>}
        </section>
    );
}

export default Header2;