import { useSelector } from 'react-redux';

export const Alert = () => {
  const message = useSelector((state) => state.app.alert);

  if (!message || !message.trim()) return null;

  return (
    <div className="alert alert-warning" role="alert">
      {message}
    </div>
  );
};
