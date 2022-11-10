import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import google from "../../Img/google.png";
import slack from "../../Img/slack.png";
import atlassian from "../../Img/atlassian.png";
import dropBox from "../../Img/dropbox.png";
import shopify from "../../Img/shopify.png";
const CompanyLogos = () => {
  return (
    <Container>
      <Row>
        <div className="d-flex justify-content-center mt-5 ">
          <Col lg="2">
            <img src={google} alt="" width={"80px"} />
          </Col>
          <Col lg="2">
            <img src={slack} alt="" width={"80px"} />
          </Col>
          <Col lg="2">
            <img src={atlassian} alt="" width={"80px"} />
          </Col>
          <Col lg="2">
            <img src={dropBox} alt="" width={"80px"} />
          </Col>
          <Col lg="2">
            <img src={shopify} alt="" width={"80px"} />
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default CompanyLogos;
