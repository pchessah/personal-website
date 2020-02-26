import React from "react";


function Profile() {
  return (
    <div>
    <div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
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
            <div className="w3-container" style={{marginLeft:"12px"}}>
              <p>
                <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
                Junior ICT Professional with proficiency in JavaScript and React
              </p>
              <p>
                <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
                Kisumu, Kenya
              </p>
              <p>
                <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
                paulchesa1@gmail.com
              </p>
              <p>
                <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
                (254)706-165-412
              </p>
              <hr />

              <p className="w3-large">
                <b>
                  <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
                  Skills
                </b>
              </p>
              <ul>
                <li>JavaScript, Reacct JS, Express JS, Node JS</li>
                <li>HTML5, CSS3</li>
                <li>Version Control using Git and Github</li>
                <li>Software Best Practices</li>
                <li>Website deployment using Heroku</li>
                <li>Editor experience using VScode and Sublime</li>
                <li>Debugging using chrome developer tools</li>
              </ul>
              <br />
              <p className="w3-large">
                <b>
                  <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
                  Technology Toolbox
                </b>
              </p>
              <ul>
                <li>Computer networking using CISCO routers and switches</li>
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

        <div className="w3-twothird">
          <div className="w3-container w3-card w3-white w3-margin-bottom">
            <h2 className="w3-text-grey w3-padding-16">
              <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
              Work Experience
            </h2>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>Student Developer / Lakehub Foundation </b>
              </h5>
              <h6 className="w3-text-teal">
                <i className="fa fa-calendar fa-fw w3-margin-right"></i>Oct 2019
                - <span className="w3-tag w3-teal w3-round">Current</span>
              </h6>
              <p>
                Web and stack development using fundamentals in JavaScript,
                React, Mongo dB Node and Express for various projects including
                a delivery application and a budget application. Experience in
                SDLC through development of capstone project of a delivery
                application highlighting skills in Requirements analysis,
                implementation and maintenance. Deployment of various projects
                on Heroku and updated changes on the Heroku platform when
                application required changes. Develop user interfaces using
                React, HTML5 and CSS3 for delivery application. Code review of
                various projects implementing skills and knowledge in best
                practices in software development and refactoring code to
                improve output as well as debugging common errors in software.
                Good experience in understanding One-way data flow, virtual DOM,
                JSX, components, state and composition based on fundamentals in
                React and using it on delivery and budget application in
                development. Worked with components, Forms, Routers and Events
                using React .Develop unit tests for applications and software
                during learning and code review sessions. using Jest and enzyme.
                Maintaining state and stores and dispatched actions using redux
                while creating reducers to be used to modify state tree on a
                budget app .Extensively use git for version control and pushing
                code to GitHub for the projects.
              </p>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>IT intern / KEMRI CDC</b>
              </h5>
              <h6 className="w3-text-teal">
                <i className="fa fa-calendar fa-fw w3-margin-right"></i>May 2019
                - August 2019
              </h6>
              <p>
                Assisted in the daily ICT operations of the company and
                provision of user support to members of the organization with
                key successes in Assisting with computer and printer support.
                Configuring new computers, notebooks and printers based on the
                organization standards. Carrying out software and hardware
                installation and user management for individuals in the
                organization. Setting up and configuring workstations to the
                domain network . Attending to a wide variety of help desk tasks
                assigned from time to time by the help desk team leader and the
                system administrator.
              </p>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>IT Intern / Mumias Sugar</b>
              </h5>
              <h6 className="w3-text-teal">
                <i className="fa fa-calendar fa-fw w3-margin-right"></i>May 2017
                - August 2017
              </h6>
              <p>
                Supported day-to-day operations of company network and systems
                infrastructure while providing user support to 30 staff of the
                largest sugar manufacturer in Kenya with key Contributions &
                Results including. Coordinated the execution of IT operations
                and activities that included performing troubleshooting,
                configuration, computer cleaning, and UPS battery change.
                Elevated systems security with installation of antivirus for end
                users and update of security software (Kaspersky and McAfee
                antivirus and Windows defender). Steered Network design and
                configuration, system back-ups and cabling design and
                termination. Managed server and systems administration while
                setting up UPS for network switches, IP phones for users, and
                configuring IP addresses for computers, printers, and network
                switches. Oversaw ICT asset auditing with the creation of
                accountability reports and tracking of computers in every
                location.
              </p>
              <br />
            </div>
          </div>

          <div className="w3-container w3-card w3-white">
            <h2 className="w3-text-grey w3-padding-16">
              <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
              Education
            </h2>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>Moi University: Bsc Informatics</b>
              </h5>
              <h6 className="w3-text-teal">
                <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                September 2014 - December 2019
              </h6>
              <p>
                Foundational Informatics concepts such as Information,
                Knowledge, Modeling, and Uncertainty. It included the
                introduction of the conceptual building blocks necessary to
                understand the basics of Information Theory. There was
                introduction of those building blocks hand in hand with the
                practical dimension of Informatics, which focuses on solving
                real problems with information technology. There was present
                informatics tools in various human domains, and discuss their
                implications for the practice of science, engineering, art, and
                society in general.
              </p>
              <hr />
            </div>

            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>Lakehub Academy: Web and software development</b>
              </h5>
              <h6 className="w3-text-teal">
                <i className="fa fa-calendar fa-fw w3-margin-right"></i>October
                2019 - March 2020
              </h6>
              <p>
                Thorough grounding on JavaScript programming Deep dive into
                Node.js Algorithmic Scripting with JavaScript React for
                Front-end Development Hybrid App Development with React Native
              </p>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>KCA University: CCNA/Routing and Switching</b>
              </h5>
              <h6 className="w3-text-teal">
                <i className="fa fa-calendar fa-fw w3-margin-right"></i>January 2020
              </h6>
              <p>
                validates the ability to install, configure, operate, and
                troubleshoot medium-size route and switched networks, including
                implementation and verification of connections to remote sites
                in a WAN. CCNA curriculum includes basic mitigation of security
                threats, introduction to wireless networking concepts and
                terminology, and performance-based skills. This new curriculum
                also includes (but is not limited to) the use of these
                protocols: IP, Enhanced Interior Gateway Routing Protocol
                (EIGRP), Serial Line Interface Protocol Frame Relay, Routing
                Information Protocol Version 2 (RIPv2),VLANs, Ethernet, access
                control lists (ACLs).
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Profile;
