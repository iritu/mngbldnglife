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
import messagesJSON from './data/messages.json';
import voteTicketsJSON from './data/votesTickets.json'

//data model
import UserModel from './Model/UserModel'; 
import buildingModel from './Model/BuildingModel'; 
import MessageModel from './Model/MessageModel';
import VoteTicketModel from './Model/VoteTicketModel'

//context
import ActiveUserContext from './shared/activeUserContext';




function App() {

 // const pathPre = process.env.PUBLIC_URL;

  //check dummi user:
  //const dummyUser= {userId:1, isAdmin:true, name:"irit", email:"iritstempler@gmail.com", pswrd:"123", adrs:"Beit Hashmonai", buildingName:"Elazar", buildingId:1, appNumber:5}

  //******** Define local memory arrays to use with JSON local files********
  // USERS
  const[users, setUsers] = useState(usersJSON.map(user => new UserModel(user)));
  // BUILDINGS
  const[buildings, setBuildings] = useState(buildinsJSON.map (building => new buildingModel(building)) ); 
  //MESSAGES
  const[messages, setMessages] = useState(messagesJSON.map (message => new  MessageModel(message)) ) ;
  //VOTE TICKETS JSON
  const[voteTickets, setVoteTickets]  = useState(voteTicketsJSON.map (voteTicket => new  VoteTicketModel(voteTicket)) ) ;

  //State 
  const [activeUser, setActiveUser] = useState(null);


  //Try to find if there is an admin in the building: 
  function checkUser(email, buildingName) {
    for (var i in users) {
        if ((users[i].email === email) && (users[i].buildingName === buildingName) && (users[i].isAdmin)){
           //alert - is admin in this building name  and break 
           console.log("building name = " + users[i].buildingName + " email = " + users[i].email + " is admin = " + users[i].isAdmin );
      
           return true; 
                     
        }
        else //ok, create new
        {
            console.log("user ok");
            return false; 
        }
    }
}


//ADD NEW -  building
function addBuilding(userId, userEmail, buildingName, city, street, stNumber){
  //create new building id
  let buildingId = buildings[buildings.length - 1].buildingId + 1; 
  
  const newBuilding = new buildingModel({
    buildingId,
    userId,
    userEmail,
    buildingName,
    city,
    street,
    stNumber
  });

  setBuildings(buildings.concat(newBuilding));

  return   buildingId; 
}


  //ADD NEW : admin user
  function addUser(isAdmin, name, email, img, pswrd, city, street, stNumber, buildingName,  appNumber) {
   
    let buildingId =""; 
    let userId = ""; 

    userId =  users[users.length - 1].userId + 1; 
    buildingId = addBuilding(userId, email, buildingName, city, street, stNumber); 
   
    const newUser = new UserModel({
      userId,
      isAdmin,
      name,
      email,
      img,
      pswrd, 
      city, 
      street,
      stNumber,
      buildingName,
      buildingId,
      appNumber
    });
    
    //check if is in users array with this building name as admin
    let ifExist = false; 

    ifExist = checkUser(email, buildingName); 

    if (ifExist === false){
      setUsers(users.concat(newUser));
      console.log(users); //********NIR - 
                          //How to update activeUser context to be the current new admin, 
                          //and where  to send the user to login page
      console.log(buildings);
    }
  }

 

  /**************MESSAGES SECTION : INSERT, UPDATE, DELETE ***************** */

  //INSERT
  function insertNewMessage(buildingId,userId,  dateCreated, title, details, priority, img){
      console.log("addNewMsg");
      
      let messageId = 10001;
      
      if(messages){
        messageId =  messages[messages.length-1].messageId + 1;
      }

      // alert (messageId);
      // console.log("Insert new message - "+ messageId+ ","+buildingId + ", "+ userId + ", " +dateCreated+ ", "+  title + ", "+ details + ", "+ 
      //  priority+", "+img); 
    

      const addNewMsg = new MessageModel({
        messageId,
        buildingId,
        userId, 
        dateCreated, 
        title,
        details, 
        priority,
        img
        
      });
    
      setMessages(messages.concat(addNewMsg));
      // console.log("app js messages:")
      // console.log(messages);

  }


  //UPDATE
  function updateMessage(messageId, title, details, priority, img){
    //1. find message id in the array of messages
    let index = messages.findIndex(msg => msg.messageId === messageId);
    //console.log("result==> "+ index);

    //2. update existing obj with new form data from user 
    if (index){
      messages[index].title = title; 
      messages[index].details = details; 
      messages[index].priority = priority; 
      messages[index].img = img; 

      setMessages(messages); 
    }

  }



  //add or update a message
  function addNewMsg(messageId, buildingId,userId,  dateCreated, title, details, priority, img){
    console.log("messageId ===> " + messageId); 

      if (!messageId){
        insertNewMessage(buildingId,userId,  dateCreated, title, details, priority, img); 
      }
      else{
        console.log("update message ==> "); 

        updateMessage(messageId, title, details, priority, img); 
      }
  }

  //DELETE message by message id
  function deleteMsg(msgID){
    let userAnswer = false; 

    //confirm doesnt work, window.confirm - works
    userAnswer = window.confirm("Delete message No. " + msgID + "?");
   
    if (userAnswer === true){ //clicked yes 
       //get position in array 
       let msgToDeletePos = messages.findIndex(msg => msg.messageId === msgID);

       //if we have position 
      if (msgToDeletePos){
          const msgAfterDel = messages.filter(msg => msg.messageId !== msgID);
          setMessages(msgAfterDel); 
      }
    }

  }

  //update single message with new comment 
  function updateCommentsForMessage(comment, message){

    //console.log(comment); 

    let msgId = message.messageId; //msg id

    let msgPos = messages.findIndex(msg => msg.messageId === msgId); //index in array 
   
    messages[msgPos].ArrayCommentsId.push(comment); 
    
    console.log (messages); 

    setMessages(messages);

  }

/********************END MESSAGES SECTION*********************** */

  return (
    <ActiveUserContext.Provider value={activeUser}> 
     <SiteNavBar   onLogout={() => setActiveUser(null)}/>
      
       <HashRouter>
          <Switch>
              <Route exact path="/"><HomePage/></Route>
              <Route exact path="/login"><LoginPage  users={users} onLogin={user => setActiveUser(user)}/></Route>
              <Route exact path="/signup"><SignUp onNewUser={addUser} /></Route>
              <Route exact path="/tenants"><TenantsPage/></Route>
              <Route exact path="/messages">
                  <Messages 
                    messages={messages} 
                    onNewMessage={addNewMsg}  
                    onDeleteMsg={deleteMsg} 
                    onUpdateComment={updateCommentsForMessage}
                  />
              </Route>
              <Route exact path="/votings"><Votings voteTickets={voteTickets} /></Route>
              <Route exact path="/dashboard"><Dashboard/></Route>
          </Switch>
       </HashRouter>
   
    <Footer/>

    </ActiveUserContext.Provider>
  );
}

export default App;
