import Servicios from '../../servicios/page';
import Styles from '../productos/productos.module.css';

function Outsourcing() {
    const parrafColor = {
        color: '#009cda', 
    }
    const carac = {
        fontWeight: '600',
      }
    return (
        <div>
        <Servicios />
            <div>
                <div className={Styles.containerP}>
                    <div className={Styles.seccion1}>
                        <h1 className={Styles.titleP}>Mesa de Ayuda</h1>
                        <p className={Styles.parrafosP}>
                        Outsourcing IT mesa de ayuda ofrece servicios acerca de soporte técnico 
                        en la detección de bugs o fallas en hardware. Brindan soporte técnico a los 
                        usuarios del área informática de una empresa para incrementar la productividad y 
                        la satisfacción de los usuarios internos o externos.
                        </p>
                        &nbsp;
                        <p className={Styles.parrafosP}>
                            <span style={carac}>Características</span>
                        </p>
                        &nbsp;
                            <ul className={Styles.ulP}>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    Atención inmediata a los incidentes o problemas con la continuidad operativa 
                                    y reducción en que el sistema no opera.
                                </li>
                                <li className={Styles.liP}>
                                    <img src="/img/cheque(1).png" className={Styles.imgP}/>
                                    Seguimiento y progreso a cada solicitud de servicio. 
                                </li>
                                
                            </ul>
                    </div>
                    <div className={Styles.seccion2}>
                        <div className={Styles.divImg}>
                            <img src="/new/img36.jpeg" className={Styles.img2P}/>
                        </div>
                        <div className={Styles.divCont}>
                            <h1 className={Styles.title2P}>¿Cuales son los beneficios del Outsourcing IT?</h1>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>1) Reduccion de costos. </span> 
                            Reduce los costos por los servicios de TI.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>2) Facilidad de gestión. </span> 
                            Optimiza sus costos y el retorno de su inversión.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>3) Seguimiento profesional de incidentes. </span> 
                            En Stratecsa contamos con herramientas para el seguimiento profesional de incidentes.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>4) Soporte a tiempo. </span> 
                            Nuestro equipo estará disponible para ti siempre que lo necesites. </p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>5) Asistencia multicanal inmediata. </span> 
                            Tendrás varios medios de contacto a disposición del usuario hace que sea más fácil para él pedir 
                            soporte ya que cada cliente tiene un medio de comunicación preferido.</p>
                            <p className={Styles.parrafosP2}><span style={parrafColor}>6) Mayores ganancias. </span> 
                            Cuando una empresa tiene una mesa de ayuda inadecuada, ésto genera la insatisfacción del cliente.</p>
                        </div>
                    </div>
                    <div className={Styles.botonID}>
                        <button className={Styles.buttonP2}>Solicitar información</button>
                    </div>
                </div>
            </div>

            &nbsp;
        </div>
        );
}

export default Outsourcing;