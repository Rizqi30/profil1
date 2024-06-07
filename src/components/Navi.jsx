import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Route, Routes } from "react-router-dom";
import Moon from "../assets/moon.png";
import AboutPage from "../pages/AboutPage";
import IndexPage from "../pages/IndexPage";
function Navi() {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const judul = "<Rizqi/>";
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{
        overflow: "hidden",
        transition: "0.5s ease",
        backgroundColor: navBackground ? "#F9F2ED" : "white",
        paddingTop: "0",
        boxShadow: navBackground && " 0px 19px 38px -21px rgba(0,0,0,0.79)",
      }}
    >
      <Container>
        <Navbar.Brand className="navBrand">
          <>
            <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
              {judul}
            </Link>
          </>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ color: "black", marginTop: "10px" }}
        >
          <Nav className="me-auto">
            <Nav.Link className="navItem">
              <Link
                className="navItem"
                style={{ textDecoration: "none" }}
                to={"/About"}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link className="navItem">
              <Link
                className="navItem"
                style={{ textDecoration: "none" }}
                to={"/ExpEdu"}
              >
                Experience & Education
              </Link>
            </Nav.Link>
            <Nav.Link className="navItem">
              <Link
                className="navItem"
                style={{ textDecoration: "none" }}
                to={"/Porto"}
              >
                Portofolio
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navi;
