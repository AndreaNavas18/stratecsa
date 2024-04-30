"use client";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React, { useState, useEffect } from 'react';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import Styles from '../app/home/home.module.css';

export default function GoogleMapComponent() {
  const containerStyle = {
      width: '100%',
      height: '300px', // Puedes ajustar la altura aquí
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