import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";


const LoginScreenContext = createContext();

const LoginScreenProvider = ({ children }) => {
  const [loginScreen, setLoginScreen] = useState(true);

  return (
    <LoginScreenContext.Provider value={{ loginScreen, setLoginScreen }}>
      {children}
    </LoginScreenContext.Provider>
  );
};

const useIsLoginScreen = () => {
  const context = useContext(LoginScreenContext);
  if (!context) {
    throw new Error(
      "useIsLoginScreen debe ser utilizado dentro de un LoginScreenProvider"
    );
  }
  return context;
};

export { LoginScreenProvider, useIsLoginScreen };

LoginScreenProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

