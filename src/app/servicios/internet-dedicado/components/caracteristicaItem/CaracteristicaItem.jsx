"use client";
import React from 'react';
import './caracteristicaItem.css';

const CaracteristicaItem = ({ imagen, texto }) => {
  return (
    <div className="col-12 contentListCaracteristica">
      <div className="row">
        <div className="col-2 col-md-1 d-flex justify-content-center align-items-center">
          <img 
            src={imagen} 
            alt="Icono de característica"
            className="imageCaracteristicasInternetDedicado" 
          />
        </div>
        <div className="col-10 col-md-11">
          <span className="textCaracteristicasInternetDedicado">
            {texto}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CaracteristicaItem; 