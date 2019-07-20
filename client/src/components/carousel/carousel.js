import React from 'react';
import './carousel';
import Carousel from 'react-bootstrap/Carousel';
import ImageOne from '../../assets/images/ui/Fleur.jpeg'
import ImageTwo from '../../assets/images/ui/Percy.jpeg'
import ImageThree from '../../assets/images/ui/Sirus.JPG'


const HomeCarousel = props => (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ImageOne}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Fleur</h3>
      <p>Cuddly and Attentive Fleur is perfect for a family with kids!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ImageTwo}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Percy</h3>
      <p>Percy is full of energy and a quick learner, perfect for an active family!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ImageThree}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Serius</h3>
      <p>Sweet and Sensitive Serius would be perfect for a quiet loving home!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

);

export default HomeCarousel;
