import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'; 
import logo from '../assets/images/logo.jpg';


function SiteNavBar( {activeUser, onLogout} ){
    return(
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#/"><img src={logo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            {/* show navigaion only for registered users admin/tenant */}
            {activeUser ? <Nav.Link href="#/dashboard">DashBoard</Nav.Link> : null}
                {/* if is admin */}
            {activeUser? <Nav.Link href="#/tenants">Tenants</Nav.Link> : null }
            {activeUser? <Nav.Link href="#/messages">Messages</Nav.Link> : null}
            {activeUser? <Nav.Link href="#/votings">Voting</Nav.Link>: null}
        </Nav>
        <Nav>
            {!activeUser ? <Nav.Link href="#/login">Login</Nav.Link> : null}
            {!activeUser ? <Nav.Link href="#/signup">Signup</Nav.Link> : null}
            {activeUser ? <Nav.Link href="#" onClick={() => onLogout()}>Logout</Nav.Link> : null}
            {activeUser?  <Nav.Link href="#">{activeUser.name},  {activeUser.isAdmin ? "Admin" : "Tenant"}</Nav.Link> :null}
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default SiteNavBar; 