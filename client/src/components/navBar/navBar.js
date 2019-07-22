import React from 'react';
import './navBar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = props => (

  <div className="navBar">

<Navbar bg="dark" className="navBarColor" variant="dark">
    <Navbar.Brand onClick={() => props.displayContent("Home")}>Doodle Belle Puppy</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link onClick={() => props.displayContent("Home")}>Home</Nav.Link>
      <Nav.Link onClick={() => props.displayContent("AvailablePuppies")}>Available Puppies</Nav.Link>
      <Nav.Link onClick={() => props.displayContent("GuardianHome")}>Guaridan Home</Nav.Link>
      <Nav.Link onClick={() => props.displayContent("About")}>About</Nav.Link>
      <Nav.Link onClick={() => props.displayContent("ContactUs")}>Contact Us</Nav.Link>
      <Nav.Link className="admin" onClick={() => props.displayContent("Admin")}>Admin Login</Nav.Link>

    </Nav>
</Navbar>

  </div>
);

export default NavBar;

    
