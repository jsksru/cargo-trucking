import { Suspense, lazy } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Loader from './components/Loader';

const Main = lazy(() => import('./layouts/Main'));
const Request = lazy(() => import('./layouts/Request'));
const NewRequest = lazy(() => import('./layouts/NewRequest'));
const RequestEdit = lazy(() => import('./layouts/RequestEdit'));

const App = () => {
  return (
    <Router>
      <Container>
        <AppHeader />
        <Suspense fallback={<Loader/>}>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/info/:id">
              <Request />
            </Route>
            <Route path="/edit/:id">
              <RequestEdit />
            </Route>
            <Route path="/new">
              <NewRequest />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </Router>
  );
};

export default App;

