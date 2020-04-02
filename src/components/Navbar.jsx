import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";



const NavigationBar = () => {
  return (
    <div className="navbar-fixed-top" style={{position: "fixed" ,top: "1",width:"100%", zIndex:"1", backgroundColor:"#46576a", color: "white"}}>      
        <Navbar expand="lg">
          <Navbar.Brand>
            <Link className="page-links" to="/">
              <h4> Paul Chesa</h4>
            </Link>            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item className="nav-item nav-link">
                <Link className="page-links" to="/">
                  <h6>Home</h6>
                </Link>
              </Nav.Item>
              <Nav.Item className="nav-item nav-link">
                <Link className="page-links" to="/profile">
                  <h6>Profile</h6>
                </Link>
              </Nav.Item>
              <Nav.Item className="nav-item nav-link">
                <Link className="page-links" to="/projects">
                 <h6>Projects</h6> 
                </Link>
              </Nav.Item>
              <Nav.Item className="nav-item nav-link" style={{marginRight:"40px"}}>
                <Link className="page-links" to="/contact">
                 <h6>Contact Me</h6>
                </Link>
              </Nav.Item>
              <Nav.Item className="nav-item nav-link">
                <a href="https://www.linkedin.com/in/paul-chesa/">
                  <FaLinkedin style={{color: "white", marginBottom: "10px",}} />
                </a>
              </Nav.Item>
              <Nav.Item className="nav-item nav-link">
                <a href="https://github.com/pchessah">
                  <GoMarkGithub style={{color: "white", marginBottom: "10px"}} />
                </a>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    
    </div>
  );
};

export default NavigationBar;
