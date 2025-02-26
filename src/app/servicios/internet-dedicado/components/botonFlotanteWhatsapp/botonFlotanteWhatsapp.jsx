"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './botonFlotanteWhatsapp.css';

const BotonFlotanteWhatsapp = () => {
  return (
    <div className="whatsappFloat">
        <a href="https://wa.me/1234567890" target="_blank" className="whatsappButton">
            <div className="whatsappContent">
                <img src="/imagesInternetDedicado/whatsapp_no_bg.png" alt="WhatsApp" />
                <span>WhatsApp</span>
            </div>
        </a>
    </div>
);};

export default BotonFlotanteWhatsapp;

