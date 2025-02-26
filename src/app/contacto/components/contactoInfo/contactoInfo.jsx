"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './contactoInfo.css';

const ContactoInfo = () => {
  return (
    <section className="contactInfoSection">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-7">
                    <div className="contactText">
                        En Stratecsa, somos una empresa de tecnología con sede en Cali y cobertura en toda Colombia, especialistas en <strong>internet dedicado (internet empresarial)</strong>. Como <strong>proveedores</strong> líderes en telecomunicaciones, garantizamos <strong>conexiones seguras y estables</strong> a través de nuestro <strong>canal dedicado</strong> y la red de <strong>fibra óptica</strong> más amplia del país.
                    </div>
                    <div className="contactText">
                        Nuestros servicios se prestan a nivel nacional, pero en caso de que quieras comunicarte para una solicitud, nuestra sede principal se encuentra en la ciudad de Cali - Colombia.
                    </div>

                    <div className="contactDetails">
                        <div className="contactItem">
                            <img src="/imagesInternetDedicado/iconLocation.png" alt="Ubicación" className="contactIcon" />
                            <div className="contactInfo">
                                <strong>UBICACIÓN</strong><br />
                                Avenida 4 Norte # 26N - 18, Cali - Valle del Cauca
                            </div>
                        </div>

                        <div className="contactItem">
                            <img src="/imagesInternetDedicado/iconPhone.png" alt="Teléfono" className="contactIcon" />
                            <div className="contactInfo">
                                <strong>LÍNEAS TELEFÓNICAS</strong><br />
                                (+57) 314 865 4018
                            </div>
                        </div>

                        <div className="contactItem">
                            <img src="/imagesInternetDedicado/iconEmail.png" alt="Email" className="contactIcon" />
                            <div className="contactInfo">
                                <strong>EMAIL</strong><br />
                                info@stratecsa.com
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-5 contactImage-container">
                    <img src="/imagesInternetDedicado/equipo-planta-externa-montaje.png" 
                         alt="Equipo Stratecsa" 
                         className="contactPeopleImage" />
                </div>
            </div>
        </div>
    </section>
);};

export default ContactoInfo;

