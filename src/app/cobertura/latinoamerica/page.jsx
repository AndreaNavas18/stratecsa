import Styles from '../cobertura.module.css';
import Paises from './paises';
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
          &nbsp;
            <div className={`${Styles.contenedorCol} ${Styles.contenedorColM}`}>
                <div className={`${Styles.textLat} ${Styles.textLatM}`}>
                    <h1 className={`${Styles.titleP} ${Styles.titlePM}`}>Conectate en América Latina</h1>
                    <p className={`${Styles.parrafosC} ${Styles.parrafosCM}`}>¡Todos nuestros servicios en Latinoamérica!</p>
                    <ul className={Styles.ulP}>
                        <li className={Styles.liP}>
                            <span style={parrafColor}>STRATECSA </span>
                            ofrece soluciones de conectividad en los 
                            <span style={parrafColor}> 31 países </span> 
                            de América Latina y el Caribe, 
                            adaptándose a las características únicas de cada país. 
                        </li>
                        <li className={Styles.liP}>
                            <span style={parrafColor}>Red de Socios Locales: </span>
                            La red de Stratecsa incluye más de 50 proveedores de servicios de internet seleccionados para 
                            garantizar servicios ininterrumpidos y redundancia de conectividad.
                        </li>
                        <li className={Styles.liP}>
                            <span style={parrafColor}>Servicios Simplificados: </span>
                            Stratecsa proporciona un único proceso para todos los servicios de conectividad 
                            en la región, con un solo canal de soporte y facturación clara en la moneda preferida del cliente.
                        </li>
                        <li className={Styles.liP}>
                            <span style={parrafColor}>Cobertura y Tecnologías: </span>
                            La empresa ofrece una amplia gama de servicios y tecnologías de acceso, como Fibra, 
                            Radio, Cobre, 4G/LTE y 5G, con una infraestructura de fibra extensa que cubre toda la región.
                        </li>
                    </ul>
                    <p className={`${Styles.parrafosP} ${Styles.parrafosPM}`}>Stratecsa se esfuerza por simplificar la gestión de la 
                    infraestructura de conectividad en todo América Latina, permitiendo a los clientes concentrarse plenamente en sus negocios.</p>
                    <div>
                        <Paises />
                    </div>
                    <div>
                        <button>
                            <a href="/contacto" className={`${Styles.botonCT} ${Styles.botonCTM}`}>Solicita tu asesoría con nuestros especialistas</a>
                        </button>
                    </div>
                </div>
                <div className={`${Styles.mapaBra} ${Styles.mapaBraM}`}>
                    <img 
                        src="/img/latam.png" 
                        alt="Latam" 
                        className={`${Styles.imgBra} ${Styles.imgBraM}`}
                    />
                </div>
            </div>
        </>
    );
}

export default Brasil;