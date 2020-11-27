import React from "react";
// Bootstrap Components
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Carousel from "react-bootstrap/Carousel";
// Images
import Bebe from "./img/bebe.jpg"
import BebeCarousel1 from "./img/carousel1.jpg"
import BebeCarousel2 from "./img/carousel2.jpg"
import BebeCarousel3 from "./img/carousel3.jpg"

const introduccion = () => {
  return (
    <Container fluid>
      <Jumbotron fluid>
        <Container className="text-center">
          <img src={Bebe} rounded alt="bebe" className="w-25 rounded-circle"/>
          <h1>Bebes Llorones</h1>
        </Container>
      </Jumbotron>

      <Carousel>
        <Carousel.Item>
          <img src={BebeCarousel1} alt="" className="d-block w-100"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={BebeCarousel2} alt="" className="d-block w-100"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={BebeCarousel3} alt="" className="d-block w-100"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default introduccion;
