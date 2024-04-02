import { Link, useNavigate } from "react-router-dom";
import adminImage from "../../assets/images/Medico.png"
import userImage from "../../assets/images/Paciente.png"
import "./styles.sass"

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <main className="main-welcome">
      <div className="containerWelcome">
        <section className="container-rols">
          <div className="container-rols__div">
            <img src={userImage} alt="user" className="container-rols__div--img"/>
            <h2 className="welcomeTitle">Soy un paciente</h2>
            <p className="pd">Obtén lecturas de tus exámenes médicos y orientación en salud.</p>
            <button className="buttonUser" onClick={() => navigate('/sign-in')}>
              <p>Ingresa</p>
            </button>
          </div>
          <p className='footerText'>Selecciona tu usuario para ingresar ¿No tienes cuenta?<Link to='/sign-up'> crea una aquí</Link></p>
        </section>
      </div>
    </main>
);
}

export default Welcome