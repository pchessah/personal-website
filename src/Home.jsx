import React, { useState } from "react";
import { Button, CardTitle, CardText, CardGroup, CardBody } from "reactstrap";
import { GoMarkGithub } from "react-icons/go";
import { Card } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";

function Home() {
  const [emailState, setEmailState] = useState({
    name: "Name",
    Email: "example@email.com",
    comment: "comment",
  });

  const handleChange = (e) => {
    setEmailState({ comment: e.target.value })

  }

  const handleSubmit = (e) => {
    const templateId = 'template_id';
    sendFeedback(templateId, { message_html: emailState.comment, from_name: emailState.name, reply_to: emailState.email })

  }

  const sendFeedback = (templateId, variables) => {
    window.emailjs.send(
      'gmail', templateId,
      variables
    ).then(res => {
      console.log('Email successfully sent!')
    })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }



  return (
    <div>
      <div id="homePage">
        <section>
          Paul Chesa, <br />
          Frontend developer <br />
          <br />
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
      </div>

      <br />

      <div className="w3-content w3-padding" style={{ maxWidth: "1564px" }}>
        <div className="w3-container w3-padding-32" id="projects">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            Projects
          </h3>
        </div>
        <div id="projects" className="cards">
          <CardGroup>
            <Card>
              <CardBody>
                <Card.Header style={{ backgroundColor: "#91CCFF" }}>
                  <CardTitle>
                    <h4>Easeria Deliveries</h4>
                  </CardTitle>
                </Card.Header>
                <br />
                <CardText>
                  An ecommerce platform made using Mongo Express React and
                  Node. The appliction implements various aspects of HTML5 and
                  CSS3.
                </CardText>
                <a
                  href="http://easeria.herokuapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button style={{ backgroundColor: "#1e4e79" }}>
                    Go to project
                  </Button>
                </a>
                <a
                  href="https://github.com/pchessah/Easeria_deliveries"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    style={{ backgroundColor: "#1e4e79", margin: "10px" }}
                  >
                    View Code <GoMarkGithub />
                  </Button>
                </a>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Card.Header style={{ backgroundColor: "#91CCFF" }}>
                  <CardTitle>
                    <h4>Ecommerce site</h4>
                  </CardTitle>
                </Card.Header>
                <br />
                <CardText>
                  A front-end ecommerce site that allows orders to be submitted via whatsapp
                </CardText>
                <a
                  href="http://gamecraft.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button style={{ backgroundColor: "#1e4e79" }}>
                    Go to project
                  </Button>
                </a>
                <a
                  href="https://github.com/pchessah/ecommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    style={{ backgroundColor: "#1e4e79", margin: "10px" }}
                  >
                    View Code <GoMarkGithub />
                  </Button>
                </a>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Card.Header style={{ backgroundColor: "#91CCFF" }}>
                  <CardTitle>
                    <h4>Fishcart</h4>
                  </CardTitle>
                </Card.Header>
                <br />
                <CardText>
                  Ecommerce site for buying and selling fish feeds
                </CardText>
                <a
                  href="http://fishcart.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button style={{ backgroundColor: "#1e4e79" }}>
                    Go to project
                  </Button>
                </a>
                <a
                  href="https://github.com/pchessah/Blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    style={{ backgroundColor: "#1e4e79", margin: "10px" }}
                  >
                    View Code <GoMarkGithub />
                  </Button>
                </a>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle>
                  <Card.Header style={{ backgroundColor: "#91CCFF" }}>
                    <h4>Notes App</h4>
                  </Card.Header>
                </CardTitle>

                <CardText>
                  CRUD operations of notes using Angular
                </CardText>
                <br />
                <a
                  href="https://chesa-notes.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button style={{ backgroundColor: "#1e4e79" }}>
                    Go to project
                  </Button>
                </a>
                <a
                  href="https://github.com/pchessah/note-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    style={{ backgroundColor: "#1e4e79", margin: "10px" }}
                  >
                    View Code <GoMarkGithub />
                  </Button>
                </a>
              </CardBody>
            </Card>
          </CardGroup>
          <br />
        </div>

        <br />

        <div className="w3-container w3-padding-32" id="about">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            About
          </h3>
          <div>
            <div
              className="w3-content w3-margin-top"
              style={{ maxWidth: "1400px" }}
            >
              <div className="w3-row-padding">
                <div className="w3-third">
                  <div className="w3-white w3-text-grey w3-card-4">
                    <div className="w3-display-container">
                      <img
                        src="https://avatars2.githubusercontent.com/u/20629353?s=460&v=4"
                        style={{ width: "100%" }}
                        alt="Avatar"
                      />
                    </div>
                    <br />
                    <div
                      className="w3-container"
                      style={{ marginLeft: "12px", color: "black" }}
                    >
                      <p>
                        <i
                          style={{ color: "#1e4e79" }}
                          className="fa fa-briefcase fa-fw w3-margin-right w3-large "
                        ></i>
                        ICT Professional with proficiency in JavaScript, Angular and
                        React
                      </p>
                      <p>
                        <i
                          style={{ color: "#1e4e79" }}
                          className="fa fa-home fa-fw w3-margin-right w3-large "
                        ></i>
                        Kisumu, Kenya
                      </p>
                      <p>
                        <i
                          style={{ color: "#1e4e79" }}
                          className="fa fa-envelope fa-fw w3-margin-right w3-large "
                        ></i>
                        paulchesa1@gmail.com
                      </p>
                      <p>
                        <i
                          style={{ color: "#1e4e79" }}
                          className="fa fa-phone fa-fw w3-margin-right w3-large "
                        ></i>
                        (254)706-165-412
                      </p>
                      <hr />
                      <a href="https://www.linkedin.com/in/paul-chesa/">
                        <p style={{ color: "blue" }}>
                          <FaLinkedin /> {"  "}View LinkedIn profile
                        </p>
                      </a>

                      <a href="https://github.com/pchessah">
                        <p style={{ color: "black" }}>
                          <GoMarkGithub /> {"  "}View Github profile
                        </p>
                      </a>
                      <hr />

                      <p className="w3-large">
                        <b style={{ color: "#1e4e79" }}>
                          <i
                            style={{ color: "#1e4e79" }}
                            className="fa fa-asterisk fa-fw w3-margin-right "
                          ></i>
                          Skills
                        </b>
                      </p>
                      <ul>
                        <li>JavaScript, Reacct JS, Angular JS, Node JS</li>
                        <li>HTML5, CSS3</li>
                        <li>Version Control using Git and Github</li>
                        <li>Software Best Practices</li>
                        <li>Website deployment using Heroku</li>
                        <li>Editor experience using VScode and Sublime</li>
                        <li>Debugging using chrome developer tools</li>
                      </ul>
                      <br />
                      <p className="w3-large">
                        <b style={{ color: "#1e4e79" }}>
                          <i className="fa fa-asterisk fa-fw w3-margin-right "></i>
                          Technology Toolbox
                        </b>
                      </p>
                      <ul>
                        <li>
                          Computer networking using CISCO routers and switches
                        </li>
                        <li>Windows OS, Linux-based OS</li>
                        <li>IT User support</li>
                        <li>Troubleshooting and configuration</li>
                        <li>Application Support</li>
                        <li>ICT asset auditing</li>
                        <li>Hardware Repair and Maintenence</li>
                        <li>System Back-up</li>
                      </ul>
                      <br />
                    </div>
                  </div>
                  <br />
                </div>

                <div className="w3-twothird" style={{ color: "black" }}>
                  <div className="w3-container w3-card w3-white w3-margin-bottom">
                    <h2
                      style={{ color: "#1e4e79" }}
                      className="w3-text-grey w3-padding-16"
                    >
                      <i
                        style={{ color: "#1e4e79" }}
                        className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge "
                      ></i>
                      Work Experience
                    </h2>
                    <div className="w3-container">
                      <h5 style={{ color: "#1e4e79" }} className="w3-opacity">
                        <b>Student Developer / Lakehub Foundation </b>
                      </h5>
                      <h6 className="">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                        Oct 2019 -{" "}
                        <span
                          className="w3-tag w3-round"
                          style={{ backgroundColor: "#1e4e79" }}
                        >
                          Current
                        </span>
                      </h6>
                      <p>
                        Web and stack development using fundamentals in JavaScript, React, Mongo dB Node and Express for various projects including an ecommerce application.
                        Experience in SDLC through development of capstone project of an ecommerce application highlighting skills in Requirements analysis, implementation and maintenance.
                        Deployment of various projects on Heroku and updated changes on the Heroku platform when application required changes.
                        Develop user interfaces using React, HTML5 and CSS3 for ecommerce application.
                        Code review of various projects implementing skills and knowledge in best practices in software development and refactoring code to improve output as well as debugging common errors in software.
                        Good experience in understanding One-way data flow, virtual DOM, JSX, components, state and composition based on fundamentals in React and using it on delivery and budget application in development.
                        Worked with components, Forms, Routers and Events using React.
                        Maintaining state and stores and dispatched actions using redux while creating reducers to be used to modify state tree on a budget app.
                        Extensively use git for version control and pushing code to GitHub for the projects.

                      </p>
                      <hr />
                    </div>
                    <div className="w3-container">
                      <h5 className="w3-opacity">
                        <b style={{ color: "#1e4e79" }}> KEMRI CDC</b>
                      </h5>
                      <h6 className="">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                        May 2019 - August 2019
                      </h6>
                      <p>
                        Involved in the daily ICT operations of the company and
                        provision of user support to members of the organization
                        with key successes in Assisting with computer and
                        printer support. Configuring new computers, notebooks
                        and printers based on the organization standards.
                        Carrying out software and hardware installation and user
                        management for individuals in the organization. Setting
                        up and configuring workstations to the domain network .
                        Attending to a wide variety of help desk tasks assigned
                        from time to time by the help desk team leader and the
                        system administrator.
                      </p>
                      <hr />
                    </div>
                    <div className="w3-container">
                      <h5 className="w3-opacity">
                        <b style={{ color: "#1e4e79" }}> Mumias Sugar</b>
                      </h5>
                      <h6 className="">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                        May 2017 - August 2017
                      </h6>
                      <p>
                        Supported day-to-day operations of company network and
                        systems infrastructure while providing user support to
                        30 staff of the largest sugar manufacturer in Kenya with
                        key Contributions & Results including. Coordinated the
                        execution of IT operations and activities that included
                        performing troubleshooting, configuration, computer
                        cleaning, and UPS battery change. Elevated systems
                        security with installation of antivirus for end users
                        and update of security software (Kaspersky and McAfee
                        antivirus and Windows defender). Steered Network design
                        and configuration, system back-ups and cabling design
                        and termination. Managed server and systems
                        administration while setting up UPS for network
                        switches, IP phones for users, and configuring IP
                        addresses for computers, printers, and network switches.
                        Oversaw ICT asset auditing with the creation of
                        accountability reports and tracking of computers in
                        every location.
                      </p>
                      <br />
                    </div>
                  </div>

                  <div
                    style={{ color: "black" }}
                    className="w3-container w3-card w3-white"
                  >
                    <h2 className="w3-text-grey w3-padding-16">
                      <i
                        style={{ color: "#1e4e79" }}
                        className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge "
                      ></i>
                      Education
                    </h2>
                    <div className="w3-container">
                      <h5 className="w3-opacity">
                        <b style={{ color: "#1e4e79" }}>
                          Moi University: Bsc Informatics
                        </b>
                      </h5>
                      <h6 className="">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                        September 2014 - December 2019
                      </h6>
                      <p>
                        Foundational Informatics concepts such as Information,
                        Knowledge, Modeling, and Uncertainty. It included the
                        introduction of the conceptual building blocks necessary
                        to understand the basics of Information Theory. There
                        was introduction of those building blocks hand in hand
                        with the practical dimension of Informatics, which
                        focuses on solving real problems with information
                        technology. There was present informatics tools in
                        various human domains, and discuss their implications
                        for the practice of science, engineering, art, and
                        society in general.
                      </p>
                      <hr />
                    </div>

                    <div className="w3-container">
                      <h5 className="w3-opacity">
                        <b style={{ color: "#1e4e79" }}>
                          Lakehub Academy: Web and software development
                        </b>
                      </h5>
                      <h6 className="">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                        October 2019 - March 2020
                      </h6>
                      <p>
                      Thorough grounding on JavaScript programming. Deep dive into Node.js. React for Front-end Development. Software development best practices.
                      </p>
                      <hr />
                    </div>
                    <div className="w3-container">
                      <h5 className="w3-opacity">
                        <b style={{ color: "#1e4e79" }}>
                          KCA University: CCNA/Routing and Switching
                        </b>
                      </h5>
                      <h6 className="">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                        January 2020
                      </h6>
                      <p>
                        validates the ability to install, configure, operate,
                        and troubleshoot medium-size route and switched
                        networks, including implementation and verification of
                        connections to remote sites in a WAN. CCNA curriculum
                        includes basic mitigation of security threats,
                        introduction to wireless networking concepts and
                        terminology, and performance-based skills. This new
                        curriculum also includes (but is not limited to) the use
                        of these protocols: IP, Enhanced Interior Gateway
                        Routing Protocol (EIGRP), Serial Line Interface Protocol
                        Frame Relay, Routing Information Protocol Version 2
                        (RIPv2),VLANs, Ethernet, access control lists (ACLs).
                      </p>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="w3-container w3-padding-32" id="contact">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            Contact
          </h3>
          <p>Lets get in touch and talk about your next project.</p>
          <a href="https://www.linkedin.com/in/paul-chesa/">
            <h5>
              <FaLinkedin />
              Click here to reach me on LinkedIn
            </h5>
          </a>
          <br />
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
              value={emailState.feedback}
              onChange={handleChange}
            />
            <button
              className="w3-button w3-black w3-section"
              type="submit"
              onClick={handleSubmit}
            >
              <i className="fa fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
