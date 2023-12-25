// Navbar.js
import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./style.css";

import Nav from "react-bootstrap/Nav";

function NavbarScreen() {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/Login");
  };
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/Home">Job Huntly</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Candidates">Condidates</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>

          <div className="d-flex align-items-end">
            <Navbar.Brand
              className="logout Upbtn bg-danger  border border-danger"
              onClick={handleLogout}
            >
              Logout
            </Navbar.Brand>
            <Navbar.Brand href="/postjob" className="postjobbtn">
              Post a Jobs
            </Navbar.Brand>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarScreen;
