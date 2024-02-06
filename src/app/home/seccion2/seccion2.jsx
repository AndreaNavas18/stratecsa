import Styles from '../home.module.css';
export default function Seccion2() {
    return(
        <>
            <section className={Styles.section2}>
                <div className={Styles.divInfoS2}>
                    <h2 className={Styles.titleS2}>
                        Somos una empresa de tecnología, proveedora de internet empresarial,
                        expertos en el área de telecomunicaciones.
                    </h2>
                    <p className={Styles.descripS2}>
                        Nuestro equipo tecnologico está dispuesto a mejorar la experiencia
                        de sus clientes a tráves de soluciones innovadoras y de alta calidad.
                    </p>
                </div>
                <div className={Styles.divLogoS2}>
                    <div className={Styles.divIconS2}>
                        <a href="/home">
                            <img
                                className={Styles.iconStraS2}
                                src="/img/logofinal.png"/>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}