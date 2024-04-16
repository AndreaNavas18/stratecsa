import Styles from './servicios.module.css';

function Servicios() {
    const containerSty = {
        backgroundImage: `url(/img/service.png)`,
        backgroundPosition: 'center',
        width: 'auto',
        height: 'auto',
      };

    return (
        
        <>
            <div className={`${Styles.container} ${Styles.containerM}`} style={containerSty}>
                <h1 className={`${Styles.titleSR} ${Styles.titleSRM}`}>Servicios</h1>
            </div>
          &nbsp;
        </>
    );
}

export default Servicios;