import React , {useContext } from 'react';
import {Navbar, Nav} from 'react-bootstrap'; 
import logo from '../assets/images/logo.png';

//context
import ActiveUserContext from '../shared/activeUserContext';
 
import { useLocation } from 'react-router-dom';
 

function SiteNavBar( {onLogout} ){

    const activeUser = useContext(ActiveUserContext);

    let  checkIfAdmin = false; 

    if (activeUser)
    {
        checkIfAdmin = activeUser.isAdmin; 
    }
   
    const location = useLocation() //get current relative path, like /tenants
    
 
   
    function setActive(navLink){
        let classActive = ""; 

        if (location.pathname === navLink){
            classActive=" active "; 
        }
        else
        {
            classActive="";
        }
        return classActive; 
    }

 


    return(
      
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#/"><img src={logo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav  activeKey={location.pathname}
            className="mr-auto">
            {/* show navigaion menu only for registered users admin/tenant */}
            {activeUser ? <Nav.Link  className={ setActive( "/dashboard") }  href="#/dashboard">DashBoard</Nav.Link> : null}
            {/* Tenants pages is only for admins */}
            {checkIfAdmin === true? <Nav.Link   className={  setActive( "/tenants") } href="#/tenants">Tenants</Nav.Link> : null}
            {activeUser? <Nav.Link  className={ setActive ("/messages" ) } href="#/messages">Messages</Nav.Link> : null}
            {activeUser? <Nav.Link  className={  setActive ( "/votings" ) } href="#/votings">Voting</Nav.Link>: null}
            {activeUser? <Nav.Link  className={  setActive ( "/tickets" ) } href="#/tickets">Tickets</Nav.Link>: null}
            <Nav.Link  className={  setActive ( "/contact" ) } href="#/contact">Contact</Nav.Link>
        </Nav>
        <Nav>
            {!activeUser ? <Nav.Link href="#/login">Login</Nav.Link> : null}
            {!activeUser ? <Nav.Link href="#/signup" className="signupBtn">Signup</Nav.Link> : null}
            {activeUser ? <Nav.Link href="#" onClick={() => onLogout()}>Logout</Nav.Link> : null}
            {activeUser?  <Nav.Link href="#">{activeUser.name},  {activeUser.isAdmin === true ? "Admin" : "Tenant"}</Nav.Link> :null}
            
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default SiteNavBar; 