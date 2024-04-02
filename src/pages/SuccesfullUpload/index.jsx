import React from 'react';
import Footer from "../../components/Footer";
import { FiMoreVertical } from 'react-icons/fi';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import './styles.sass';


const SuccesfullUpload = () => {
  const navigate = useNavigate()

  
  return (
    <main className='SuccesfullUpload'>
      <div className="SuccesfullUpload__topBar">
        <button className="SuccesfullUpload__backButton" onClick={() => navigate('/file-upload')}>
        <IoIosArrowBack />
        </button>
        <h3 className="SuccesfullUpload__pageDescription">Carga exitosa</h3>
        <button className="SuccesfullUpload__fi-more">
          <FiMoreVertical />
        </button>
      </div>
      <section className='SuccesfullUpload__container'>
        <h1 className='SuccesfullUpload__container-title'>¡Carga exitosa!</h1>
        <div className='SuccesfullUpload__container-check'>
          <img className='checkIcon'src="https://res.cloudinary.com/dhhyc88td/image/upload/v1711314902/garrapata_omqwug.png" alt="" />
        </div>
        <h3 className='SuccesfullUpload__container-subtitle'>Tu lectura estará disponible en menos de 24h</h3>
        <p className='SuccesfullUpload__container-receipt'>03850</p>
        <button className='SuccesfullUpload__container-share'>
          <img className='shareIcon' src="https://res.cloudinary.com/dhhyc88td/image/upload/v1711316500/factura_tnhwzj.png" alt="" />
        </button>
        <button className='SuccesfullUpload__container-share'>
          <img className='shareIcon2' src="https://res.cloudinary.com/dhhyc88td/image/upload/v1711316502/compartir_qpwpmj.png" alt="" />
        </button>
        <div className='SuccesfullUpload__container-btn'>
          <button className='btnConfirm' onClick={() => navigate('/Home')}>Finalizar</button>
        </div>
              </section>
      <Footer />
    </main>
  );
};

export default SuccesfullUpload;