import Styles from '../home.module.css';

export default function Seccion3() {
    return(
        <>
            <section className={Styles.seccion3}>
                <div className={Styles.div1S3}>
                    <h2 className={Styles.titleS3}>¿Con que contamos?</h2>
                </div>
                <div className={Styles.div2S3}>
                    <div className={Styles.card1S3}>
                        <h2 className={Styles.h2G}>Amplia cobertura</h2>
                        <p className={Styles.pG}>Tenemos acceso a una red de fibra optica que llega a más de 805 
                        municipios de Colombia, la cual se basa en calidad y servicio.
                        </p>
                        <button className={Styles.btnG1}>Explorar</button>
                    </div>
                    <div className={Styles.card2S3}>
                        <h2 className={Styles.h2G}>Servicio personalizado</h2>
                        <p className={Styles.pG}>En Stratecsa los clientes son la prioridad, asi que contamos con
                        múltiples servicios que te ayudaran a solucionar tus problemas IT y a 
                        cumplir tus metas.
                        </p>
                        <button className={Styles.btnG}>Explorar</button>
                    </div>
                    <div className={Styles.card3S3}>
                        <h2 className={Styles.h2G}>Servicio de soporte </h2>
                        <p className={Styles.pG}>Tenemos habilitados los canales mas eficientes para proporcionar de manera
                        inmediata apoyo técnico, supervisión y mantenimiento de los servicios. 
                        </p>
                        <button className={Styles.btnG}>Explorar</button>
                    </div>
                    <div className={Styles.card4S3}>
                        <h2 className={Styles.h2G}>Pago en línea</h2>
                        <p className={Styles.pG}>Hacer sus pagos desde la comodidad de su cada nunca fue tan
                        fácil, con nuestro portal podra realizar sus pagos de forma rápida
                        y segura.
                        </p>
                        <button className={Styles.btnG1}>Explorar</button>
                    </div>
                </div>
                {/* <div className={Styles.div2S3}>
                    <button className={Styles.buttonS3}>Boton</button>
                </div> */}

            </section>
        </>
    );
}