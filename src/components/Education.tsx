import React from 'react';

function Education() {
  return (
    <div
      style={{ color: 'black' }}
      className="w3-container w3-card w3-white"
    >
      <h2 className="w3-text-grey w3-padding-16">
        <i
          style={{ color: '#1e4e79' }}
          className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge "
        ></i>
        Education
      </h2>
      <div className="w3-container">
        <h5 className="w3-opacity">
          <b style={{ color: '#1e4e79' }}>
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
          <b style={{ color: '#1e4e79' }}>
            Lakehub Academy: Web and software development
          </b>
        </h5>
        <h6 className="">
          <i className="fa fa-calendar fa-fw w3-margin-right"></i>
          October 2019 - March 2020
        </h6>
        <p>
          Thorough grounding on JavaScript programming. Deep dive
          into Node.js. React for Front-end Development. Software
          development best practices.
        </p>
        <hr />
      </div>
      <div className="w3-container">
        <h5 className="w3-opacity">
          <b style={{ color: '#1e4e79' }}>
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
  )
}

export default Education;

