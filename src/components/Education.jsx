import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Education() {
  return (
    <div style={{ paddingTop: "20px", maxWidth: "900px", margin: "auto" }}>
      <Container style={{ padding: "20px" }}>
        <Row style={{ padding: "10px" }}>
          <Col>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="47"
              height="47"
              viewBox="0 0 100 100"
            >
              <path
                d="M22.5,95c-3.59,0-6.5-2.91-6.5-6.5v-73c0-3.59,2.91-6.5,6.5-6.5h59 c3.59,0,6.5,2.91,6.5,6.5v73c0,3.59-2.91,6.5-6.5,6.5H22.5z"
                opacity=".35"
              ></path>
              <path
                fill="#f2f2f2"
                d="M20.5,93c-3.59,0-6.5-2.91-6.5-6.5v-73C14,9.91,16.91,7,20.5,7h59c3.59,0,6.5,2.91,6.5,6.5v73 c0,3.59-2.91,6.5-6.5,6.5H20.5z"
              ></path>
              <path
                fill="#9aa2e6"
                d="M76.5,15v-1.5h-52c-2.209,0-4,1.791-4,4v65c0,2.209,1.791,4,4,4h52V85c1.381,0,2.5-1.119,2.5-2.5 v-65C79,16.119,77.881,15,76.5,15z"
              ></path>
              <path
                fill="#707cc0"
                d="M30,86.5h-5.5c-2.209,0-4-1.791-4-4v-65c0-2.209,1.791-4,4-4H30V86.5z"
              ></path>
              <path
                fill="#40396e"
                d="M75.5,88h-51c-3.033,0-5.5-2.467-5.5-5.5v-65c0-3.033,2.467-5.5,5.5-5.5h51 c3.033,0,5.5,2.467,5.5,5.5v65C81,85.533,78.533,88,75.5,88z M24.5,15c-1.378,0-2.5,1.122-2.5,2.5v65c0,1.378,1.122,2.5,2.5,2.5h51 c1.378,0,2.5-1.122,2.5-2.5v-65c0-1.378-1.122-2.5-2.5-2.5H24.5z"
              ></path>
              <polygon
                fill="#ff7575"
                points="50,44 43,38 36,44 36,15 50,15"
              ></polygon>
            </svg>
            <h3 style={{ padding: "5px" }}>Education and Experience</h3>
          </Col>
        </Row>
        <Row
          className="schoolRow"
          style={{
            padding: "10px 20px",
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          <Col
            lg={12}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div className="school">
              <h3 style={{ fontSize: "20px", fontWeight: "700" }}>
                2 Public High School Semarang
              </h3>
              <h5 style={{ fontSize: "18px", fontWeight: "600" }}>
                Science Class
              </h5>
              <p>Jl.Sendangguwo Baru I No 1, Gemah, Pedurungan, Semarang</p>
            </div>
            <div className="year" style={{ alignSelf: "flex-end" }}>
              <p style={{ fontSize: "16px", fontWeight: "600" }}>2017 - 2020</p>
            </div>
          </Col>
        </Row>
        <Row
          className="schoolRow"
          style={{
            padding: "10px 20px",
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          <Col
            lg={12}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div className="school">
              <h3 style={{ fontSize: "20px", fontWeight: "700" }}>
                Dian Nuswantoro University
              </h3>
              <h5 style={{ fontSize: "18px", fontWeight: "600" }}>
                Computer Science
              </h5>
              <p>
                Jl. Imam Bonjol No.207, Pendrikan Kidul, Semarang Tengah,
                Semarang
              </p>
            </div>
            <div className="year" style={{ alignSelf: "flex-end" }}>
              <p style={{ fontSize: "16px", fontWeight: "600" }}>2020 - 2024</p>
            </div>
          </Col>
        </Row>
        <Row
          className="schoolRow"
          style={{
            padding: "10px 20px",
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          <Col
            lg={12}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div className="school">
              <h3 style={{ fontSize: "20px", fontWeight: "700" }}>
                Dicoding Indonesia Study Independent
              </h3>
              <h5 style={{ fontSize: "18px", fontWeight: "600" }}>
                Front End and Back End Developers
              </h5>
              <p>Kampus Merdeka 2023</p>
            </div>
            <div className="year" style={{ alignSelf: "flex-end" }}>
              <p style={{ fontSize: "16px", fontWeight: "600" }}>
                2023 - 2023 (4 Months)
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Education;
