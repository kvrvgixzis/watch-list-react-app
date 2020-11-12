import { Alert } from './Alert';
import { Films } from './Films';
import { AddForm } from './AddForm';
import { MainLayout } from '../layouts/MainLayout';

const App = () => (
  <MainLayout>
    <Alert />
    <AddForm />
    <Films />
  </MainLayout>
);

export default App;
