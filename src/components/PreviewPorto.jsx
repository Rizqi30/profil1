import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import gbr from "../assets/poliklinik.png";
import gbr1 from "../assets/ecommerce.png";

import { Button, Col, Container, Row } from "react-bootstrap";
// Import Swiper styles
import "swiper/css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function PreviewPorto() {
  return (
    <Container
      fluid
      className="wrapper1"
      style={{
        width: "100%",
        height: "70rem",
        overflow: "hidden",
        margin: "auto",
      }}
    >
      <Container style={{ width: "100%" }}>
        <Row style={{ padding: "0", justifyContent: "center" }}>
          <Col
            xs={12}
            md={12}
            sm={12}
            style={{ display: "flex", alignItems: "center" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="55"
              height="55"
              viewBox="0 0 100 100"
            >
              <path
                d="M18.46,91.017c-5.79,0-10.5-4.71-10.5-10.5l0.031-20.548C6.197,58.813,5.004,56.798,5,54.511 L4.96,30.528c0-5.799,4.71-10.511,10.5-10.511h14.517v-0.5c0-5.79,4.71-10.5,10.5-10.5h23.008c5.79,0,10.5,4.71,10.5,10.5v0.5 H88.46c5.79,0,10.5,4.71,10.5,10.5L99,54.489c0.002,1.74-0.673,3.374-1.9,4.603c-0.34,0.341-0.712,0.64-1.108,0.894L95.96,80.527 c0,5.048-3.912,10.49-12.5,10.49H18.46z"
                opacity=".35"
              ></path>
              <path
                fill="#f2f2f2"
                d="M16.46,89.017c-5.79,0-10.5-4.71-10.5-10.5l0.031-20.548C4.197,56.813,3.004,54.798,3,52.511 L2.96,28.528c0-5.799,4.71-10.511,10.5-10.511h14.517v-0.5c0-5.79,4.71-10.5,10.5-10.5h23.008c5.79,0,10.5,4.71,10.5,10.5v0.5 H86.46c5.79,0,10.5,4.71,10.5,10.5L97,52.489c0.002,1.74-0.673,3.374-1.9,4.603c-0.34,0.341-0.712,0.64-1.108,0.894L93.96,78.527 c0,5.048-3.912,10.49-12.5,10.49H16.46z"
              ></path>
              <path
                fill="#9aa2e6"
                d="M86.461,24.517L66.711,25h-32.85l-17.4-0.483c-2.209,0-7,1.791-7,4L9.157,49.742l3.303,2.393 c0,1.657,0,26.382,0,26.382c0,2.209,1.791,4,4,4h65c4.209,0,6-1.791,6-4V52.5L90,52l0.461-23.483 C90.461,26.308,88.67,24.517,86.461,24.517z"
              ></path>
              <path
                fill="none"
                stroke="#40396e"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="3"
                d="M36.461,15.517h27v9h-27V15.517z M86.461,24.517H65.486v-7c0-2.209-1.791-4-4-4H38.477c-2.209,0-4,1.791-4,4v7H13.461 c-2.209,0-4,1.791-4,4L9.5,52.5h3l-0.039,26.017c0,2.209,1.791,4,4,4h65c4.209,0,6-1.791,6-4L87.5,52.5h3l-0.039-23.983 C90.461,26.308,88.67,24.517,86.461,24.517z"
              ></path>
              <rect
                width="4"
                height="10"
                x="33.961"
                y="16.017"
                fill="#40396e"
              ></rect>
              <rect
                width="4"
                height="10"
                x="61.961"
                y="16.017"
                fill="#40396e"
              ></rect>
              <rect
                width="29"
                height="3"
                x="34.961"
                y="14.017"
                fill="#40396e"
              ></rect>
              <rect
                width="79"
                height="3"
                x="10.5"
                y="51"
                fill="#40396e"
                opacity=".35"
              ></rect>
              <rect width="18" height="13" x="41" y="46" fill="#d9eeff"></rect>
              <rect
                width="7"
                height="12"
                x="46.5"
                y="46.5"
                fill="#9ba7c5"
                transform="rotate(90 50 52.5)"
              ></rect>
            </svg>
            <h2 style={{ marginLeft: "10px" }}>Portofolio</h2>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col
          lg={12}
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "auto",
            marginBottom: "10px",
          }}
        >
          <img src={gbr} style={{ width: "100%" }} alt="" />
          <div className="text" style={{ textAlign: "left" }}>
            <h4>Poliklink Udinus</h4>
            <p>Tool : React JS, Laravel</p>
          </div>
        </Col>
        <Col
          lg={12}
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "auto",
            marginBottom: "10px",
          }}
        >
          <img src={gbr1} style={{ width: "100%" }} alt="" />
          <div className="text" style={{ textAlign: "left" }}>
            <h4>Dibooking</h4>
            <p>Tool : MongoDb, React JS, Express JS, Node JS</p>
          </div>
        </Col>
        <Col
          lg={12}
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "auto",
            marginBottom: "10px",
          }}
        >
          <Button
            style={{
              width: "100%",
              backgroundColor: "white",
              color: "black",
              border: "2px solid black",
            }}
          >
            <Link
              className="navItem"
              style={{ textDecoration: "none", color: "black" }}
              to={"/Porto"}
            >
              View All Project
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
