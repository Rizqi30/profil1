import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import gambar from "../assets/logo1.png";
import { Typewriter } from "react-simple-typewriter";

function Index() {
  return (
    <div className="header">
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col lg={1}></Col>
          <Col className="title" lg={5} md={12} sm={12}>
            <h1>Hello, i'm Rizqi</h1>
            <h1>
              I'm a passionate <br />{" "}
              <span style={{ color: "brown", textDecoration: "underline" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Computer Science Student",
                    "Backend Developer",
                    "Frontend Developer",
                    "UI/UX Enthusiasm",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
          </Col>
          <Col lg={5} md={6} style={{ zIndex: "1" }}>
            <img className="gbrSaya" src={gambar} width={500} />{" "}
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Index;
