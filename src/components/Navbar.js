import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand>
          <Link className="page-links" to="/">
            <h2> Paul Chesa</h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Link className="page-links" to="/">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="page-links" to="/profile">
                Profile
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="page-links" to="/projects">
                Projects
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="page-links" to="/contact">
                Contact Me
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default NavigationBar;
