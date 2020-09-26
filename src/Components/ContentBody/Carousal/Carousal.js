import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Pic1 from "../../../Images/Carousal/Pic1.jpg";
import Pic2 from "../../../Images/Carousal/Pic2.jpg";
import Pic3 from "../../../Images/Carousal/Pic3.jpg";

const Carousal = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          style={{ height: 400, width: 800, position: "relative" }}
          className="d-block w-100"
          src={Pic1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Deadpool</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: 400, width: 800 }}
          className="d-block w-100"
          src={Pic2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>King Kong</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: 400, width: 800 }}
          className="d-block w-100"
          src={Pic3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Ironman</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousal;
