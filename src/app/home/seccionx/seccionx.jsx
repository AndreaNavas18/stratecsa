import Styles from './seccionx.module.css';
import SeccionXSlider from './seccionXSlider/seccionXSlider';

const sxbg = {
    backgroundImage: `url(/new/img5.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%', 
    width: '100%', 
  };

const sxbgmovil = {
    backgroundImage: `url(/new/img5(1).jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'left',
    height: '100%',
    width: '100%',
};


function Seccionx() {
  return (
    <>
        <section className={`${Styles.sectionx} ${Styles.noneMovil}`} style={sxbg}>
            <div className={Styles.containerX}>
                    <div className={Styles.div1X}>
                        <div className={Styles.cobert}>
                        <img className={Styles.imgX} 
                            src="/new/img23.png"/>

                            <div className={Styles.textoX}>
                                <h2 className={Styles.titleX}>Cobertura</h2>
                                <p className={Styles.parrX}>Contamos con la red de Fibra Óptica más amplia a nivel
                                nacional.</p>
                            </div>
                        </div>
                        <div className={Styles.pago}>
                        <img className={Styles.imgX} 
                            src="/new/img24.png"/>

                            <div className={Styles.textoX}>
                                <h2 className={Styles.titleX}>Servicio personalizado</h2>
                                <p className={Styles.parrX}>En Stratecsa los clientes son la prioridad, asi que contamos con 
                                múltiples servicios que te ayudarán a solucionar tus problemas IT y
                                a cumplir tus metas.</p>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.div2X}>
                        <div className={Styles.atenc}>
                        <img className={Styles.imgX} 
                            src="/new/img25.png"/>

                            <div className={Styles.textoX}>
                                <h2 className={Styles.titleX}>Atención al cliente</h2>
                                <p className={Styles.parrX}>Nuestros clientes son nuestra mayor prioridad.</p>
                            </div>
                        </div>
                        <div className={Styles.sop}>
                        <img className={Styles.imgX} 
                            src="/new/img26.png"/>

                            <div className={Styles.textoX}>
                                <h2 className={Styles.titleX}>Soporte</h2>
                                <p className={Styles.parrX}>Estamos disponibles siempre para ti, cuando lo 
                                necesites.</p>
                            </div>
                        </div>
                    </div>
            </div>

        </section>
        <section className={Styles.nonePC} style={sxbgmovil}>
            <SeccionXSlider/>
        </section>
    </>
  );
}

export default Seccionx;