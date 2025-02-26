"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './beneficiosInternetDedicadoCaja.css';

const BeneficiosInternetDedicadoCaja = () => {
  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="titleInternetDedicado">Internet Dedicado empresarial Rápido y Confiable</h2>
          <p className="textInternetDedicado">
            Tu empresa contará con conexión de internet dedicado, asegurando una
            excelente velocidad de conexión, con <br /> nuestro servicio Carrier className, ya sea en configuración
            local o internacional, que optimiza tus comunicaciones de <br /> manera eficiente, impulsando la
            productividad de tu empresa.
          </p>
        </div>
      </div>

      <div className="row contentBeneficios">
        <div className="col-md-3 col-12">
          <div className="row">
            <div className="col-md-11 col-12 mb-4">
              <div className="itemBox box1">
                Internet dedicado continuo <br /> y de alta calidad.
              </div>
            </div>
            <div className="col-md-10 col-sm-12 mb-4">
              <div className="itemBox box2">Planes y precios <br /> competitivos.</div>
            </div>
            <div className="col-md-10 col-12 mb-4">
              <div className="itemBox box3">Gran cobertura. <br />Cuadrilla propia.</div>
            </div>
          </div>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="/imagesInternetDedicado/hombreinternetdedicado.png"
            alt="Hombre usando internet"
            className="img-fluid customImage"
          />
        </div>

        <div className="col-md-3 col-12">
          <div className="row">
            <div className="col-md-10 col-12 mb-4">
              <div className="itemBox box4">Soporte técnico <br /> especializado.</div>
            </div>
            <div className="col-md-10 col-12 mb-4">
              <div className="itemBox box5">Fibra óptica propia.</div>
            </div>
            <div className="col-md-10 col-12 mb-4">
              <div className="itemBox box6">Disfruta de un acceso <br /> a internet estable</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-12">
          <h3 className="titleImpulsaEmpresa">
            ¡Impulsa tu empresa con un Internet Empresarial de Alta Velocidad!
          </h3>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <button className="btnPrimary btn btn-lg" style={{ width: 'auto' }}>
            Solicita tu Cotización Gratis
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeneficiosInternetDedicadoCaja;
