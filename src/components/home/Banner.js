import React from "react";
import { Carousel } from "react-bootstrap";
import './style/Banner.css'
const Banner = () => {
  return (
    <div className="banner1">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src="https://i.ibb.co/kSJrs3g/banner1.jpg"
            alt="First slide"
            height="500"
          />
          <Carousel.Caption>
            <h3 variant="dark">First help</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src="https://i.ibb.co/6scDsWs/banner2.jpg"
            alt="Second slide"
            height="500"
          />

          <Carousel.Caption>
            <h3>Second sevices</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src="https://i.ibb.co/br6kxs9/travel-1.jpg"
            alt="Third slide"
            height="500"
          />

          <Carousel.Caption>
            <h3>We are vary carefull </h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
