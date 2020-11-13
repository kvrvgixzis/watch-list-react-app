import { Films } from './Films';
import { MainLayout } from '../layouts/MainLayout';
import { Switch, Route } from 'react-router-dom';
import { FilmPage } from './FilmPage';

const App = () => (
  <MainLayout>
    <Switch>
      <Route path="/film/:id">
        <FilmPage />
      </Route>
      <Route path="/">
        <Films />
      </Route>
    </Switch>
  </MainLayout>
);

export default App;
