import React, { Component } from 'react'
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';

export class Navbar1 extends Component {
  render() {
    return (
      
        <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">ServiceHub Adda</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Mission</Nav.Link>
      <Nav.Link href="#pricing">Demo</Nav.Link>
    </Nav>
    <Navbar.Collapse className="justify-content-end">
      <NavDropdown title="Sign In" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Admin</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">moderator</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Employee</NavDropdown.Item>
       </NavDropdown>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
</>
      
    )
  }
}

export default Navbar1