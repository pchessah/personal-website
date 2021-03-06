import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

const NavigationBar = () => {
  return (
    <div
      className="navbar-fixed-top"
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "1",
        backgroundColor: "#091230",
        color: "white"
      }}
    >
      <Navbar expand="lg" variant="dark">
        <Navbar.Brand>
          <a className="page-links" href="#profile">
            <img
              src="https://avatars2.githubusercontent.com/u/20629353?s=460&v=4"
              alt="Avatar"
              style={{height:"75px", width: "75px", borderRadius:"100px"}}
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item className="nav-item nav-link">
              <a className="page-links" href="#homePage">
                <h6>Home</h6>
              </a>
            </Nav.Item>
            <Nav.Item className="nav-item nav-link">
              <a className="page-links" href="#about">
                <h6>Profile</h6>
              </a>
            </Nav.Item>
            <Nav.Item className="nav-item nav-link">
              <a className="page-links" href="#projects">
                <h6>Projects</h6>
              </a>
            </Nav.Item>
            <Nav.Item
              className="nav-item nav-link"
              style={{ marginRight: "40px" }}
            >
              <a className="page-links" href="#contact">
                <h6>Contact Me</h6>
              </a>
            </Nav.Item>
            <Nav.Item className="nav-item nav-link">
              <a href="https://www.linkedin.com/in/paul-chesa/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin style={{ color: "white", marginBottom: "10px" }} />
              </a>
            </Nav.Item>
            <Nav.Item className="nav-item nav-link">
              <a href="https://github.com/pchessah" target="_blank" rel="noopener noreferrer">
                <GoMarkGithub
                  style={{ color: "white", marginBottom: "10px" }}
                />
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
