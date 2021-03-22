import { FilmsPage } from '../pages/FilmsPage';
import { MainLayout } from '../layouts/MainLayout';
import { Switch, Route } from 'react-router-dom';
import { FilmPage } from '../pages/FilmPage';

const App = () => (
  <MainLayout>
    <Switch>
      <Route path="/film/:id">
        <FilmPage />
      </Route>
      <Route path="/">
        <FilmsPage />
      </Route>
    </Switch>
  </MainLayout>
);

export default App;
