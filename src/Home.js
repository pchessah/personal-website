import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardGroup,
  CardBody
} from "reactstrap";


function Home() {
  return (
    <div>
      <header></header>

      <div className="w3-content w3-padding" style={{ maxWidth: "1564px" }}>
        <div className="w3-container w3-padding-32" id="projects">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            Projects
          </h3>
        </div>

        <div className="cards">
          <CardGroup >
            <Card style={{ padding: "10px" }}>
              <CardBody>
                <CardTitle><h4>Easeria Deliveries</h4></CardTitle>
                <CardText>
                  <p>
                  A delivery application made using Mongo Express React and
                  Node. The appliction implements various aspects of HTML5 and
                  CSS3
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
                <CardTitle><h4>Personal Blog</h4></CardTitle>

                <CardText>
                  <p>
                  A personal blog showcasing CRUD using MERN stack. The
                  application features the use of a REST API in the posting,
                  editing and deleting of text.
                  </p>
                  
                </CardText>
                <Button style={{ backgroundColor: "#1e4e79" }}>
                  Go to project
                </Button>
              </CardBody>
            </Card>
          </CardGroup>
        </div>

        <div className="w3-container w3-padding-32" id="about">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            About
          </h3>
          <p>
            ICT Junior professional with range of skills. Strong customer
            service commitment with IT technical skills, honed through my
            educational background and prior experience as an IT Intern and
            Student developer.
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
