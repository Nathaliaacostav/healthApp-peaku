
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMoreVertical } from 'react-icons/fi';
import { IoIosArrowBack } from "react-icons/io";
import { logoutAsync } from '../../store/users/userThunks'; // Importa la función logoutAsync desde tu módulo de autenticación
import Footer from "../../components/Footer";
import "./styles.sass";

const Home = () => {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleLogout = async () => {
    try {
      console.log("Iniciando logout...");
      await logoutAsync();
      console.log("Logout exitoso.");
      navigate('/welcome');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <main className="main-home">
      <div className="home__topBar">
        <button className="home__backButton" onClick={() => navigate('/Home')}>
          <IoIosArrowBack />
        </button>
        
        <button className="home__fi-more" onClick={toggleMenu}>
          <FiMoreVertical />
        </button>
        {menuVisible && (
          <div className="dropdown-menu">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
      <section className="container__home">
        <div className="home__title">
          <h1 className="home__title--title">Lecttu!</h1>
        </div>
        <h3 className="home__title--subtitle">
          tu resultado médico en menos de 24h
        </h3>
        <p className="home__title--paragraph">+ humano + rápido</p>
        <section className="container--secondary">
          <div className="secondary-buttons">
            <button className="secondary-buttons-btn" onClick={() => navigate('/file-upload')}>Ingresa tu examen</button>
          </div>
          <div>
            <p className="secondary-pr" >Carga tus exámenes de laboratorio en foto o PDF. Un profesional médico se encargará de su interpretación y envío de resultados</p>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Home