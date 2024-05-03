"use client";
import Styles from './footer1.module.css';
import { useEffect, useState } from 'react';

function Footer1() {

    const [enviado, setEnviado] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost/phpBackend/suscripcion.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });
    
            if (response.ok) {
                console.log('Correo guardado correctamente');
            } else {
                console.error('Error al enviar el correo al backend');
            }
          setEnviado(true);
    
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

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
                            <a className={Styles.cRedesF1} href="https://www.facebook.com/Stratecsa?locale=es_LA" target="_blank" rel="noopener noreferrer">
                                <img
                                    className={Styles.iconSocialF1}
                                    src="/logos/straface.png"/>
                            </a>
                            <a className={Styles.cRedesF1} href="https://www.instagram.com/stratecsa/" target="_blank" rel="noopener noreferrer">
                                <img
                                    className={Styles.iconSocialF1}
                                    src="/logos/strains.png"/>
                            </a>
                            <a className={Styles.cRedesF1} href="https://www.linkedin.com/company/stratecsa" target="_blank" rel="noopener noreferrer">
                                <img
                                    className={Styles.iconSocialF1}
                                    src="/logos/stralink.png"/>
                            </a>
                            <a className={Styles.cRedesF1} href="https://wa.link/7kydod" target="_blank" rel="noopener noreferrer">
                                <img 
                                    className={Styles.iconSocialF1}
                                    src="/logos/strawhats.png"/>
                            </a>
                            <a className={Styles.cRedesF1} href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
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
                                    <a href="/cobertura/colombia">Cobertura en Colombia</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/cobertura/brasil">Cobertura en Brasil</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/cobertura/latinoamerica">Cobertura en Latinoamérica</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/terminos">Términos y condiciones</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/politicas">Políticas de protección de datos</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="https://www.stratecsa.cloud">Soporte</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/contact">Contáctenos</a>
                                </li>
                            </ul>
                        </nav>

                    </div>

                    <div className={Styles.prodF1}>
                        <h2 className={Styles.titleMapaF1}>SERVICIOS</h2>
                        <nav>
                            <ul className={Styles.ulNavF1}>
                            <li className={Styles.liNavF1}>
                                    <a href="/servicios/internet-dedicado">Internet dedicado</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/servicios/ciberseguridad">Ciberseguridad</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/servicios/red-mpls">Red MPLS</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/servicios/cloud-backup">Cloud Backup</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/servicios/cloud-server">Cloud server</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/servicios/colocation">Colocation</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/servicios/comunicaciones-unificadas">Comunicaciones unificadas</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/servicios/enlace-datos">Enlace de datos</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/servicios/outsourcing">Outsourcing TIC</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/servicios/servidor-dedicado">Servidor dedicado</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/servicios/security-cloud">Security Cloud</a>
                                </li>
                                <li className={Styles.liNavF1}>
                                    <a href="/servicios/correo-corporativo">Correo corporativo</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className={Styles.susF1}>
                    {enviado ? ( <p className={Styles.aviso}>🎉¡Bienvenido a <br/> Stratecsa!🎊</p>) : (
                        <form onSubmit={handleSubmit}>
                            <h2 className={Styles.titleSusF1}>SUSCRÍBETE AHORA</h2>
                            <p className={Styles.parrafoSusF1}>Ofertas exclusivas solo para nuestros suscriptores</p>
                            <div className={Styles.divCorreo}>
                                <input className={Styles.inputF1} type="text" placeholder="Escriba su correo " name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <button className={Styles.btnCorreo} type='submit'>
                                    <a>
                                        <img className={Styles.avionF1} src="/new/avion.png"/>
                                    </a>
                                </button>
                            </div>
                        </form>
                    )}
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
                                    <a href="/terminos">Términos y condiciones</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/politicas">Políticas de protección de datos</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="https://www.stratecsa.cloud">Soporte</a>
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
                                    <a href="/servicios/internet-dedicado">Internet dedicado</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/servicios/ciberseguridad">Ciberseguridad</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/servicios/red-mpls">Red MPLS</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/servicios/cloud-backup">Cloud Backup</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/servicios/cloud-server">Cloud server</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/servicios/colocation">Colocation</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/servicios/comunicaciones-unificadas">Comunicaciones unificadas</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/servicios/enlace-datos">Enlace de datos</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/servicios/outsourcing">Outsourcing TIC</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/servicios/servidor-dedicado">Servidor dedicado</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/servicios/security-cloud">Security Cloud</a>
                                </li>
                                <li className={Styles.liNavF1M}>
                                    <a href="/servicios/correo-corporativo">Correo corporativo</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className={Styles.susF1M}>
                    {enviado ? ( <p className={Styles.aviso}>🎉¡Bienvenido a <br/> Stratecsa!🎊</p>) : (
                        <form onSubmit={handleSubmit}>
                            <h2 className={Styles.titleSusF1M}>SUSCRÍBETE AHORA</h2>
                            <p className={Styles.parrafoSusF1M}>Ofertas exclusivas solo para nuestros suscriptores</p>
                            <div className={Styles.divCorreoM}>
                                <input className={Styles.inputF1M} type="text" placeholder="Escriba su correo " name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <button className={Styles.btnCorreoM} type='submit'>
                                    <a>
                                        <img className={Styles.avionF1M} src="/new/avion.png"/>
                                    </a>
                                </button>
                            </div>
                        </form>
                    )}
                    </div>

                    <div className={Styles.redesM}>
                        <div className={Styles.divRedesF1M}>
                            <a className={Styles.cRedesF1M} href="https://www.facebook.com/Stratecsa?locale=es_LA" target="_blank" rel="noopener noreferrer">
                                <img
                                    className={Styles.iconSocialF1M}
                                    src="/logos/straface.png"/>
                            </a>
                            <a className={Styles.cRedesF1M} href="https://www.instagram.com/stratecsa/" target="_blank" rel="noopener noreferrer">
                                <img
                                    className={Styles.iconSocialF1M}
                                    src="/logos/strains.png"/>
                            </a>
                            <a className={Styles.cRedesF1M} href="https://www.linkedin.com/company/stratecsa" target="_blank" rel="noopener noreferrer">
                                <img
                                    className={Styles.iconSocialF1M}
                                    src="/logos/stralink.png"/>
                            </a>
                            <a className={Styles.cRedesF1M} href="https://wa.link/7kydod" target="_blank" rel="noopener noreferrer">
                                <img 
                                    className={Styles.iconSocialF1M}
                                    src="/logos/strawhats.png"/>
                            </a>
                            <a className={Styles.cRedesF1M} href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
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