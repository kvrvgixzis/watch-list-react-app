import '../styles/MainLayout.css';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Alert } from '../components/Alert';
import { AddForm } from '../components/AddForm';
import { useRef } from 'react';
import { useWindowScroll } from '../hooks/useWindowScroll';

export const MainLayout = ({ children }) => {
  const containerRef = useRef();

  const setHeaderFixed = (st) => {
    if (st <= 111) return;
    containerRef.current.classList.add('fixed');
  };

  const unsetHeaderFixed = () => {
    containerRef.current.classList.remove('fixed');
  };

  useWindowScroll({
    onScrollDown: unsetHeaderFixed,
    onScrollUp: setHeaderFixed,
  });

  return (
    <div ref={containerRef} className="container">
      <Header />
      <Alert />
      <AddForm />
      <main className="root">{children}</main>
      <Footer />
    </div>
  );
};
