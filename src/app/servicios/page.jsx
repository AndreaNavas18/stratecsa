import Styles from './servicios.module.css';

function Servicios() {
    const containerSty = {
        backgroundImage: `url(/img/pruebafondo1.png)`,
      };

    return (
        
        <>
           
            <div className={`${Styles.container}`} style={containerSty}>
                <h1 className={Styles.titleSR}>Servicios</h1>
            </div>
          &nbsp;
        </>
    );
}

export default Servicios;