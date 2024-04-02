import "./styles.scss";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img src="https://res.cloudinary.com/dhhyc88td/image/upload/v1710967209/logolecttu_ss5zof.png" className="loader" />
      <div className="typing-indicator">
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
