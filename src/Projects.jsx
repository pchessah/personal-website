import React from "react";
import {
  Button,
  CardTitle,
  CardText,
  CardGroup,
  CardBody
} from "reactstrap";
import { GoMarkGithub } from "react-icons/go";
import { Card } from "react-bootstrap";


function Projects() {
  return (
    <div>
        <div className="cards">
          <CardGroup>
            <Card >
              <CardBody>
                <Card.Header style={{ backgroundColor: "#91CCFF" }}>
                  <CardTitle>
                    <h4>Easeria Deliveries</h4>
                  </CardTitle>
                </Card.Header>
                <br/>
                <CardText>
                  <p>
                    A delivery application made using Mongo Express React and
                    Node. The appliction implements various aspects of HTML5 and
                    CSS3.
                  </p>
                </CardText>
                <a href="http://easeria.herokuapp.com">
                  <Button style={{ backgroundColor: "#1e4e79" }}>
                    Go to project
                  </Button>
                </a>
                <a href="https://github.com/pchessah/music_chart">
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
                    <h4>Personal Blog</h4>
                  </CardTitle>
                </Card.Header>
                <br/>
                <CardText>
                  <p>
                    A personal blog showcasing CRUD using MERN stack. The
                    application features the use of a REST API in the posting,
                    editing and deleting of text.
                  </p>
                </CardText>
                <a href="https://paulchesablog.herokuapp.com/">
                  <Button style={{ backgroundColor: "#1e4e79" }}>
                    Go to project
                  </Button>
                </a>
                <a href="https://github.com/pchessah/Blog">
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
                    <h4>Music Web app</h4>
                  </Card.Header>
                </CardTitle>

                <CardText>
                  <p>
                    A music website used to showcase responsiveness using
                    bootstrap. Made using React, HTML5 and CSS3.
                  </p>
                </CardText>
                <br />
                <a href="https://afromusiq.netlify.com/">
                  <Button style={{ backgroundColor: "#1e4e79" }}>
                    Go to project
                  </Button>
                </a>
                <a href="https://github.com/pchessah/Easeria_deliveries">
                  <Button
                    style={{ backgroundColor: "#1e4e79", margin: "10px" }}
                  >
                    View Code <GoMarkGithub />
                  </Button>
                </a>
              </CardBody>
            </Card>
          </CardGroup>
        </div>
    </div>
  )
}

export default Projects;
