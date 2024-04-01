import Styles from './cobertura.module.css';

function Cobertura() {
    const cobertContainer = {
        // backgroundImage: `url(/new/img3.jpg)`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
    };

    return(
        <div>
            <div className={Styles.containerCB}>
                <div className={`${Styles.cobertContainer1}`} style={cobertContainer}>
                    <h1 className={Styles.title1}>Nuestra Cobertura</h1>
                </div>

                <div className={Styles.divCards}>

                    <a className={Styles.card1} href='/cobertura/colombia'>
                        <img src="/new/colom.png" className={Styles.imgPC}/>
                       <h1 className={Styles.titleCB}>Colombia</h1>
                    </a>
                    <a className={Styles.card2} href='/cobertura/brasil'>
                        <img src="/new/brazil.png" className={Styles.imgP}/>
                        <h1 className={Styles.titleCB}>Brasil</h1>
                    </a>
                    <a className={Styles.card3} href='/cobertura/latinoamerica' >
                        <img src="/new/latin.png" className={Styles.imgP}/>
                        <h1 className={Styles.titleCB}>Latinoamérica</h1>
                    </a>
                </div>

                <div className={Styles.divBuscador}>
                    <button className={Styles.button1}>
                        <img src="/new/ubicacion.png" className={Styles.icono}/>
                    </button>
                    <input className={Styles.input1} placeholder='  Escribe tu dirección'></input>
                    <button className={Styles.button2}>
                        <img src="/new/filtro.png" className={Styles.icono}/>
                    </button>
                    <button className={Styles.button3}>
                        Buscar
                    </button>
                    
                </div>

            </div>

        </div>

    );
    

}

export default Cobertura;