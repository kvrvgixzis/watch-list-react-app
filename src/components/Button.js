import '../styles/Button.css';

export const Button = ({ title, clickHandler }) => {
  return (
    <button onClick={clickHandler} className="btn">
      {title}
    </button>
  );
};
