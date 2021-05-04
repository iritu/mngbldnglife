import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUp from './pages/SignUpPage/SignUp';
import Messages from './pages/MessagesPage/Messages';
import TenantsPage from './pages/TenantsPage/Tenants';
import Votings from './pages/VotingsPage/Votings';
import SiteNavBar from './components/SiteNavBar';

function App() {
  return (
    <> 
     <SiteNavBar/>
      <Container>
       <h1>
         Building Life management system 
       </h1>
       <HashRouter>
          <Switch>
              <Route exact path="/"><HomePage/></Route>
              <Route exact path="/login"><LoginPage/></Route>
              <Route exact path="/signup"><SignUp/></Route>
              <Route exact path="/tenants"><TenantsPage/></Route>
              <Route exact path="/messages"><Messages/></Route>
              <Route exact path="/votings"><Votings/></Route>
              <Route exact path="/dashboard"><Dashboard/></Route>
          </Switch>
       </HashRouter>
    </Container>
    </>
  );
}

export default App;
