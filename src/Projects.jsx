import React from 'react'
import { CardTitle, CardText, Row, Col } from 'reactstrap'
import { GoMarkGithub } from 'react-icons/go'
import { Card } from 'react-bootstrap'
import easeria from "./assets/easeria-deliveries.png";
import gamecrafters from "./assets/game-crafters.png";
import wineStore from "./assets/wine-store.png";
import notesApp from "./assets/notes-app.png";
import dashboard from "./assets/chesa-dashboard.png";
import fishcart from "./assets/fish-cart.png";
import apondoFishApp from "./assets/Apondo-fish-farm.png"
import It_Helpdesk from "./assets/IT-Helpdesk.png"
import chesa_blog from "./assets/chesa-blog.png"
import socialmedia from "./assets/social-media.png"

function Projects() {
  return (
    <div>
      <Row>
        <Col sm="12" md="6" lg="4">
          <Card body className="project-card">
            <CardTitle tag="h5">Wine store</CardTitle>
            <img
              src={wineStore}
              alt="wine-store"
              className="project-img"
            />
            <CardText>
              A front-end ecommerce site built using angular and firebase
              backend. Can place orders using email and whatsapp
            </CardText>
            <Row>
              <a
                href="https://chesa-wine-store.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-card-btns">Go to project</button>
              </a>
              <a
                href="https://github.com/pchessah/wine-store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-card-btns">
                  View Code <GoMarkGithub />
                </button>
              </a>
            </Row>
          </Card>
        </Col>

        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <Col sm="12" md="6" lg="4">
          <Card body className="project-card">
            <CardTitle tag="h5">Apondo Fish Farm</CardTitle>
            <img
              src={apondoFishApp}
              alt="apondo-fish-farm"
              className="project-img"
            />
            <CardText className="project-description">
              A website made using angular for a fish farm in Nyanza, Kenya
            </CardText>
            <Row>
              <a
                href="https://apondo-fish-farm.vercel.app/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-card-btns">Go to project</button>
              </a>
              <a
                href="https://github.com/pchessah/Apondo-fish-farm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button disabled className="project-card-btns">
                  View Code <GoMarkGithub />
                </button>
              </a>
            </Row>
          </Card>
        </Col>

        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <Col sm="12" md="6" lg="4">
          <Card body className="project-card">
            <CardTitle tag="h5">IT Helpdesk System </CardTitle>
            <img
              src={It_Helpdesk}
              alt="IT Helpdesksystem"
              className="project-img"
            />
            <CardText>
              An Ticketing system built using Angular and firebase. Has admin side to check on tickets
            </CardText>
            <Row>
              <a
                href="https://chesa-ticketing-system.vercel.app/sign-in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-card-btns">Go to project</button>
              </a>
              <a
                href="https://github.com/pchessah/Ticketing-System"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-card-btns">
                  View Code <GoMarkGithub />
                </button>
              </a>
            </Row>
          </Card>
        </Col>

        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <Col sm="12" md="6" lg="4">
          <Card body className="project-card">
            <CardTitle tag="h5">Chesa Blog </CardTitle>
            <img
              src={chesa_blog}
              alt="chesa-blog"
              className="project-img"
            />
            <CardText>
              A blog created using React JS front end and a backend of firebase
            </CardText>
            <Row>
              <a
                href="https://chesa-blog.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-card-btns">Go to project</button>
              </a>
              <a
                href="https://github.com/pchessah/blog-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-card-btns">
                  View Code <GoMarkGithub />
                </button>
              </a>
            </Row>
          </Card>
        </Col>

        <br />


        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <Col sm="12" md="6" lg="4">
          <Card body className="project-card">
            <CardTitle tag="h5">Easeria Deliveries </CardTitle>
            <img
              src={easeria}
              alt="easeria-deliveries"
              className="project-img"
            />
            <CardText>
              The front-end of a delivery platform made using MERN Stack. The appliction implements various aspects of
              HTML5 and CSS3.
            </CardText>
            <Row>
              <a
                href="http://easeria.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-card-btns">Go to project</button>
              </a>
              <a
                href="https://github.com/pchessah/Easeria_deliveries"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-card-btns">
                  View Code <GoMarkGithub />
                </button>
              </a>
            </Row>
          </Card>
        </Col>

        <br />
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <Col sm="12" md="6" lg="4">
          <Card body className="project-card">
            <CardTitle tag="h5">Dashboard </CardTitle>
            <img
              src={dashboard}
              alt="dashboard"
              className="project-img"
            />
            <CardText>
              A sample dashboard created using react, chartjs and
              react-chart.js The platform is purely frontend.
            </CardText>
            <Row>
              <a
                href="https://chesa-simple-react-dashboard.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-card-btns">Go to project</button>
              </a>
              <a
                href="https://github.com/pchessah/dashboard_react"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-card-btns">
                  View Code <GoMarkGithub />
                </button>
              </a>
            </Row>
          </Card>
        </Col>

        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <Col sm="12" md="6" lg="4">
          <Card body className="project-card">
            <CardTitle tag="h5">Fish Cart</CardTitle>
            <img
              src={fishcart}
              alt="fish-cart"
              className="project-img"
            />
            <CardText>
              A react web app that can be used for site for buying and
              selling fish feeds, fingerlings. Uses responsive web
              technologies such as bootstrap
            </CardText>
            <Row>
              <a
                href="http://fishcart.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-card-btns">Go to project</button>
              </a>
              <a
                href="https://github.com/pchessah/ecommerce"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button disabled className="project-card-btns">
                  View Code <GoMarkGithub />
                </button>
              </a>
            </Row>
          </Card>
        </Col>

        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <Col sm="12" md="6" lg="4">
          <Card body className="project-card">
            <CardTitle tag="h5">Ecommerce site</CardTitle>
            <img
              src={gamecrafters}
              alt="game-vrafters"
              className="project-img"
            />
            <CardText>
              A front-end ecommerce site built using react that allows
              orders to be submitted via whatsapp. Uses bootstrap and
              fontawesome icons
            </CardText>
            <Row>
              <a
                href="http://gamecraft.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-card-btns">Go to project</button>
              </a>
              <a
                href="https://github.com/pchessah/ecommerce"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-card-btns">
                  View Code <GoMarkGithub />
                </button>
              </a>
            </Row>
          </Card>
        </Col>

           {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
           <Col sm="12" md="6" lg="4">
          <Card body className="project-card">
            <CardTitle tag="h5">Next JS Social application</CardTitle>
            <img
              src={socialmedia}
              alt="social-media-project"
              className="project-img"
            />
            <CardText>
              A front-end ecommerce site built using Next JS that allows
              users to post and comment on other user's posts. Backend is on firebase.
            </CardText>
            <Row>
              <a
                href="https://chesa-socialmedia.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-card-btns">Go to project</button>
              </a>
              <a
                href="https://github.com/pchessah/chesa-socialmedia-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-card-btns">
                  View Code <GoMarkGithub />
                </button>
              </a>
            </Row>
          </Card>
        </Col>


        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <Col sm="12" md="6" lg="4">
          <Card body className="project-card">
            <CardTitle tag="h5">Notes App</CardTitle>
            <img
              src={notesApp}
              alt="notes"
              className="project-img"
            />
            <CardText>
              An notes application used for creating simple notes on a mock
              server. The application showcases CRUD operations of notes
              using Angular
            </CardText>
            <Row>
              <a
                href="https://chesa-notes.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-card-btns">Go to project</button>
              </a>
              <a
                href="https://github.com/pchessah/note-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button disabled className="project-card-btns">
                  View Code <GoMarkGithub />
                </button>
              </a>
            </Row>
          </Card>
        </Col>
      </Row>

    </div>

  )
}

export default Projects
