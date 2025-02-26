import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './headerInternetDedicado.css';
import Swal from 'sweetalert2';

const HeaderInternetDedicado = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    aceptaPoliticas: false
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Validación del nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    } else if (formData.nombre.trim().length < 3) {
      newErrors.nombre = 'El nombre debe tener al menos 3 caracteres';
    }

    // Validación del teléfono
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es obligatorio';
    } else if (!/^[0-9]{10}$/.test(formData.telefono.trim())) {
      newErrors.telefono = 'Ingrese un número de teléfono válido (10 dígitos)';
    }

    // Validación de políticas
    if (!formData.aceptaPoliticas) {
      newErrors.aceptaPoliticas = 'Debe aceptar las políticas de privacidad';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    if (validateForm()) {
      try {
        setSending(true);
        Swal.fire({
          title: 'Enviando...',
          text: 'Por favor, espere mientras se envía su información.',
          allowOutsideClick: false,
          onBeforeOpen: () => {
            Swal.showLoading();
          }
        });

        const response = await fetch(`https://www.agata.stratecsa.com/sendEmailStratecsa?nombre=${encodeURIComponent(formData.nombre)}&telefono=${encodeURIComponent(formData.telefono)}`, {
          method: 'GET',
        });

        const result = await response.json();

        if (result.success) {
          Swal.fire({
            icon: 'success',
            title: '¡Gracias!',
            text: 'Nos pondremos en contacto contigo pronto.',
          }).then(() => {
            // Resetear el formulario después de mostrar el mensaje
            setFormData({
              nombre: '',
              telefono: '',
              aceptaPoliticas: false
            });
            setSubmitted(false); // Reiniciar el estado de enviado
          });
        } else {
          throw new Error('Error al enviar el formulario');
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al enviar el formulario. Comuníquese con soporte de Stratecsa.',
        });
      } finally {
        setSending(false);
      }
    } else {
      // Mostrar errores específicos con SweetAlert
      for (const key in errors) {
        if (errors[key]) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: errors[key], // Mensaje de error específico
          });
          break; // Mostrar solo el primer error
        }
      }
    }
  };

  return (
    <div>
      <div className="row backgroundContainer">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-end align-items-center text-center"
            style={{ height: 'auto' }}>
            <h1 className="titleHero">Stratecsa</h1>
            <p className="lead">20 años impulsando la productividad de las empresas colombianas con conexiones más
                rápidas, estables y eficientes.</p>
        </div>
        <div className="col-12 col-md-6">
          <div className="contactForm mx-auto">
            <h2 className="contactFormH2">¡No esperes más, mejora tu conectividad hoy!</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <input
                  type="text"
                  className={`contactFormInput form-control ${errors.nombre && submitted ? 'is-invalid' : ''}`}
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  placeholder="Nombre Completo *"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className={`contactFormInput form-control ${errors.telefono && submitted ? 'is-invalid' : ''}`}
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  placeholder="Teléfono *"
                  required
                />
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className={`contactFormInputCheckbox form-check-input ${errors.aceptaPoliticas && submitted ? 'is-invalid' : ''}`}
                  id="politicas"
                  name="aceptaPoliticas"
                  checked={formData.aceptaPoliticas}
                  onChange={handleInputChange}
                  required
                />
                <label className="contactFormLabel form-check-label" htmlFor="politicas">
                  Acepto las Políticas de privacidad *
                </label>
              </div>
              <button type="submit" className="contactFormButton btnButton btn btn-primary w-100" disabled={sending}>
                Contáctame
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInternetDedicado;