import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase/firebaseConfig';
import './styles.sass';
import Footer from "../../components/Footer";

const DocHome = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        
        const querySnapshot = await getDocs(collection(firestore, 'files'));
        const patientsData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            uploadDate: formatDate(data.uploadDate), // Usa la función para formatear la fecha
          };
        });
        console.log(patientsData)
        setPatients(patientsData);
      } catch (error) {
        console.error("Error al obtener documentos:", error);
      }
    };

    fetchPatients();
  }, []);

  function formatDate(timestamp) {
    const date = timestamp.toDate(); // Convierte el timestamp de Firestore a un objeto Date de JavaScript
    const day = date.getDate().toString().padStart(2, '0'); // Obtiene el día y asegura que sea de dos dígitos
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Obtiene el mes, suma 1 ya que getMonth() devuelve 0-11, y asegura que sea de dos dígitos
    const year = date.getFullYear().toString().slice(2); // Obtiene los últimos dos dígitos del año
    return `${day}/${month}/${year}`; // Retorna la fecha formateada
  }


  console.log(patients);

  return (
    <main className='docHome'>
      <section>
        <h1 className='docHomeTitle'>Registro de exámenes</h1>
      </section>
      <section className='containerD'>
        <div className='containerDoctor'>
          {patients.length > 0 ? (
            patients.map(patient => (
              <div key={patient.id} className='containerDoctor__contentPatient'>
                <div className='containerDoctor__contentPatient__description'>

                  <p className='containerDoctor__contentPatient__description-patientTitle'>{patient.name}</p>
                  <p className='containerDoctor__contentPatient__description-patientData'>Paciente: {patient.gender}</p>
                  {/* <p className='containerDoctor__contentPatient__description-patientData'>Tipo examen: {patient.examType.substring(0, patient.examType.lastIndexOf('.'))}</p> */}
                  <p className='containerDoctor__contentPatient__description-patientData'>Fecha de envío: {patient.uploadDate}</p>
                  <p className='containerDoctor__contentPatient__description-patientData'>Link del documento:<a href={patient.fileUrl}>clic</a></p>
                </div>
                <img className='patientImg' src={patient.fileUrl || "URLPorDefecto"} alt="" />
              </div>
            ))
          ) : (
            <p>No hay pacientes para mostrar</p>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default DocHome;