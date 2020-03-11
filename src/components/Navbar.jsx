import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

const Styles = styled.div`
  .navbar {
    background-color: #1e4e79;
  }

  a,
  .navbar-brand,
  .navbar-nav,
  .nav-link {
    color: #000000

    &:hover {
      color: white;
    }
  }
`;

const NavigationBar = () => {
  return (
    <div className="navbar-fixed-top">
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand>
            <Link className="page-links" to="/">
              <h3> Paul Chesa</h3>
            </Link>
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item className="nav-item nav-link">
                <Link className="page-links" to="/">
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item className="nav-item nav-link">
                <Link className="page-links" to="/profile">
                  Profile
                </Link>
              </Nav.Item>
              <Nav.Item className="nav-item nav-link">
                <Link className="page-links" to="/projects">
                  Projects
                </Link>
              </Nav.Item>
              <Nav.Item className="nav-item nav-link">
                <Link className="page-links" to="/contact">
                  Contact Me
                </Link>
              </Nav.Item>
              <Nav.Item className="nav-item nav-link">
                <a href="https://www.linkedin.com/in/paul-chesa/">
                  <FaLinkedin />
                </a>
              </Nav.Item>
              <Nav.Item className="nav-item nav-link">
                <a href="https://github.com/pchessah">
                  <GoMarkGithub />
                </a>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    </div>
  );
};

export default NavigationBar;
