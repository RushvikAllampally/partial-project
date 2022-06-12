import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap';

export class Courosols extends Component {
  render() {
    return (
      <div>
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="logo192.png"
      alt="First slide"
      width={171}
      height={180}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="logo192.png"
      alt="Second slide"
      width={171}
      height={180}
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="logo192.png"
      alt="Third slide"
      width={171}
      height={180}
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
    )
  }
}

export default Courosols