"use client";
import Servicios from '../page.jsx';
import React from "react";
import HeaderInternetDedicado from './components/headerInternetDedicado/headerInternetDedicado.jsx';
import BeneficiosInternetDedicadoCaja from './components/beneficiosInternetDedicadoCaja/beneficiosInternetDedicadoCaja.jsx';
import BeneficioInternetDedicadoColumna from './components/beneficioInternetDedicadoColumna/beneficioInternetDedicadoColumna.jsx';
import PreguntaEstasListoMaximixar from './components/preguntaEstasListoMaximixar/preguntaEstasListoMaximixar.jsx';
import CaracteristicaInternetDedicado from './components/caracteristicaInternetDedicado/caracteristicaInternetDedicado.jsx';
import FormularioHorizontalInformacion from './components/formularioHorizontalInformacion/formularioHorizontalInformacion.jsx';
import SeccionFinalInternetDedicado from './components/seccionFinalInternetDedicado/seccionFinalInternetDedicado.jsx';
import BotonFlotanteWhatsapp from './components/botonFlotanteWhatsapp/botonFlotanteWhatsapp.jsx';
import Load from '../../components/load/load.jsx';
import './styles.css';

function InternetDedicado() {

    return (
        <div>
            <Load />
            <Servicios />
            {/* header internet dedicado */}
            <HeaderInternetDedicado />
            {/* beneficios internet dedicado */}
            <BeneficiosInternetDedicadoCaja />
            {/* beneficios internet dedicado columna */}
            <BeneficioInternetDedicadoColumna />
            {/* pregunta estás listo para maximizar */}
            <PreguntaEstasListoMaximixar />
            {/* caracteristicas internet dedicado */}
            <CaracteristicaInternetDedicado />
            {/* formulario horizontal informacion */}
            <FormularioHorizontalInformacion />
            {/* seccion final internet dedicado */}
            <SeccionFinalInternetDedicado />
            {/* boton flotante whatsapp */}
            <BotonFlotanteWhatsapp />
        </div>
    );
}

export default InternetDedicado;