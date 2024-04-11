"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Styles from './servicios.module.css';
import LoadCorto from '../components/load/loadcorto';

const servicios = [
    { icono: "/logos/ultimamilla.png", nombre: "Ultima Milla y Datos", id: "ultima-milla" },
    { icono: "/logos/internet_ded.png", nombre: "Internet Dedicado", id: "internet-dedicado" },
    {icono: "/logos/ciberseguridad1.png", nombre: "Ciberseguridad", id: "ciberseguridad"},
    {icono: "/logos/enlace.png", nombre: "Enlace de Datos", id: "enlace-datos"},
    {icono: "/logos/comun_uni.png", nombre: "Comunicaciones Unificadas", id: "comunicaciones-unificadas"},
    {icono: "/logos/sec_cloud.png", nombre: "Security Cloud", id: "security-cloud"},
    {icono: "/logos/colocation.png", nombre: "Colocation", id: "colocation"},
    {icono: "/logos/servidor.png", nombre: "Servidor Dedicado", id: "servidor-dedicado"},
    {icono: "/logos/cloud_server.png", nombre: "Cloud Server", id: "cloud-server"},
    {icono: "/logos/cloud_backup.png", nombre: "Cloud Backup", id: "cloud-backup"},
    {icono: "/logos/correo.png", nombre: "Correo Corporativo", id: "correo-corporativo"},
    {icono: "/logos/outsourcing.png", nombre: "Outsourcing TIC", id: "outsourcing"},
];

function Servicios() {
    const router = useRouter();
    const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

    useEffect(() => {
      // Al montar el componente, establece el servicio seleccionado según la ruta actual
      if(router && router.asPath){
        console.log("Ruta actual:", router.asPath);
        const rutaActual = router.asPath;
        const servicioActual = servicios.find(servicio => servicio.ruta === rutaActual);
        if (servicioActual) {
            setServicioSeleccionado(servicioActual.id);
        }
      }
  }, []);

  const handleSeleccionarServicio = (id) => {
      setServicioSeleccionado(id);
      const servicio = servicios.find(servicio => servicio.id === id);
      if (servicio) {
          router.push(servicio.ruta); // Navegar a la página del servicio individual
      }
  };


    // const handleSeleccionarServicio = (id) => {
    //     setServicioSeleccionado(id);
    //     router.push(`/servicios/${id}`); // Navegar a la página del servicio individual
    // };

    return (
        <>
            <LoadCorto />
            <div className={`${Styles.container}`}>
                <h1 className={Styles.titleSR}>Servicios</h1>
            </div>
            <div className={Styles.slideBtn}>
                <div className={Styles.botonesS4}>
                    {servicios.map((servicio, index) => (
                        <button
                            key={index}
                            className={`${Styles.buttonS4} ${servicioSeleccionado === servicio.id ? Styles.servicioSeleccionado : ''}`}
                            onClick={() => handleSeleccionarServicio(servicio.id)}
                        >
                            <img className={Styles.iconoServicioS4} src={servicio.icono} />
                            {servicio.nombre}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Servicios;




// "use client";
// import React, { useState} from 'react';
// import Styles from './servicios.module.css';
// import LoadCorto from '../components/load/loadcorto';

// const servicios = [
//     {icono: "/logos/ultimamilla.png", nombre: "Ultima Milla y Datos", id: "ultimaMilla"},
//     {icono: "/logos/internet_ded.png", nombre: "Internet Dedicado", id: "internetDedicado"},
//     {icono: "/logos/ciberseguridad1.png", nombre: "Ciberseguridad", id: "ciberSeguridad"},
//     {icono: "/logos/enlace.png", nombre: "Enlace de Datos", id: "enlacededatos"},
//     {icono: "/logos/comun_uni.png", nombre: "Comunicaciones Unificadas", id: "comunicacionesUnificadas"},
//     {icono: "/logos/sec_cloud.png", nombre: "Security Cloud", id: "securityCloud"},
//     {icono: "/logos/colocation.png", nombre: "Colocation", id: "colocation"},
//     {icono: "/logos/servidor.png", nombre: "Servidor Dedicado", id: "servidorDedicado"},
//     {icono: "/logos/cloud_server.png", nombre: "Cloud Server", id: "cloudServer"},
//     {icono: "/logos/cloud_backup.png", nombre: "Cloud Backup", id: "cloudBackup"},
//     {icono: "/logos/correo.png", nombre: "Correo Corporativo", id: "correoCorporativo"},
//     {icono: "/logos/outsourcing.png", nombre: "Outsourcing TIC", id: "outsourcingTIC"},
// ];

//   const itemsPorPagina = 4;

//   const idToRoute = {
//     ultimaMilla: "/servicios/ultima-milla",
//     internetDedicado: "/servicios/internet-dedicado",
//     ciberSeguridad: "/servicios/ciberseguridad",
//     enlacededatos: "/servicios/enlace-datos",
//     comunicacionesUnificadas: "/servicios/comunicaciones-unificadas",
//     securityCloud: "/servicios/security-cloud",
//     colocation: "/servicios/colocation",
//     servidorDedicado: "/servicios/servidor-dedicado",
//     cloudServer: "/servicios/cloud-server",
//     cloudBackup: "/servicios/cloud-backup",
//     correoCorporativo: "/servicios/correo-corporativo",
//     outsourcingTIC: "/servicios/outsourcing",
//   };

// function Servicios() {
//     const containerSty = {
//         backgroundImage: `url(/img/pruebafondo1.png)`,
//       };

//       const [paginaActual, setPaginaActual] = useState(0);


//       const mostrarBotones = servicios.slice(
//           paginaActual * itemsPorPagina,
//           (paginaActual + 1) * itemsPorPagina
//       );
  
//       const siguientePagina = () => {
//           setPaginaActual((prevPagina) => (prevPagina + 1) % Math.ceil(servicios.length / itemsPorPagina));
//       };
  
//       const anteriorPagina = () => {
//           setPaginaActual((prevPagina) => {
//             const nuevaPagina = (prevPagina - 1 + Math.ceil(servicios.length / itemsPorPagina)) % Math.ceil(servicios.length / itemsPorPagina);
//             return nuevaPagina;
//           });
//         };
  
//         const handleClick = (id) => {
//           const ruta = idToRoute[id];
//           if (ruta) {
//             window.location.href = ruta;
//           } else {
//             console.error(`No se encontró una ruta para el ID ${id}`);
//           }
//         };
      
//       const mostrarBoton = (servicio, index) => (
//           <button 
//               key={index} 
//               className={Styles.buttonS4}
//               onClick={() => handleClick(servicio.id)}
//               // onClick={() => seleccionarServicio(servicio.id)}
//           >
//             <img
//               className={Styles.iconoServicioS4}
//               src={servicio.icono} 
//               />
//               {servicio.nombre}
//           </button>
//         );


//     return (
        
//         <>
//             <LoadCorto />
//             <div className={`${Styles.container}`} style={containerSty}>
//                 <h1 className={Styles.titleSR}>Servicios</h1>
//             </div>
//             <div className={Styles.slideBtn}>
//                     <div className={Styles.controlesSlider}>
//                         <button
//                         // className={Styles.buttonS4}
//                         onClick={anteriorPagina}
//                         >
//                         <img
//                         className={Styles.backS4} 
//                         src="/img/flechaAtras.png"/>
//                         </button>
//                     </div>

//                 {/* slide  */}
//                  <div className={Styles.botonesS4}>
//                         {mostrarBotones.map((servicio, index) => 
//                         mostrarBoton(servicio, index)
//                         )}
//                     </div>
//                     <div className={Styles.controlesSlider}>
//                         <button 
//                         // className={Styles.buttonS4} 
//                         onClick={siguientePagina}>
//                         <img
//                         className={Styles.sigS4} 
//                         src="/img/flechaSig.png"/>
//                         </button>
//                     </div>
//             </div>
//           &nbsp;
//         </>
//     );
// }

// export default Servicios;