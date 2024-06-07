import React from "react";
import uiux from "../assets/uiux.png";
import wdp from "../assets/wdp.png";
import sql from "../assets/sql.png";
import ef from "../assets/efset.png";
import { Col, Container, Row } from "react-bootstrap";

function Sertif() {
  return (
    <div style={{ paddingTop: "80px", maxWidth: "900px", margin: "auto" }}>
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
                d="M22.5,95c-3.584,0-6.5-2.916-6.5-6.5v-73c0-3.584,2.916-6.5,6.5-6.5h41c1.78,0,2.278,1.707,3.5,3	l19.219,18.03C87.366,31.239,88,32.828,88,34.5v54c0,3.584-2.916,6.5-6.5,6.5H22.5z"
                opacity=".35"
              ></path>
              <path
                fill="#f2f2f2"
                d="M20.5,93c-3.584,0-6.5-2.916-6.5-6.5v-73C14,9.916,16.916,7,20.5,7h41	c1.78,0,3.502,0.742,4.724,2.035L84.219,28.03C85.366,29.239,86,30.828,86,32.5v54c0,3.584-2.916,6.5-6.5,6.5H20.5z"
              ></path>
              <path fill="#d9eeff" d="M20,87V13h40l20,21v53H20z"></path>
              <path
                fill="#40396e"
                d="M61,15v16c0,1.105,0.895,2,2,2h16l-1-2.653l-15-15.5L61,15z"
              ></path>
              <polygon
                fill="none"
                stroke="#40396e"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="3"
                points="20.5,13.5 61.5,13.5 79.5,32.5 79.5,86.5 20.5,86.5"
              ></polygon>
              <path
                fill="#70bfff"
                d="M66.5,48h-17c-0.828,0-1.5-0.672-1.5-1.5l0,0c0-0.828,0.672-1.5,1.5-1.5h17	c0.828,0,1.5,0.672,1.5,1.5l0,0C68,47.328,67.328,48,66.5,48z"
              ></path>
              <path
                fill="#70bfff"
                d="M66.5,57h-33c-0.828,0-1.5-0.672-1.5-1.5l0,0c0-0.828,0.672-1.5,1.5-1.5h33	c0.828,0,1.5,0.672,1.5,1.5l0,0C68,56.328,67.328,57,66.5,57z"
              ></path>
              <path
                fill="#70bfff"
                d="M66.5,75h-33c-0.828,0-1.5-0.672-1.5-1.5l0,0c0-0.828,0.672-1.5,1.5-1.5h33	c0.828,0,1.5,0.672,1.5,1.5l0,0C68,74.328,67.328,75,66.5,75z"
              ></path>
              <path
                fill="#70bfff"
                d="M50.5,66h-17c-0.828,0-1.5-0.672-1.5-1.5l0,0c0-0.828,0.672-1.5,1.5-1.5h17	c0.828,0,1.5,0.672,1.5,1.5l0,0C52,65.328,51.328,66,50.5,66z"
              ></path>
              <path
                fill="#70bfff"
                d="M66.5,66h-8c-0.828,0-1.5-0.672-1.5-1.5l0,0c0-0.828,0.672-1.5,1.5-1.5h8c0.828,0,1.5,0.672,1.5,1.5	l0,0C68,65.328,67.328,66,66.5,66z"
              ></path>
              <path
                fill="#70bfff"
                d="M41.5,48h-8c-0.828,0-1.5-0.672-1.5-1.5l0,0c0-0.828,0.672-1.5,1.5-1.5h8c0.828,0,1.5,0.672,1.5,1.5	l0,0C43,47.328,42.328,48,41.5,48z"
              ></path>
            </svg>
            <h3 style={{ padding: "5px" }}>Certification</h3>
          </Col>
        </Row>
        <Row style={{ padding: "10px 20px", marginBottom: "20px" }}>
          <Col>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
              className="wrap"
            >
              <a
                target={"blank"}
                href="https://badgr.com/public/assertions/6T0bA80OTDCd64b4lYIoQw?identity__email=111202012648@mhs.dinus.ac.id"
              >
                <img
                  src={uiux}
                  alt=""
                  style={{ width: "100%", height: "240px", margin: "5px" }}
                />
              </a>
              <a target={"blank"} href="https://www.efset.org/cert/CDctZb">
                <img
                  src={sql}
                  alt=""
                  style={{ width: "100%", height: "240px", margin: "5px" }}
                />
              </a>
              <a target={"blank"} href="https://www.efset.org/cert/CDctZb">
                <img
                  src={ef}
                  alt=""
                  style={{ width: "100%", height: "240px", margin: "5px" }}
                />
              </a>
              <a
                target={"blank"}
                href="https://badgr.com/public/assertions/RkRtsQyqTw2orePz4UKX-g?identity__email=111202012648@mhs.dinus.ac.id"
              >
                <img
                  src={wdp}
                  alt=""
                  style={{ width: "100%", height: "240px", margin: "5px" }}
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sertif;
