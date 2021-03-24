import '../styles/Header.css';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useWindowScroll } from '../hooks/useWindowScroll';
import { showAddForm } from '../redux/actions/app';
import { Button } from './Button';
import { useRef } from 'react';

const isDev = process.env.NODE_ENV === 'development';

const DevBlock = () => {
  if (!isDev) return null;

  return (
    <div className="dev-block">
      You are running this application in <b>{process.env.NODE_ENV}</b> mode.
    </div>
  );
};

export const Header = () => {
  const dispatch = useDispatch();
  const headerRef = useRef();

  const setHeaderFixed = (st) => {
    if (st <= 111) return;
    headerRef.current.classList.add('fixed');
  };

  const unsetHeaderFixed = () => {
    headerRef.current.classList.remove('fixed');
  };

  useWindowScroll({
    onScrollDown: unsetHeaderFixed,
    onScrollUp: setHeaderFixed,
  });

  const addBtnHandler = () => {
    dispatch(showAddForm());
  };

  return (
    <header ref={headerRef} className="header">
      <DevBlock />
      <div className="header__body">
        <div className="header__title">
          <Link to="/">Что посмотреть?</Link>
        </div>
        <div className="header__right-pane">
          <Button clickHandler={addBtnHandler} title={'Добавить'} />
        </div>
      </div>
    </header>
  );
};
