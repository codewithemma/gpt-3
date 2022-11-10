import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
// import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

const NavBar = () => {
  return (
    <Navbar bg="transparent" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">GPT-3</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">What is GPT?</Nav.Link>
            <Nav.Link href="#action2">Open AI</Nav.Link>
            <Nav.Link href="#action2">Case Studies</Nav.Link>
            <Nav.Link href="#action2">Library</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Nav.Link className="navbar-text me-3">Sign in</Nav.Link>
            <Button className="bg-orange">Sign up</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
