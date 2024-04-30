import Styles from '../cobertura.module.css';
import Departamentos from './departamentos';
function Colombia() {

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
                <div className={`${Styles.textCol} `}>
                    <h1 className={`${Styles.titleP} ${Styles.noneM}`}>Conectate en Colombia</h1>
                    <p className={`${Styles.parrafosC} ${Styles.noneM}`}>Todos nuestros servicios a nivel nacional</p>
                    <ul className={Styles.ulP}>
                        <li className={Styles.liP}>
                            <span style={parrafColor}>Extensa Red: </span>
                            STRATECSA cuenta con  <span style={parrafColor}>amplia red de fibra </span>
                            que alcanza más de <span style={parrafColor}>900 municipios</span> en Colombia.
                        </li>
                        <li className={Styles.liP}>
                            <span style={parrafColor}>Calidad y Servicio: </span>
                            La red se distingue por su <span style={parrafColor}>alta calidad y excelente servicio</span>
                            , asegurando una conexión confiable.
                        </li>
                        <li className={Styles.liP}>
                            <span style={parrafColor}>Alcance: </span>
                            Capaz de llegar a <span style={parrafColor}>ciudades principales</span>
                            , asi como a <span style={parrafColor}>áreas urbanas, rurales y extrarurales</span>
                            , la red STRATECSA ofrece una cobertura integral a lo largo del país.
                        </li>
                    </ul>
                    <p className={`${Styles.parrafosP} ${Styles.parrafosPM}`}>Nuestra es de fibra óptica nos permite proporcionar servicios de telecomunicaciones robustos y eficientes
                    , conectando a una gran parte de la población colombiana.</p>
                    <div className={Styles.div22}>
                        <Departamentos />
                    </div>
                    <div>
                        <button>
                            <a href="/contacto" className={`${Styles.botonCT} ${Styles.botonCTM}`}>Solicite su asesoría con nuestros especialistas</a>
                        </button>
                    </div>
                </div>
                <div className={`${Styles.mapaCol} ${Styles.mapaColM}`}>
                    <img 
                        src="/new/colombia.png" 
                        alt="Colombia" 
                        className={`${Styles.imgCol} ${Styles.imgColM}`}
                    />
                </div>
                <div className={Styles.nonePc}>
                    <h1 className={`${Styles.titleP} ${Styles.titlePM}`}>Conectate en Colombia</h1>
                    <p className={`${Styles.parrafosC} ${Styles.parrafosCM}`}>Todos nuestros servicios a nivel nacional</p>
                </div>
            </div>
        </>
    );
}

export default Colombia;