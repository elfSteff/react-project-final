import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { searchShows } from "../../services/api";
import { searchSingleShows } from "../../services/api";

const Carusel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://picsum.photos/500/300?img=1"
          alt="Second slide"
          width={600}
          height="auto"
        />
        <div
          style={{ width: "100%", height: "150px", background: "black" }}
        ></div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://picsum.photos/500/300?img=2"
          alt="Second slide"
          width={600}
          height="auto"
        />
        <div
          style={{ width: "100%", height: "150px", background: "black" }}
        ></div>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://picsum.photos/500/300?img=3"
          alt="Third slide"
          width={600}
          height="auto"
        />
        <div
          style={{ width: "100%", height: "150px", background: "black" }}
        ></div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carusel;
