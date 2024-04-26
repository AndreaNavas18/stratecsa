import Styles from './politicas.module.css';

function Nosotros() {
    const containerSty = {
        backgroundImage: `url(/new/img2.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    const containerMV = {
        backgroundImage: `url(/new/img8.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%', 
        width: '100%',
    };

    const containerMVM = {
        backgroundImage: `url(/img/misionvision.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%', 
        width: '100%',
    };

    return(
        <>
            <div className={`${Styles.container} ${Styles.containerM}`} style={containerSty}>
                <h1 className={`${Styles.titleSR} ${Styles.titleSRM}`}>Politicas</h1>
            </div>

            <div className={`${Styles.container2} ${Styles.container2M}`}>
                <h1 className={`${Styles.titleNosotros} ${Styles.titleNosotrosM}`}>Stratecsa</h1>
                <p className={`${Styles.parrafosP} ${Styles.parrafosPM}`}>
                
                Somos un 
                <span className={Styles.spanPM}> equipo tecnológico </span> 
                dispuesto a mejorar la experiencia de sus 
                clientes a través de nuestro servicio para así generar conversiones.
                <br/>
                Somos una empresa de tecnología, proveedores de internet
                <span className={Styles.spanPM}> empresarial </span> 
                expertos 
                en el área de telecomunicaciones, diseñamos software a la medida.
                </p>
                &nbsp;
                {/* <ul className={Styles.ulP}>
                    <li className={Styles.liP}>
                        <img src="/img/cheque(1).png" className={Styles.imgP}/>
                        El valor agregado de Stratecsa es su rápido tiempo de respuesta.
                    </li>
                    <li className={Styles.liP}>
                        <img src="/img/cheque(1).png" className={Styles.imgP}/>
                        En conjunto con la capacitación e interacción constante con los 
                        requerimientos del mercado, nos permite ofrecer la óptima
                    </li>
                    <li className={Styles.liP}>
                        solución informática para su negocio dando solución a sus requerimientos 
                        en poco tiempo.
                    </li>
                    <li className={Styles.liP}>
                        <img src="/img/cheque(1).png" className={Styles.imgP}/>
                        Nuestro equipo humano está conformado por asesores multidisciplinarios y especialistas 
                        en cada tipo de 
                    </li>
                    <li className={Styles.liP}>
                        industria e ingenieros y desarrolladores de tecnología.
                    </li>
                </ul> */}


            </div>

            <div className={`${Styles.seccionNN} ${Styles.noneMovil}`}>
                <SeccionN/>
            </div>

            <div className={`${Styles.nonePC} ${Styles.seccionNNM}`}>
                <SeccionMovil/>
            </div>

            <div style={containerMV} className={Styles.noneMovil}>
                <div className={Styles.containMv}>
                    <div className={Styles.div1MV}>
                        <h1 className={Styles.titleMV}>MISIÓN</h1>
                        <p className={Styles.parrafosMV}>
                        Ofrecer a nuestros clientes la más amplia gama de servicios y 
                        soluciones tecnológicas, que les permitan optimizar sus procesos, 
                        cumplir sus objetivos y productividad. Para ello implementamos 
                        soluciones prácticas adaptadas a sus necesidades y desarrollamos 
                        nuevas soluciones creativas. Nuestra base parte del aprovechamiento 
                        de las nuevas redes, para aumentar la rentabilidad de  nuestros 
                        clientes.</p>
                    </div>
                    <div className={Styles.div2MV}>
                        <h1 className={Styles.titleMV}>VISIÓN</h1>
                        <p className={Styles.parrafosMV} >Queremos estar comprometidos con las 
                        necesidades de nuestros clientes de forma transparente y eficaz para 
                        convertirnos en su socio de confianza. En nuestra visión queremos ser 
                        una empresa de referencia, que camina con el cambio de la tecnología y 
                        la sociedad, Esta labor se debe desempeñar de forma ética y satisfactoria 
                        para nosotros, nuestros clientes y el resto de la sociedad.</p>
                    </div>
                </div>
            </div>

            <div style={containerMVM} className={Styles.nonePC}>
                <div className={Styles.containMvM}>
                    <div className={Styles.div1MVM}>
                        <h1 className={Styles.titleMVM}>MISIÓN</h1>
                        <p className={Styles.parrafosMVM}>
                        Ofrecer a nuestros clientes la más amplia gama de servicios y 
                        soluciones tecnológicas, que les permitan optimizar sus procesos, 
                        cumplir sus objetivos y productividad. Para ello implementamos 
                        soluciones prácticas adaptadas a sus necesidades y desarrollamos 
                        nuevas soluciones creativas. Nuestra base parte del aprovechamiento 
                        de las nuevas redes, para aumentar la rentabilidad de  nuestros 
                        clientes.</p>
                    </div>
                    <div className={Styles.div2MVM}>
                        <h1 className={Styles.titleMVM2}>VISIÓN</h1>
                        <p className={Styles.parrafosMVM2} >Queremos estar comprometidos con las 
                        necesidades de nuestros clientes de forma transparente y eficaz para 
                        convertirnos en su socio de confianza. En nuestra visión queremos ser 
                        una empresa de referencia, que camina con el cambio de la tecnología y 
                        la sociedad, Esta labor se debe desempeñar de forma ética y satisfactoria 
                        para nosotros, nuestros clientes y el resto de la sociedad.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nosotros;