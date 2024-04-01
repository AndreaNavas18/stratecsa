import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';


function GoogleMapComponent() {
    const containerStyle = {
      width: '1100px',
      height: '400px',
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
