import { useDispatch } from 'react-redux';
import { showAddForm } from '../redux/actions/app';
import '../styles/Header.css';
import { Button } from './Button';

export const Header = () => {
  const dispatch = useDispatch();

  const addBtnHandler = () => {
    console.log('Hello');
    dispatch(showAddForm());
  };

  return (
    <header className="header">
      <div className="header__title">Что посмотреть?</div>
      <div className="header__right-pane">
        <Button clickHandler={addBtnHandler} title={'Добавить'} />
      </div>
    </header>
  );
};
