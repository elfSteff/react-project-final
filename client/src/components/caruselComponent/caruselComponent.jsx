import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { searchSingleShows } from "../../services/api";

const Carusel = () => {
  return (
    <Carousel>
      <Carousel.Item>
    
        <div
          style={{ width: "100%", height: "150px", background: "black" }}
        ></div>
        <Carousel.Caption>
          <h3>First slide label</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <div
          style={{ width: "100%", height: "150px", background: "black" }}
        ></div>

        <Carousel.Caption>
          <h3>Second slide label</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
     
        <div
          style={{ width: "100%", height: "150px", background: "black" }}
        ></div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
                </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carusel;
