import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";
import bingwatcherMain from "../../pages/bingewatcher/bingewatcherMain";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/bingewatcherMain">
          Bored Bingewatcher
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/shows" className="custom-nav-link">
              Search for Shows
            </Link>
            <Link to="/watchlist" className="custom-nav-link">
              Watchlist
            </Link>
            <Link to="/finished" className="custom-nav-link">
              Finished
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
