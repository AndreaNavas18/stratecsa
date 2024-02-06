import React from 'react';
import Styles from './productos.module.css';

const InternetDedicado = ({ nombre, contenido }) => {
    const parrafColor = {
        color: '#009cda', 
    }
  return (
    <div className={Styles.containerP}>
        <div className={Styles.seccion1}>
            <h1 className={Styles.titleP}>Internet Dedicado</h1>
            <p className={Styles.parrafosP}>
            Obtendrás un servicio de internet empresarial de alta velocidad (Carrier Class) 
            opera en configuración local o internacional y te permitirá optimizar las comunicaciones 
            con un estable y continuo acceso a internet, con una excelente calidad en velocidad de conexión, 
            costos y soporte técnico.
            </p>
            <p className={Styles.parrafosP}>
            <br/>
            Comunicaciones eficientes en Colombia y el resto del mundo. Internet Dedicado de Stratecsa 
            cuenta con las siguientes características:
            </p>
            &nbsp;
                <ul className={Styles.ulP}>
                    <li className={Styles.liP}>
                        <img src="/img/cheque(1).png" className={Styles.imgP}/>
                        Medio de conexión inalámbrico o soluciones de fibra óptica.
                    </li>
                    <li className={Styles.liP}>
                        <img src="/img/cheque(1).png" className={Styles.imgP}/>
                        Flexibilidad en las opciones de facturación.
                    </li>
                    <li className={Styles.liP}>
                        <img src="/img/cheque(1).png" className={Styles.imgP}/>
                        Servicio de atención al cliente centralizado para atender la 
                        administración de fallas, implementación del servicio y consultas 
                        en general.
                    </li>
                    <li className={Styles.liP}>
                        <img src="/img/cheque(1).png" className={Styles.imgP}/>
                        Dominio propio, puede registrar a nombre del cliente un dominio propio. 
                        Los servidores de nombres primarios asociados con el dominio serán 
                        responsabilidad
                    </li>
                    <li className={Styles.liP}>
                        del cliente.
                    </li>
                </ul>
            &nbsp;
                <p className={Styles.parrafosP}>
                    Internet Dedicado para toda Colombia, se requieren direcciones o 
                    coordenadas para viabilidad técnica.
                </p>
        </div>
        <div className={Styles.seccion2}>
            <div className={Styles.divImg}>
                <img src="/new/img11.jpg" className={Styles.img2P}/>
            </div>
            <div className={Styles.divCont}>
                <h1 className={Styles.title2P}>¿Cuales son los beneficios del Internet Dedicado?</h1>
                <p className={Styles.parrafosP2}><span style={parrafColor}>1) Mayor productividad.</span> Promoción, venta y atención a pedidos en línea con mejores tiempos de respuesta.</p>
                <p className={Styles.parrafosP2}><span style={parrafColor}>2) Seguridad.</span> Servicio seguro, tienes un canal dedicado solo para ti.</p>
                <p className={Styles.parrafosP2}><span style={parrafColor}>3) Menor inversión.</span> Transmite y vigila grandes volúmenes de información en línea, disminuye las inversiones de software.</p>
                <p className={Styles.parrafosP2}><span style={parrafColor}>4) Red dedicado veloz.</span> Servicio único para tu empresa, canal exclusivo de alto rendimiento, usuarios protegidos de interrupción alguna.</p>
                <p className={Styles.parrafosP2}><span style={parrafColor}>5) Ips múltiples.</span> Podrás generar tantas IPs como necesites y eliminarlas cuando lo desees.</p>
                <p className={Styles.parrafosP2}><span style={parrafColor}>6) Estabilidad.</span> Tendrás el ancho de banda que requieres, sin que ningún fallo de la red arruine tu trabajo o el de tu equipo.</p>
            </div>
        </div>
        <div className={Styles.botonID}>
            <button className={Styles.buttonP2}>Solicitar información</button>
        </div>
    </div>
  );
};

export default InternetDedicado;
