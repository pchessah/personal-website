import React from "react";
import NavigationBar from "./components/Navbar"

function Home() {
  return (
    <div>  
      <NavigationBar className="w3-top"/>
      {/* <div className="w3-top homeNav">
        <div className="w3-bar w3-white w3-wide w3-padding w3-card">
          <a href="#home" className="w3-bar-item w3-button">
            Paul Chesa
          </a>

          <div className="w3-right w3-hide-small">
            <a href="#projects" className="w3-bar-item w3-button">
              Projects
            </a>
            <a href="#about" className="w3-bar-item w3-button">
              Profile
            </a>
            <a href="#contact" className="w3-bar-item w3-button">
              Contact Me
            </a>
          </div>
        </div>
      </div> */}

      <header
        className="w3-display-container w3-content w3-wide bg-image"
        style={{maxWidth:"1500px"}}
        id="home"
      >
        <img
          className="w3-image"
          src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Architecture"
          width="1500"
          height="800"
        />
        <div className="w3-display-middle w3-margin-top w3-center">
          <h1 className="w3-xxlarge w3-text-white">
            <span className="w3-padding w3-black w3-opacity-min bg-text">
              <b>Paul Chesa</b>
              <br/>
            </span>{" "}
            <span className="w3-hide-small w3-text-light-grey">I am a Developer</span>
          </h1>
        </div>
      </header>

      <div className="w3-content w3-padding" style={{maxWidth:"1564px"}}>
        <div className="w3-container w3-padding-32" id="projects">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            Projects
          </h3>
        </div>

        <div className="w3-row-padding">
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Easeria Deliveries
              </div>
              <img src="/w3images/house5.jpg" alt="House" style={{width:"100%"}} />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Personal Blog
              </div>
              <img src="/w3images/house2.jpg" alt="House" style={{width:"100%"}} />
            </div>
          </div>
        
        </div>

        <div className="w3-container w3-padding-32" id="about">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            About
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>

        <div className="w3-container w3-padding-32" id="contact">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            Contact
          </h3>
          <p>Lets get in touch and talk about your next project.</p>
          <form target="_blank">
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="Name"
              required
              name="Name"
            />
            <input
              className="w3-input w3-section w3-border"
              type="text"
              placeholder="Email"
              required
              name="Email"
            />
            <input
              className="w3-input w3-section w3-border"
              type="text"
              placeholder="Subject"
              required
              name="Subject"
            />
            <input
              className="w3-input w3-section w3-border"
              type="text"
              placeholder="Comment"
              required
              name="Comment"
            />
            <button className="w3-button w3-black w3-section" type="submit">
              <i className="fa fa-paper-plane"></i> SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
