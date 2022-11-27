import React from 'react'
import { CardTitle, CardText, Row } from 'reactstrap'
import { GoMarkGithub } from 'react-icons/go'
import { Card } from 'react-bootstrap';

/**
 * @Description Component to display single project
 * @param props Project image url, title, description,liveUrl and githib link
 */

function SingleProjects(props:any) {
  return (
    <div>
    
        <Card body className="project-card">
          <CardTitle tag="h5">{props.projectTitle}</CardTitle>
          <img
            src={props.imageUrl}
            alt={props.projectTitle}
            className="project-img"
          />
          <CardText>
            {props.projectDescription}
          </CardText>
          <Row>
            <a
              href={props.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="project-card-btns">Go to project</button>
            </a>
            <a
              href={props.gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="project-card-btns">
                View Code <GoMarkGithub />
              </button>
            </a>
          </Row>
        </Card>

    </div>
  )

}

export default SingleProjects;