import React from "react";
import wrc from "../assets/ecommerce.png";
import palind from "../assets/poliklinik.png";
import hompe from "../assets/bookshelf.png";
import calc from "../assets/moviefinder.png";
import movie from "../assets/restokatalog.png";
import gre from "../assets/clubfinder.png";
import { Col, Container, Row } from "react-bootstrap";

function Porto() {
  return (
    <div>
      <Container style={{ marginTop: "100px" }} className="contain">
        <Row className="rownya">
          <Col lg={4} md={12} className="mb-4 mb-lg-0 colnya">
            <a href="" target={"blank"}>
              <img
                src={wrc}
                className="w-100 shadow-1-strong rounded mb-4"
                imgur
                alt="wrc landing page"
              />
            </a>

            <a href="" target={"blank"}>
              <img
                src={movie}
                className="w-100 shadow-1-strong rounded mb-4"
                imgur
                alt="skillmovie apps"
              />
            </a>
          </Col>

          <Col lg={4} className="mb-4 mb-lg-0 colnya">
            <a href="" target={"blank"}>
              <img
                src={calc}
                className="w-100 shadow-1-strong rounded mb-4"
                imgur
                alt="calculator"
              />
            </a>

            <a href="" target={"blank"}>
              <img
                src={hompe}
                className="w-100 shadow-1-strong rounded mb-4"
                imgur
                alt="Boat on Calm Water"
              />
            </a>
          </Col>

          <Col lg={4} className="mb-4 mb-lg-0 colnya">
            <a href="" target={"blank"}>
              <img
                src={gre}
                className="w-100 shadow-1-strong rounded mb-4"
                imgur
                alt="Waves at Sea"
              />
            </a>

            <a href="" target={"blank"}>
              <img
                src={palind}
                className="w-100 shadow-1-strong rounded mb-4"
                imgur
                alt="Yosemite National Park"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Porto;
