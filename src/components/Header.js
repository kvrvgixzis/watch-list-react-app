import { useDispatch } from 'react-redux';
import { showAddForm } from '../redux/actions/app';
import '../styles/Header.css';
import { Button } from './Button';

const isDev = process.env.NODE_ENV === 'development';

export const Header = () => {
  const dispatch = useDispatch();

  const addBtnHandler = () => {
    console.log('Hello');
    dispatch(showAddForm());
  };

  const DevBlock = () => {
    if (!isDev) return null;

    return (
      <div className="dev-block">
        You are running this application in <b>{process.env.NODE_ENV}</b> mode.
      </div>
    );
  };

  return (
    <header className="header">
      <DevBlock />
      <div className="header__body">
        <div className="header__title">Что посмотреть?</div>
        <div className="header__right-pane">
          <Button clickHandler={addBtnHandler} title={'Добавить'} />
        </div>
      </div>
    </header>
  );
};
