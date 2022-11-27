import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'
import { AiFillMediumCircle } from "react-icons/ai";

function SideBar(){
  return (
    <div className="w3-white w3-text-grey w3-card-4">
    <div className="w3-display-container">
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D03AQEwJmie-xk9QA/profile-displayphoto-shrink_800_800/0/1668019248193?e=1675296000&v=beta&t=tdofxMmwmZ70IF_2ytlUWKPfbb-JDeBXmXcFB8qjrwo"
        style={{ width: '100%' }}
        alt="Avatar"
      />
    </div>
    <br />
    <div
      className="w3-container"
      style={{ marginLeft: '12px', color: 'black' }}
    >
      <p>
        <i
          style={{ color: '#1e4e79' }}
          className="fa fa-briefcase fa-fw w3-margin-right w3-large "
        ></i>
        ICT Professional with proficiency in JavaScript, Angular
        and React
      </p>
      <p>
        <i
          style={{ color: '#1e4e79' }}
          className="fa fa-home fa-fw w3-margin-right w3-large "
        ></i>
        Nairobi, Kenya
      </p>
      <p>
        <i
          style={{ color: '#1e4e79' }}
          className="fa fa-envelope fa-fw w3-margin-right w3-large "
        ></i>
        paulchesa1@gmail.com
      </p>
      <p>
        <i
          style={{ color: '#1e4e79' }}
          className="fa fa-phone fa-fw w3-margin-right w3-large "
        ></i>
        (254)706-165-412
      </p>
      <hr />
      <a href="https://www.linkedin.com/in/paul-chesa/">
        <p style={{ color: '0072b1' }}>
          <FaLinkedin /> {'  '}View LinkedIn profile
        </p>
      </a>

      <a href="https://github.com/pchessah">
        <p style={{ color: 'black' }}>
          <GoMarkGithub /> {'  '}View Github profile
        </p>
      </a>

      <a href="https://medium.com/@paul-chesa">
        <p style={{ color: 'black' }}>
          <AiFillMediumCircle /> {'  '}Read my articles on Medium
        </p>
      </a>
      
      <hr />

      <p className="w3-large">
        <b style={{ color: '#1e4e79' }}>
          <i
            style={{ color: '#1e4e79' }}
            className="fa fa-asterisk fa-fw w3-margin-right "
          ></i>
          Skills
        </b>
      </p>
      <ul>
        <li>JavaScript, React JS, Angular JS, Next JS,  Node JS, shopify, Wordpress</li>
        <li>HTML5, CSS3</li>
        <li>Version Control using Git and Github</li>
        <li>Software Best Practices</li>
        <li>Website management using CPanel</li>
        <li>Website deployment using Netlify, Vercel and Heroku</li>
        <li>Editor experience using VScode and Sublime</li>
        <li>Debugging using chrome developer tools</li>
      </ul>
      <br />
      <p className="w3-large">
        <b style={{ color: '#1e4e79' }}>
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
  )

}

export default SideBar;