// "use client";
// import Styles from '../../home/home.module.css';
// import React, { useEffect, useState } from 'react';

// function LoadCorto() {

//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         // Ocultar el GIF de carga después de 4 segundos
//         setTimeout(() => {
//             setIsLoading(false);
//         }, 1000);
//     }, []);

//     return (
//        <>
//             {isLoading && (
//                 <div className={`${Styles.load} ${Styles.active}`}>
//                     <img src="/img/pc2segun.gif" className={Styles.gifload} alt='Cargando...' />
//                 </div>
//             )}
//         </>
//     );
// }

// export default LoadCorto;