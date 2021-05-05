import { HashRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
// components
import Dashboard from './pages/Dashboard/Dashboard';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUp from './pages/SignUpPage/SignUp';
import Messages from './pages/MessagesPage/Messages';
import TenantsPage from './pages/TenantsPage/Tenants';
import Votings from './pages/VotingsPage/Votings';
import SiteNavBar from './components/SiteNavBar';
import Footer from './components/Footer';
//css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//data
import usersJSON from './data/users.json';
import buildinsJSON from './data/buildings.json';
//data model
import UserModel from './Model/UserModel'; 
import buildingModel from './Model/BuildingModel'; 

//context
import ActiveUserContext from './shared/activeUserContext';

function App() {

 // const pathPre = process.env.PUBLIC_URL;

  //check dummi user:
  //const dummyUser= {userId:1, isAdmin:true, name:"irit", email:"iritstempler@gmail.com", pswrd:"123", adrs:"Beit Hashmonai", buildingName:"Elazar", buildingId:1, appNumber:5}

  const[users, setUsers] = useState(usersJSON.map(user => new UserModel(user)));
  const[buildings, setBuildings] = useState(buildinsJSON.map (building => new buildingModel(building)) ); 

  const [activeUser, setActiveUser] = useState(null);


  return (
    <ActiveUserContext.Provider value={activeUser}> 
     <SiteNavBar   onLogout={() => setActiveUser(null)}/>
      
       <HashRouter>
          <Switch>
              <Route exact path="/"><HomePage/></Route>
              <Route exact path="/login"><LoginPage  users={users} onLogin={user => setActiveUser(user)}/></Route>
      
             
              <Route exact path="/signup"><SignUp buildings={buildings} /></Route>
              <Route exact path="/tenants"><TenantsPage/></Route>
              <Route exact path="/messages"><Messages /></Route>
              <Route exact path="/votings"><Votings/></Route>
              <Route exact path="/dashboard"><Dashboard/></Route>
          </Switch>
       </HashRouter>
   
    <Footer/>

    </ActiveUserContext.Provider>
  );
}

export default App;
