import React from "react";
import {  Container, Nav, Navbar } from "react-bootstrap";
import './header.css'
import {Link} from 'react-router-dom'
import useFirebase from "../../Firebase/useFirebase";
const Header = () => {
  const {user,logout}=useFirebase()
  
  return (
    <div>
        <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        sticky="top"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="#home">
          ABX TRIPS
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/" className="nav-text">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/trips" className="nav-text">
            Trips
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className="nav-text">
              About us
            </Nav.Link>
         

            {
              user?.email?<Nav.Link className="nav-text" onClick={()=>logout()} >logout</Nav.Link>:<Nav.Link as={Link} to="/login" className="nav-text">
              Login
            </Nav.Link>
            }

            <Nav.Link as={Link} to="/aboutus" className="nav-text">
              User:{user.displayName}
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
