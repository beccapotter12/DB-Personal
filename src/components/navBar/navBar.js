import React from 'react';
import './navBar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = props => (

  <div className="navBar">

<Navbar bg="dark" className="navBarColor" variant="dark">
    <Navbar.Brand onClick={() => props.setContent("Home")}>Doodle Belle Puppy</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link onClick={() => props.setContent("Home")}>Home</Nav.Link>
      <Nav.Link onClick={() => props.setContent("AvailablePuppies")}>Available Puppies</Nav.Link>
      <Nav.Link onClick={() => props.setContent("GuardianHome")}>Guaridan Home</Nav.Link>
      <Nav.Link onClick={() => props.setContent("About")}>About</Nav.Link>
      <Nav.Link onClick={() => props.setContent("ContactUs")}>Contact Us</Nav.Link>

    </Nav>
</Navbar>

  </div>
);

export default NavBar;

    
