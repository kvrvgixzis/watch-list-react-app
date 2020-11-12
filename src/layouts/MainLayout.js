import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import '../styles/MainLayout.css';

export const MainLayout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main className="root">{children}</main>
      <Footer />
    </div>
  );
};
