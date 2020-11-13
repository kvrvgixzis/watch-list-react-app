import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Alert } from '../components/Alert';
import { AddForm } from '../components/AddForm';

import '../styles/MainLayout.css';

export const MainLayout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <Alert />
      <AddForm />
      <main className="root">{children}</main>
      <Footer />
    </div>
  );
};
