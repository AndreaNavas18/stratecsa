import Styles from '../cobertura.module.css';
import Estados from './estados';
function Brasil() {

    const parrafColor = {
        color: '#009cda', 
    }
    const containerSty = {
        backgroundImage: `url(/img/cobertura.jpg)`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
      };

    return(
        <>
          <div className={`${Styles.container}`} style={containerSty}>
                <h1 className={Styles.titleSR}>Cobertura</h1>
            </div>
            <div className={Styles.noneM}>
                &nbsp;
            </div>
            <div className={`${Styles.contenedorCol} ${Styles.contenedorColM}`}>
                <div className={`${Styles.textBra} ${Styles.textM}`}>
                    <h1 className={`${Styles.titleP} ${Styles.noneM}`}>Conectate en Brasil</h1>
                    <p className={`${Styles.parrafosC} ${Styles.noneM}`}>¡Todos os nossos serviços em todo o país!</p>
                    <ul className={Styles.ulP}>
                        <li className={Styles.liP}>
                            <span style={parrafColor}>STRATECSA </span>
                            ofrece una cobertura integral en Brasil, un mercado clave para Proveedores de 
                            Servicios de Internet <span style={parrafColor}>(ISPs) </span> 
                            con más de 10,000 proveedores licenciados.
                        </li>
                        <li className={Styles.liP}>
                            <span style={parrafColor}>Conectividad Completa: </span>
                            La empresa asegura conectividad en todas las 26 estados y el Distrito Federal, 
                            incluso en áreas remotas como la Amazonía o centros urbanos como São Paulo.
                        </li>
                        <li className={Styles.liP}>
                            <span style={parrafColor}>Asociaciones de Calidad: </span>
                            Stratecsa colabora con proveedores de última milla confiables para ofrecer servicios excepcionales 
                            a tarifas competitivas, manteniendo altos estándares de servicio.
                        </li>
                        <li className={Styles.liP}>
                            <span style={parrafColor}>Automatización y Servicios: </span>
                            La plataforma de Stratecsa permite la automatización en la búsqueda de servicios 
                            de conectividad, incluyendo Acceso Dedicado a Internet, Banda Ancha Fija y servicios móviles como 
                            <span style={parrafColor}> 4G/LTE y 5G.</span>
                        </li>
                    </ul>
                    <p className={`${Styles.parrafosP} ${Styles.parrafosPM}`}>Stratecsa se esfuerza por simplificar la gestión de la 
                    infraestructura de conectividad en Brasil, permitiendo a los clientes concentrarse plenamente en sus negocios.</p>
                    <div>
                        <Estados />
                    </div>
                    <div>
                        <button>
                            <a href="/contacto" className={`${Styles.botonCT} ${Styles.botonCTM}`}>Solicita tu asesoría con nuestros especialistas</a>
                        </button>
                    </div>
                </div>
                <div className={`${Styles.mapaBra} ${Styles.mapaBraM}`}>
                    <img 
                        src="/new/brazil.png" 
                        alt="Brasil" 
                        className={`${Styles.imgBra} ${Styles.imgBraM}`}
                    />
                </div>
                <div className={Styles.nonePc}>
                    <h1 className={`${Styles.titleP} ${Styles.titlePM}`}>Conectate en Brasil</h1>
                    <p className={`${Styles.parrafosC} ${Styles.parrafosCM}`}>¡Todos os nossos serviços em todo o país!</p>
                </div>
            </div>
        </>
    );
}

export default Brasil;