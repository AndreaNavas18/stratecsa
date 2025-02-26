"use client";
import { useState } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './formContacto.css';

const FormContacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        correo: '',
        ciudad: '',
        mensaje: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = async () => {
        // Validar campos vacíos
        for (const key in formData) {
            if (!formData[key].trim()) {
                await Swal.fire({
                    icon: 'error',
                    title: 'Campo requerido',
                    text: `El campo ${key} es obligatorio`,
                    confirmButtonColor: '#009cda'
                });
                return false;
            }
        }

        // Validar formato de correo
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.correo)) {
            await Swal.fire({
                icon: 'error',
                title: 'Correo inválido',
                text: 'Por favor ingrese un correo electrónico válido',
                confirmButtonColor: '#009cda'
            });
            return false;
        }

        // Validar formato de teléfono
        const phoneRegex = /^\d{7,}$/;
        if (!phoneRegex.test(formData.telefono)) {
            await Swal.fire({
                icon: 'error',
                title: 'Teléfono inválido',
                text: 'Por favor ingrese un número de teléfono válido (mínimo 7 dígitos)',
                confirmButtonColor: '#009cda'
            });
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!(await validateForm())) {
            return;
        }

        // Mostrar SweetAlert de carga
        Swal.fire({
            title: 'Enviando mensaje...',
            text: 'Por favor espere un momento',
            icon: 'info',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });

        try {
            const response = await fetch(`https://www.agata.stratecsa.com/sendEmailStratecsaContact?nombre=${encodeURIComponent(formData.nombre)}&telefono=${encodeURIComponent(formData.telefono)}&correo=${encodeURIComponent(formData.correo)}&ciudad=${encodeURIComponent(formData.ciudad)}&mensaje=${encodeURIComponent(formData.mensaje)}`, {
                method: 'GET',
            });
            const result = await response.json();

            // Cerrar el SweetAlert de carga
            Swal.close();

            if (result.success) {
                await Swal.fire({
                    icon: 'success',
                    title: '¡Mensaje enviado!',
                    text: 'Nos pondremos en contacto contigo pronto.',
                    confirmButtonColor: '#009cda'
                });
                setFormData({
                    nombre: '',
                    telefono: '',
                    correo: '',
                    ciudad: '',
                    mensaje: ''
                });
            } else {
                throw new Error('Error en el envío');
            }
        } catch (error) {
            // Cerrar el SweetAlert de carga en caso de error
            Swal.close();
            
            await Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al enviar el mensaje. Por favor, intente nuevamente.',
                confirmButtonColor: '#009cda'
            });
        }
    };

    return (
        <div className="container-fluid p-0">
            <div className="row g-0">
                {/* Columna de la imagen */}
                <div className="col-12 col-lg-5">
                    <div className="imageContainer">
                        <img src="/imagesInternetDedicado/navia-contacto.png" 
                             alt="Agente de servicio al cliente" />
                    </div>
                </div>

                {/* Columna del formulario */}
                <div className="col-12 col-lg-7">
                    <div className="formContainer">
                        {/* Encabezado */}
                        <div className="mb-4">
                            <h1 className="headerTitle">¡Bienvenido a Stratecsa!</h1>
                            <h2 className="headerSubtitle">Estamos listos para impulsar tu productividad</h2>
                            <p className="headerText">con Internet Dedicado y todo nuestro portafolio de soluciones tecnológicas,
                                cobertura a todo Colombia</p>
                            <p className="headerText">Deja tus datos para que nuestro experto, te brinde el acompañamiento ideal
                                para tu empresa.</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="formLabel form-label">Nombre</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleInputChange}
                                        className="formControl form-control"
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="formLabel form-label">Teléfono</label>
                                    <input
                                        type="tel"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleInputChange}
                                        className="formControl form-control"
                                        required
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="formLabel form-label">Correo</label>
                                    <input
                                        type="email"
                                        name="correo"
                                        value={formData.correo}
                                        onChange={handleInputChange}
                                        className="formControl form-control"
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="formLabel form-label">Ciudad</label>
                                    <input
                                        type="text"
                                        name="ciudad"
                                        value={formData.ciudad}
                                        onChange={handleInputChange}
                                        className="formControl form-control"
                                        required
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="formLabel form-label">Mensaje</label>
                                    <textarea
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleInputChange}
                                        className="formControl form-control"
                                        required
                                    />
                                </div>

                                <div className="col-12 text-center mt-4">
                                    <button type="submit" className="btn btnEnviar">
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormContacto;

