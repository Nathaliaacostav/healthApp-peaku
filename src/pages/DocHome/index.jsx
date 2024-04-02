
import React from 'react';
import './styles.sass';
import Footer from "../../components/Footer";


const DocHome = () => {
  return (
    <main className='docHome'>
      <section>
        <h1 className='docHomeTitle'>Registro de exámenes</h1>
      </section>
      <section className='containerD'>
        <div className='containerDoctor'>
          <div className='containerDoctor__contentPatient'>
            <div className='containerDoctor__contentPatient__description'>
              <p className='containerDoctor__contentPatient__description-patientTitle'>Johana García López</p>
              <p className='containerDoctor__contentPatient__description-patientData'>Paciente: femenino</p>
              <p className='containerDoctor__contentPatient__description-patientData'>Tipo examen: Hemograma</p>
              <p className='containerDoctor__contentPatient__description-patientData'>Fecha de envío: 19/03/24</p>
            </div>
            <img className='patientImg'src="https://res.cloudinary.com/dhhyc88td/image/upload/v1711416720/lectura_ydxgqg.png" alt="" />
          </div>
          <div className='containerDoctor__contentPatient'>
            <div className='containerDoctor__contentPatient__description'>
              <p className='containerDoctor__contentPatient__description-patientTitle'>Rodrigo Medina Mesa</p>
              <p className='containerDoctor__contentPatient__description-patientData'>Paciente: masculino</p>
              <p className='containerDoctor__contentPatient__description-patientData'>Tipo examen: Hemograma</p>
              <p className='containerDoctor__contentPatient__description-patientData'>Fecha de envío: 19/03/24</p>
            </div>
            <img className='patientImg'src="https://res.cloudinary.com/dhhyc88td/image/upload/v1711416720/lectura_ydxgqg.png" alt="" />
          </div>
          <div className='containerDoctor__contentPatient'>
            <div className='containerDoctor__contentPatient__description'>
              <p className='containerDoctor__contentPatient__description-patientTitle'>Luis Felipe Rincón</p>
              <p className='containerDoctor__contentPatient__description-patientData'>Paciente: masculino</p>
              <p className='containerDoctor__contentPatient__description-patientData'>Tipo examen: Hemograma</p>
              <p className='containerDoctor__contentPatient__description-patientData'>Fecha de envío: 19/03/24</p>
            </div>
            <img className='patientImg'src="https://res.cloudinary.com/dhhyc88td/image/upload/v1711416720/lectura_ydxgqg.png" alt="" />
          </div>
          <div className='containerDoctor__contentPatient'>
            <div className='containerDoctor__contentPatient__description'>
              <p className='containerDoctor__contentPatient__description-patientTitle'>Andrés Posada Luján</p>
              <p className='containerDoctor__contentPatient__description-patientData'>Paciente: masculino</p>
              <p className='containerDoctor__contentPatient__description-patientData'>Tipo examen: Hemograma</p>
              <p className='containerDoctor__contentPatient__description-patientData'>Fecha de envío: 19/03/24</p>
            </div>
            <img className='patientImg'src="https://res.cloudinary.com/dhhyc88td/image/upload/v1711416720/lectura_ydxgqg.png" alt="" />
          </div>
        </div>
        
      </section>
      <Footer />

    </main>
  );
};

export default DocHome;