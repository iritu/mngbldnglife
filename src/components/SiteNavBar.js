import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'; 
import logo from '../assets/images/logo.jpg';
function SiteNavBar(){
    return(
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#/"><img src={logo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#/dashboard">DashBoard</Nav.Link>
            {/* if is admin */}
            <Nav.Link href="#/tenants">Tenants</Nav.Link> 
            <Nav.Link href="#/messages">Messages</Nav.Link> 
            <Nav.Link href="#/votings">Voting</Nav.Link> 
        </Nav>
        <Nav>
            <Nav.Link href="#/login">Login</Nav.Link>
            <Nav.Link href="#/signup">
            Sign Up
            </Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
)
}

export default SiteNavBar; 