import React from 'react'
import Carousel from "react-bootstrap/Carousel";
const ProblemView = () => {
  return (
    <Carousel id="problem">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption className="h-100">
          <h3>Why the Good Place</h3>
          <p>Pink for girls, blue for boys; dolls for girls, trucks for boys; girls are fragile, boys are strong; girls are dependent, boys are autonomous.  

            These  are  some  of  the  basic  differential treatment and assumed sexual characteristics of the sexes that begin  very  early  in  childhood  and  the  beginning  of  the reinforcement  of  the  double  standard  for  the  sexes  that persists throughout  the process of socialization.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ProblemView;

