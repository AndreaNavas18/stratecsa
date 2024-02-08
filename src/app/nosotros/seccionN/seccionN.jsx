import Styles from './seccionN.module.css';

export default function SeccionN() {
    return(
        <>
            <section className={Styles.seccion3}>
                <div className={Styles.div2S3}>
                    <div className={Styles.card1S3}>
                        <img src="/new/img27.png" className={Styles.imgP}/>
                        <p className={Styles.pG}>El valor agregado de Stratecsa es su rápido tiempo de respuesta, contamos 
                        con múltiples servicios para darte solución inmediata.
                        </p>
                    </div>
                    <div className={Styles.card2S3}>
                        <img src="/new/img28.png" className={Styles.imgP}/>
                        <p className={Styles.pG}>La capacitación e interacción constante con los 
                            requerimientos del mercado, nos permite ofrecer una óptima solución informática 
                            para su negocio.
                        </p>
                    </div>
                    <div className={Styles.card3S3}>
                        <img src="/new/img29.png" className={Styles.imgP}/>
                        <p className={Styles.pG}>Nuestro equipo humano está conformado por asesores multidisciplinarios y especialistas en cada tipo de
                            industria e ingenieros y desarrolladores de tecnología.
                        </p>
                    </div>
                </div>

            </section>
        </>
    );
}