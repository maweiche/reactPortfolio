import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import logo1 from "../pages/images/logo1.svg";
import logo2 from "../pages/images/logo2.svg";
import logo3 from "../pages/images/logo3.svg";
import logo4 from "../pages/images/logo4.svg";
import logo5 from "../pages/images/logo5.svg";


const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="mx-auto">
      <Carousel.Item>
        <img
          className="d-block w-100 mx-auto"
          src={logo1}
          alt="First slide"
          id="carouselImg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mx-auto"
          src={logo2}
          alt="First slide"
          id="carouselImg"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="carouselImg"
          className="d-block w-100 mx-auto"
          src={logo3}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="carouselImg"
          className="d-block w-100 mx-auto"
          src={logo4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="carouselImg"
          className="d-block w-100 mx-auto"
          src={logo5}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;
