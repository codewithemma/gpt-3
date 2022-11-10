import React from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import headerIllustration from "../../Img/HeaderImg.png";
import Team from "../../Img/Team.png";
const Header = () => {
  return (
    <Container>
      <Row>
        <Col lg="6" className="mt-lg-5 mt-2">
          <div className="blur"></div>
          <h1 className="hero-header">
            Let’s Build Something <br /> amazing with GPT-3 <br /> OpenAI
          </h1>
          <p className="hero-header-text mt-1">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <Form>
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                placeholder="Your Email Address"
                className="bg-main"
              />
              <Button className="bg-orange" id="button-addon1">
                Get Started
              </Button>
            </InputGroup>
          </Form>
          <Row>
            <Col lg="4">
              <img
                src={Team}
                alt="Team"
                className="img-fluid"
                style={{ width: "160px" }}
              />
            </Col>
            <Col lg="8">
              <p className="text-light header-text-p mt-1">
                1,600 people requested access a visit in the last 24 hours
              </p>
            </Col>
          </Row>
        </Col>
        <Col lg="6">
          <img
            src={headerIllustration}
            alt="headerillustration"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
