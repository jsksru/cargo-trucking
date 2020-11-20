import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Main from './layouts/Main';
import Request from './layouts/Request';
import NewRequest from './layouts/NewRequest';
import RequestEdit from './layouts/RequestEdit';

function App() {  
  return (
    <Router>
      <Container>
        <AppHeader />
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
      </Container>
    </Router>
  );
}

export default App;

