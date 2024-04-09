import Styles from './footer1.module.css';

function Footer1() {

    const backFooter = {
        backgroundImage: `url(/new/img7.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        height: '100%', 
        width: '100%', 
      };

      const palabColor = {
        color: '#009cda',
      }

      const movilFooter = {
        backgroundImage: `url(/img/footermovil.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        height: '100%', 
        width: '100%',
      }


    return(
        <div>
            <footer className={`${Styles.footer1} ${Styles.noneMovil}`} style={backFooter}>
                <div className={Styles.seccion1}>
                    <div className={Styles.div1F1}>
                        <a href="/">
                            <img className={Styles.logoF1} src="/img/logofinal.png"/>
                        </a>

                        <p className={Styles.parrafoF1}>Somos una empresa de tecnología, proveedores de 
                        internet empresarial expertos en el área de telecomunicaciones, 
                        diseñamos software a la medida.</p>

                        
                        <div className={Styles.divRedesF1}>
                            <a className={Styles.cRedesF1} href="https://www.facebook.com/">
                                <img
                                    className={Styles.iconSocialF1}
                                    src="/logos/straface.png"/>
                            </a>
                            <a className={Styles.cRedesF1} href="https://www.instagram.com/">
                                <img
                                    className={Styles.iconSocialF1}
                                    src="/logos/strains.png"/>
                            </a>
                            <a className={Styles.cRedesF1} href="https://www.linkedin.com/">
                                <img
                                    className={Styles.iconSocialF1}
                                    src="/logos/stralink.png"/>
                            </a>
                            <a className={Styles.cRedesF1} href="https://www.whatsapp.com/">
                                <img 
                                    className={Styles.iconSocialF1}
                                    src="/logos/strawhats.png"/>
                            </a>
                            <a className={Styles.cRedesF1} href="https://www.youtube.com/">
                                <img 
                                    className={Styles.iconSocialF1}
                                    src="/logos/strayou.png"/>
                            </a>
                        </div>

                    </div>

                    <div className={Styles.compF1}>
                        <h2 className={Styles.titleMapaF1}>COMPAÑÍA</h2>
                        <nav>
                            <ul className={Styles.ulNavF1}>
                                <li className={Styles.liNavF1}>
                                    <a href="/nosotros">Acerca de nosotros</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/cobertura">Cobertura</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/#">Términos y condiciones</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/#">Políticas de protección de datos</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/#">Soporte</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/contact">Contáctenos</a>
                                </li>
                            </ul>
                        </nav>

                    </div>

                    <div className={Styles.prodF1}>
                        <h2 className={Styles.titleMapaF1}>PRODUCTOS</h2>
                        <nav>
                            <ul className={Styles.ulNavF1}>
                                <li className={Styles.liNavF1}>
                                    <a href="/servicios">Internet dedicado</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/servicios">Ultima milla</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/servicios">Ciberseguridad</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/#">Enlace de datos</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/#">Comunicaciones unificadas</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/#">Servidor dedicado</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/#">Colocation</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/#">Cloud server</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className={Styles.susF1}>
                        <h2 className={Styles.titleSusF1}>SUSCRÍBETE AHORA</h2>
                        <p className={Styles.parrafoSusF1}>Ofertas exclusivas solo para nuestros suscriptores</p>
                        <div className={Styles.divCorreo}>
                            <input className={Styles.inputF1} type="text" placeholder="Escribe tu correo "/>
                            <button className={Styles.btnCorreo}>
                                <a href="/#">
                                    <img className={Styles.avionF1} src="/new/avion.png"/>
                                </a>
                            </button>
                        </div>
                    </div>

                </div>
                <div className={Styles.seccion2}>
                    <div className={Styles.divCopyF1}>
                        <h2 className={Styles.copyF1}>Creado e inspirado por 
                        <span style={palabColor}> Stratecsa</span> 2024</h2>
                    </div>
                </div>
            </footer>


            <footer className={`${Styles.footer1M} ${Styles.nonePc}`} style={movilFooter}>
                <div className={Styles.contenedorM}>
                    <div className={Styles.compF1M}>
                        <h2 className={Styles.titleMapaF1M}>COMPAÑÍA</h2>
                        <nav>
                            <ul className={Styles.ulNavF1M}>
                                <li className={Styles.liNavF1M}>
                                    <a href="/nosotros">Acerca de nosotros</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/cobertura">Cobertura</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/#">Términos y condiciones</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/#">Políticas de protección de datos</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/#">Soporte</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/contact">Contáctenos</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className={Styles.prodF1M}>
                        <h2 className={Styles.titleMapaF1M}>PRODUCTOS</h2>
                        <nav>
                            <ul className={Styles.ulNavF1M}>
                                <li className={Styles.liNavF1M}>
                                    <a href="/servicios">Internet dedicado</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/servicios">Ultima milla</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/servicios">Ciberseguridad</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/#">Enlace de datos</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/#">Comunicaciones unificadas</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/#">Servidor dedicado</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/#">Colocation</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/#">Cloud server</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className={Styles.susF1M}>
                        <h2 className={Styles.titleSusF1M}>SUSCRÍBETE AHORA</h2>
                        <p className={Styles.parrafoSusF1M}>Ofertas exclusivas solo para nuestros suscriptores</p>
                        <div className={Styles.divCorreoM}>
                            <input className={Styles.inputF1M} type="text" placeholder="Escribe tu correo "/>
                            <button className={Styles.btnCorreoM}>
                                <a href="/#">
                                    <img className={Styles.avionF1M} src="/new/avion.png"/>
                                </a>
                            </button>
                        </div>
                    </div>

                    <div className={Styles.redesM}>
                        <div className={Styles.divRedesF1M}>
                            <a className={Styles.cRedesF1M} href="https://www.facebook.com/">
                                <img
                                    className={Styles.iconSocialF1M}
                                    src="/logos/straface.png"/>
                            </a>
                            <a className={Styles.cRedesF1M} href="https://www.instagram.com/">
                                <img
                                    className={Styles.iconSocialF1M}
                                    src="/logos/strains.png"/>
                            </a>
                            <a className={Styles.cRedesF1M} href="https://www.linkedin.com/">
                                <img
                                    className={Styles.iconSocialF1M}
                                    src="/logos/stralink.png"/>
                            </a>
                            <a className={Styles.cRedesF1M} href="https://www.whatsapp.com/">
                                <img 
                                    className={Styles.iconSocialF1M}
                                    src="/logos/strawhats.png"/>
                            </a>
                            <a className={Styles.cRedesF1M} href="https://www.youtube.com/">
                                <img 
                                    className={Styles.iconSocialF1M}
                                    src="/logos/strayou.png"/>
                            </a>
                        </div>
                        <div className={Styles.fraseMM}>
                            <h2 className={Styles.textoMM}>Síguenos</h2>
                        </div>
                    </div>

                    <div className={Styles.seccion2M}>
                            <a href="/">
                                <img className={Styles.logoF1M} src="/img/logofinal.png"/>
                            </a>
                            <h2 className={Styles.copyF1M}>© 2024 Stratecsa sas </h2>
                    </div>


                </div>
            </footer>
        </div>
    );

}

export default Footer1;