import React from 'react';
import {Navbar , Container , Nav} from "react-bootstrap"

const AppNavbar = () => {
  return (
    <Navbar style={{backgroundColor:"#75B9BE"}}>
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default AppNavbar