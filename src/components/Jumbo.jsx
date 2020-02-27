import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap'
import styled from "styled-components"
import codeImg from "../assets/code.jpeg"

const Styles = styled.div`
.jumbo {
    background: url(${codeImg}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }`

const Jumbo = () => {
    return (
    <Styles>
        <Jumbotron fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1> Welcome...</h1>
                <p> This is what I have to offer as a junior dev...</p>
            </Container>
        </Jumbotron>
    </Styles>)
}

export default Jumbo
