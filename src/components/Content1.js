import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export class Content1 extends Component {
  render() {
    return (
     <>
      <Container >
        <Row>
            <Col className=" text-center align-items-center py-4">
            <h1>
                We are a <i> Heart of Phenom </i> for EVER
            </h1>
            
            </Col>
            
            <Col className="d-flex justify-content-around py-4">
            <img 
             src="content1.png"
             width={500}
             height={400}
            />
           
            </Col>
        </Row>
      </Container>

     </>
    )
  }
}

export default Content1