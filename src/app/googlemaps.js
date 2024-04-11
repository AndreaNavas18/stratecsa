"use client";
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function GoogleMapComponent() {
    const [mapHeight, setMapHeight] = useState('300px');

    useEffect(() => {
        const handleResize = () => {
            const windowHeight = window.innerHeight;
            const mapHeight = windowHeight * 0.6; // Ajusta el factor según tus necesidades
            setMapHeight(`${mapHeight}px`);
        };

        handleResize(); // Ejecutar una vez al cargar
        window.addEventListener('resize', handleResize); // Ejecutar cuando la ventana se redimensiona
        return () => window.removeEventListener('resize', handleResize); // Limpiar el listener
    }, []);

    const containerStyle = {
      width: '100%',
      height: mapHeight, // Utilizar la altura dinámica calculada
    };
    
    const center = {
      lat: 3.4586435,
      lng: -76.5365771
    };

    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
            >
                {/* Marcadores, polígonos, etc. */}
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapComponent;


// import React from 'react';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';


// function GoogleMapComponent() {
//     const containerStyle = {
//       width: '1100px',
//       height: '400px',
//     };
    
//     const center = {
//       lat: 3.4586435,
//       lng: -76.5365771
//     };
//     return (
//     <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={15}
//       >
//         {/* Marcadores, polígonos, etc. */}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default GoogleMapComponent;
