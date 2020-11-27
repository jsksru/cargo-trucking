import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from './components/presenters/Loader';

const Main = lazy(() => import('./pages/Main'));
const Request = lazy(() => import('./pages/Request'));
const NewRequest = lazy(() => import('./pages/NewRequest'));
const RequestEdit = lazy(() => import('./pages/RequestEdit'));

const App = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;

