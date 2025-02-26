"use client";
import React from 'react';
import CaracteristicaItem from '../caracteristicaItem/CaracteristicaItem';
import './caracteristicaInternetDedicado.css';

const CaracteristicaInternetDedicado = () => {
  const caracteristicas = [
    {
      texto: `Disfruta de total flexibilidad en las opciones de facturación
              adaptadas a las necesidades de tu negocio para que nunca
              pierdas el control, contratación sin complicaciones para tu
              internet dedicado.`
    },
    {
      texto: `Recibe atención personalizada y rápida con nuestro servicio
              centralizado de atención al cliente, disponible para ayudarte con
              cualquier inconveniente, desde la implementación de tu internet
              dedicado hasta la gestión de fallas.`
    },
    {
      texto: `Activa y ajusta tu plan de internet dedicado al instante según las
              necesidades de tu empresa, ¡sin esperas y con total control en
              tus manos!`
    },
    {
      texto: `Haz tu marca aún más poderosa registrando un dominio propio
              para tu empresa. Tú controlas los servidores de nombres
              primarios y das un paso más hacia la independencia digital.`
    },
    {
      texto: `Elige el mejor plan de internet dedicado: te ofrecemos soluciones
              inalámbricas o fibra óptica, según lo que tu empresa necesite
              para operar de manera eficiente y sin interrupciones.`
    }
  ];

  return (
    <div className="contentCaracteristicasInternetDedicado">
      <div className="row">
        <div className="col-md-5 col-12 d-flex flex-column justify-content-center align-items-center text-center">
          <span className="titleCaracteristicasInternetDedicado">
            CONOCE LAS CARACTERÍSTICAS QUE LLEVARÁN TU EMPRESA A ESTAR SIEMPRE UN PASO ADELANTE
          </span>
        </div>

        <div className="col-md-7 col-12">
          <div className="row">
            {caracteristicas.map((caracteristica, index) => (
              <CaracteristicaItem
                key={index}
                imagen="/imagesInternetDedicado/circle-check.png"
                texto={caracteristica.texto}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaracteristicaInternetDedicado;

