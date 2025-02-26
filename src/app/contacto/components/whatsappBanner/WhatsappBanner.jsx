"use client";
import React from 'react';
import './WhatsappBanner.css';

const WhatsappBanner = () => {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send?phone=573168785920', '_blank');
  };

  return (
    <div className="whatsappBanner">
      <div className="container">
        <div className="bannerContent">
          <div className="bannerText">
            ¿Necesitas ayuda? Hablemos por WhatsApp
          </div>
          <button 
            onClick={handleWhatsAppClick}
            className="whatsappButton"
          >
            Escribir por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsappBanner; 