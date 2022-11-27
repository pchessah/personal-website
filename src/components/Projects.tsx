import React from 'react'
import { Row, Col } from 'reactstrap'
import SingleProjects from './SingleProject';
import wineStore from "../assets/wine-store.png";
import dashboard from "../assets/chesa-dashboard.png";
import fishcart from "../assets/fish-cart.png";
import apondoFishApp from "../assets/Apondo-fish-farm.png"
import It_Helpdesk from "../assets/IT-Helpdesk.png"
import chesa_blog from "../assets/chesa-blog.png"
import socialmedia from "../assets/social-media.png"
import mitchelle_portfolio from "../assets/mitchelle-portfolio.png"
import flient_technologies from "../assets/flient-technologies.png"

/**
 * @Description Component to hold all projects that I have done
 */
function Projects() {
  return (
    <div>
      <div className="w3-container w3-padding-32" id="projects">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            Projects
          </h3>
        </div>
      <div>
      <Row>
        <Col sm="12" md="6" lg="4">
          <SingleProjects
            projectTitle="IT Helpdesk System"
            imageUrl={It_Helpdesk}
            projectDescription="  A Ticketing system built using Angular and firebase. Has admin side to check on tickets that have been submitted by the users. The admin can proceed to change the status of a ticket."
            projectLink="https://chesa-ticketing-system.vercel.app/sign-in"
            gitHubLink="https://github.com/pchessah/Ticketing-System"
          />

        </Col>

        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <Col sm="12" md="6" lg="4">
          <SingleProjects
            projectTitle="Wine store"
            imageUrl={wineStore}
            projectDescription=" A front-end ecommerce site built using angular and firebase backend. A user can place orders using email and whatsapp."
            projectLink="https://chesa-wine-store.netlify.app/"
            gitHubLink="https://github.com/pchessah/wine-store"
          />

        </Col>

        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <Col sm="12" md="6" lg="4">
          <SingleProjects
            projectTitle="Flient Technologies"
            imageUrl={flient_technologies}
            projectDescription="A website created for Flient Technologies made using Angular. Focusses on advanced routing technoques such as lazy loading."
            projectLink="https://www.flient.co.ke/"
            gitHubLink="https://github.com/pchessah/flient-technologies"
          />


        </Col>

        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <Col sm="12" md="6" lg="4">
          <SingleProjects
            projectTitle="Chesa Blog"
            imageUrl={chesa_blog}
            projectDescription=" A blog created using React JS front end and a backend of firebase. Users can create accounts and post blog posts which can be viewed by other users."
            projectLink="https://chesa-blog.vercel.app/"
            gitHubLink="https://github.com/pchessah/blog-react"
          />
        </Col>

        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <Col sm="12" md="6" lg="4">
          <SingleProjects
            projectTitle="Apondo Fish Farm"
            imageUrl={apondoFishApp}
            projectDescription="  A website made using angular for a fish farm in Nyanza, Kenya."
            projectLink="https://apondo-fish-farm.vercel.app/home"
            gitHubLink="https://github.com/pchessah/Apondo-fish-farm"
          />

        </Col>

        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <Col sm="12" md="6" lg="4">

          <SingleProjects
            projectTitle="Fish Kart"
            imageUrl={fishcart}
            projectDescription="   A react web app that can be used for site for buying and
            selling fish feeds, fingerlings. Uses responsive web
            technologies such as bootstrap."
            projectLink="http://fishcart.herokuapp.com/"
            gitHubLink="https://github.com/pchessah/ecommerce"
          />
        </Col>

        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <Col sm="12" md="6" lg="4">
          <SingleProjects
            projectTitle="Next JS Social application"
            imageUrl={socialmedia}
            projectDescription="A front-end ecommerce site built using Next JS that allows
            users to post and comment on other user's posts. Backend is on firebase."
            projectLink="https://chesa-socialmedia.vercel.app/"
            gitHubLink="https://github.com/pchessah/chesa-socialmedia-app"
          />
        </Col>


        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <Col sm="12" md="6" lg="4">
          <SingleProjects
            projectTitle="Sample Dashboard Design"
            imageUrl={dashboard}
            projectDescription="  A sample dashboard created using react, chartjs and
            react-chart.js The platform is purely frontend."
            projectLink="https://chesa-simple-react-dashboard.netlify.app"
            gitHubLink="https://github.com/pchessah/dashboard_react"
          />


        </Col>

        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <Col sm="12" md="6" lg="4">
          <SingleProjects
            projectTitle="Portfolio Website for Mitchelle Ayoro Osok"
            imageUrl={mitchelle_portfolio}
            projectDescription="A portfolio website created using angular and focusses on using tailwind css for designs."
            projectLink="https://mitchelle-osok-portfolio.vercel.app/#/home"
            gitHubLink="https://github.com/pchessah/mitchelle_osok_portfolio/"
          />

        </Col>
      </Row>

      </div>
 

    </div>

  )
}

export default Projects
