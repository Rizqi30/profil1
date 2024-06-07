import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function PreviewMe() {
  return (
    <Container
      fluid
      className="wrapper "
      style={{
        width: "100%",
        height: "45rem",
        margin: "auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container style={{ width: "100%" }}>
        <Row style={{ padding: "10px", justifyContent: "center" }}>
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
                d="M16.5,94.083c-1.734,0-3.365-0.675-4.593-1.9c-1.61-1.608-2.266-3.977-1.712-6.182l3.56-14.178 c0.294-1.171,0.905-2.232,1.77-3.074l56.008-56.143c1.732-1.735,4.035-2.69,6.485-2.69c2.455,0.001,4.757,0.958,6.487,2.694 l7.096,7.124c3.277,3.588,3.186,9.188-0.274,12.661L35.249,88.603c-0.462,0.463-0.985,0.849-1.557,1.152 c-0.429,0.232-0.93,0.428-1.448,0.56l-14.154,3.572C17.56,94.019,17.029,94.083,16.5,94.083z"
                opacity=".35"
              ></path>
              <path
                fill="#f2f2f2"
                d="M14.5,92.083c-1.734,0-3.365-0.675-4.593-1.9c-1.61-1.608-2.266-3.977-1.712-6.182l3.56-14.178 c0.294-1.171,0.905-2.232,1.77-3.074l56.008-56.143c1.732-1.735,4.035-2.69,6.485-2.69c2.455,0.001,4.757,0.958,6.487,2.694 l7.096,7.124c3.277,3.588,3.186,9.188-0.274,12.661L33.249,86.603c-0.462,0.463-0.985,0.849-1.557,1.152 c-0.429,0.232-0.93,0.428-1.448,0.56l-14.154,3.572C15.56,92.019,15.029,92.083,14.5,92.083z"
              ></path>
              <path
                fill="#f9b84f"
                d="M76.516,34.03L28.945,81.714L18.361,71.105l47.571-47.684L76.516,34.03z"
              ></path>
              <path
                fill="#f4665c"
                d="M84.721,22.033l-6.822-6.836c-1.037-1.041-2.726-1.041-3.765,0l-4.961,4.972l10.583,10.608 l4.965-4.968C85.76,24.766,85.76,23.078,84.721,22.033"
              ></path>
              <path
                fill="#9aa2e6"
                d="M65.625,23.721l3.538-3.554l10.59,10.608l-3.538,3.554L65.625,23.721z"
              ></path>
              <path
                fill="#fedeb3"
                d="M15.074,85.583l14.146-3.57L18.634,71.406L15.074,85.583z"
              ></path>
              <path
                fill="#40396e"
                d="M14.5,87.083c-0.393,0-0.775-0.154-1.06-0.438c-0.374-0.373-0.523-0.915-0.395-1.427l3.56-14.177 c0.071-0.282,0.221-0.532,0.426-0.726l56.042-56.177c0.786-0.788,1.832-1.222,2.945-1.222c0,0,0.001,0,0.002,0 c1.113,0,2.158,0.435,2.943,1.223l6.82,6.834c0.001,0,0.001,0.001,0.002,0.002c1.616,1.625,1.616,4.269,0,5.892L29.709,83.071 c-0.106,0.106-0.228,0.196-0.358,0.265c-0.105,0.057-0.219,0.102-0.338,0.132l-14.146,3.57 C14.746,87.068,14.622,87.083,14.5,87.083z M19.414,72.174l-2.848,11.341l11.311-2.854L83.659,24.75 c0.454-0.456,0.454-1.199,0-1.657l-6.82-6.835c-0.219-0.22-0.51-0.34-0.82-0.341h0c-0.311,0-0.602,0.121-0.821,0.341L19.414,72.174 z"
              ></path>
              <path
                fill="#40396e"
                d="M16.303,78.414L14.5,85.583l7.15-1.807L16.303,78.414z"
              ></path>
            </svg>
            <h2 style={{ marginLeft: "10px" }}>About Me</h2>
          </Col>
          <Col xs={9} md={10} sm={11}>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "400",
                textAlign: "justify",
                letterSpacing: "0",
                wordBreak: "break-all",
              }}
            >
              I'm Rizqi Akbar Hidayat, I live in Semarang, Central Java,
              Indonesia since i was born. Right now i'm a jobseeker. I study
              front-end development with React js and back-end development with
              Laravel. My goal is to make some apps (web based) and contribute
              to open source projects...
            </p>
            <Button style={{ fontSize: "20px", fontWeight: "500" }}>
              <Link
                className="navItem"
                style={{ textDecoration: "none", color: "white" }}
                to={"/About"}
              >
                See More
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default PreviewMe;
