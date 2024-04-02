import { Link } from 'react-router-dom';
import HomeIcon from '../../assets/icons/HomeIcon';
import ExamsIcon from '../../assets/icons/ExamsIcon';
import ProfileIcon from '../../assets/icons/ProfileIcon';
import { ToastContainer } from 'react-toastify';
import './styles.sass';

const Footer = ({ pathname, notificationCheck }) => {
  return (
    <nav className="footer">
      <Link to="/Home">
        <div className="option flex flex-col justify-center items-center gap-1">
          <HomeIcon active={pathname === "/"} />
          <span style={{ color: pathname === "/" ? "#8176B6" : "#A5A5A5" }}>
            Inicio
          </span>
        </div>
      </Link>
      <Link to="/Home">
        <div className="option flex flex-col justify-center items-center gap-1">
          <ExamsIcon active={pathname === "/activity"} />
          <span style={{ color: pathname === "/activity" ? "#8176B6" : "#A5A5A5" }}>
            Lectturas
          </span>
        </div>
      </Link>
      <Link to="/Home">
        <div className="option flex flex-col justify-center items-center gap-1">
          <ProfileIcon active={pathname === "/sign-in"} />
          <span style={{ color: pathname === "/sign-in" ? "#8176B6" : "#A5A5A5" }}>
            Perfil
          </span>
        </div>
      </Link>
      <div style={{ position: 'absolute' }}>
        {notificationCheck ? <ToastContainer /> : ''}
      </div>
    </nav>
  );
};

export default Footer;