"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './formularioHorizontalInformacion.css';
import { useState } from 'react';
import Swal from 'sweetalert2';

const FormularioHorizontalInformacion = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!nombre || !telefono || !correo) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Todos los campos son obligatorios',
      });
      return;
    }
    
    try {
      Swal.fire({
        title: 'Enviando...',
        text: 'Por favor, espere mientras se envía su información.',
        allowOutsideClick: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        }
      });

      const response = await fetch(`https://www.agata.stratecsa.com/sendEmailStratecsa?nombre=${encodeURIComponent(nombre)}&telefono=${encodeURIComponent(telefono)}&correo=${encodeURIComponent(correo)}`, {
        method: 'GET',
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Formulario enviado con éxito',
        });
        setNombre('');
        setTelefono('');
        setCorreo('');
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error al enviar el formulario',
      });
    }
  };

  return (
    <div className="contentFormInternetHorizontal">
      <h3 className="text-center">¡Transforma tu negocio con Internet Dedicado de Stratecsa!</h3>
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center mt-3">
          <div className="col-md-3">
            <input type="text" className="form-control mb-2 formInputHorizontal" placeholder="NOMBRE COMPLETO" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div className="col-md-3">
            <input type="tel" className="form-control mb-2 formInputHorizontal" placeholder="TELEFONO" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
          </div>
          <div className="col-md-3">
            <input type="email" className="form-control mb-2 formInputHorizontal" placeholder="CORREO" value={correo} onChange={(e) => setCorreo(e.target.value)} />
          </div>
        </div>
        <div className="row justify-content-end mt-3">
          <div className="col-md-3">
            <button type="submit" className="btnPrimary btn btn-block">ENVIAR</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormularioHorizontalInformacion;

