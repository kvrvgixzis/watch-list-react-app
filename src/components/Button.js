import '../styles/Button.css';

export const Button = ({ title, clickHandler, className }) => {
  return (
    <button onClick={clickHandler} className={`btn ${className}`}>
      {title}
    </button>
  );
};
