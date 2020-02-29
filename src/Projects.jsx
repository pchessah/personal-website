import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardGroup,
  CardBody
} from "reactstrap";

function Projects() {
  return (
    <div className="cards">
      <CardGroup>
        <Card style={{ padding: "10px" }}>
          <CardBody>
            <CardTitle>
              <h4>Easeria Deliveries</h4>
            </CardTitle>
            <CardText>
              <p>
                A delivery application made using Mongo Express React and Node.
                The appliction implements various aspects of HTML5 and CSS3
              </p>
            </CardText>
            <a href="http://easeria.herokuapp.com">
              <Button style={{ backgroundColor: "#1e4e79" }}>
                Go to project
              </Button>
            </a>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>
              <h4>Personal Blog</h4>
            </CardTitle>

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
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <CardTitle>
              <h4>Music Web app</h4>
            </CardTitle>

            <CardText>
              <p>
                A music website used to showcase responsiveness using bootstrap.
                Made using React, HTML5 and CSS3
              </p>
            </CardText>
            <a href="https://afromusiq.netlify.com/">
              <Button style={{ backgroundColor: "#1e4e79" }}>
                Go to project
              </Button>
            </a>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Projects;
