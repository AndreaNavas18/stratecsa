import Styles from '../home.module.css';
export default function Seccion2() {
    return(
        <>
            <section className={`${Styles.section2} ${Styles.section2M}`}>
                <div className={`${Styles.divInfoS2} ${Styles.divInfoS2M}`}>
                    <h2 className={`${Styles.titleS2} ${Styles.titleS2M}`}>
                        Somos una empresa de tecnología, proveedora de internet empresarial,
                        expertos en el área de telecomunicaciones.
                    </h2>
                    <p className={`${Styles.descripS2} ${Styles.descripS2M}`}>
                        Nuestro equipo tecnologico está dispuesto a mejorar la experiencia
                        de sus clientes a tráves de soluciones innovadoras y de alta calidad.
                    </p>
                </div>
                <div className={`${Styles.divLogoS2} ${Styles.divLogoS2M}`}>
                    <div className={`${Styles.divIconS2} ${Styles.divIconS2M}`}>
                        <a href="/">
                            <img
                                className={`${Styles.iconStraS2} ${Styles.iconStraS2M}`}
                                src="/new/banner4.png"/>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}