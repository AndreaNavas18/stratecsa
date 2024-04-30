"use client";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React, { useState, useEffect } from 'react';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import Styles from '../app/home/home.module.css';

export default function GoogleMapComponent() {
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
      <MapContainer center={center} zoom={15} style={containerStyle} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Aquí puedes agregar marcadores, polígonos, etc. si lo deseas */}
        <Marker position={center}>
            <Popup>
            <div className={Styles.pop}>
                <h2>Stratecsa</h2>
                <p>Av 4N # 26N - 18</p>
            </div>
            </Popup>
        </Marker>
      </MapContainer>
    );
  }



// import React, { useState, useEffect } from 'react';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';

// function GoogleMapComponent() {
//     const [mapHeight, setMapHeight] = useState('300px');

//     useEffect(() => {
//         const handleResize = () => {
//             const windowHeight = window.innerHeight;
//             const mapHeight = windowHeight * 0.6; // Ajusta el factor según tus necesidades
//             setMapHeight(`${mapHeight}px`);
//         };

//         handleResize(); // Ejecutar una vez al cargar
//         window.addEventListener('resize', handleResize); // Ejecutar cuando la ventana se redimensiona
//         return () => window.removeEventListener('resize', handleResize); // Limpiar el listener
//     }, []);

//     const containerStyle = {
//       width: '100%',
//       height: mapHeight, // Utilizar la altura dinámica calculada
//     };
    
//     const center = {
//       lat: 3.4586435,
//       lng: -76.5365771
//     };

//     return (
//         <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
//             <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={center}
//                 zoom={15}
//             >
//                 {/* Marcadores, polígonos, etc. */}
//             </GoogleMap>
//         </LoadScript>
//     );
// };

// export default GoogleMapComponent;
