import React, { useState } from 'react';
import Footer from "../../components/Footer";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FiMoreVertical } from 'react-icons/fi';
import { uploadFile } from '../../store/services/fileUploadService';

import './styles.sass';


const FileUpload = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadAndRedirect = () => {
    if (selectedFile) {
      uploadFile(selectedFile);
      navigate('/succesfull');
    } else {
      console.error('No file selected');
    }
  };

  return (
    <main className='fileUpload'>
      <div className="fileUpload__topBar">
        <button className="fileUpload__backButton" onClick={() => navigate('/Home')}>
        <IoIosArrowBack />
        </button>
        <h3 className="fileUpload__pageDescription">Toma de fotografías</h3>
        <button className="fileUpload__fi-more">
          <FiMoreVertical />
        </button>
      </div>
      <section className='fileUpload__container'>
        <div>
          <h3 className="fileUpload__container--title">Recuerda cargar 1 solo examen a la vez</h3>
          <div className="fileUpload__container--capture">
            {/* <img src="https://res.cloudinary.com/dhhyc88td/image/upload/v1711175393/anadir_bscuhr.png" alt="" /> */}
            <input type="file" onChange={handleFileChange} />
          </div>
        </div>
        <div className="fileUpload__container--options">
          <button className="submitButton" onClick={handleUploadAndRedirect}>Sí, enviar</button>
          {/* <button className="submitButton">Cargar más</button> */}
          <p className="fileUpload__container--caption">Si requieres otra lectura deberás solicitar un nuevo servicio</p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default FileUpload;