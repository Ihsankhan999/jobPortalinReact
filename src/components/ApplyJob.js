import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Container } from "react-bootstrap";
import NavbarScreen from "./Navbar";
import Footer from "./Footer";
function ApplyJob() {
  const navigate = useNavigate();
  const handleJob = async (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const name = event.target.elements.name.value;
    const experience = event.target.elements.experience.value;
    const skills = event.target.elements.skills.value;
    const email = event.target.elements.email.value;
    const phone = event.target.elements.phone.value;

    const docRef = await addDoc(collection(db, "ApplyJob"), {
      title: title,
      name: name,
      experience: experience,
      skills: skills,
      phone: phone,
      email: email,
    });
    navigate("/Home");
  };

  return (
    <>
      <NavbarScreen />
      <Container
        fluid
        className="d-flex align-items-center justify-content-center vh-100 p-0 container m-0"
      >
        <Row className="mt-5">
          <Col>
            <Form onSubmit={handleJob}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your  Name"
                  name="title"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your  Name"
                  name="name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Experience</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Job Title"
                  name="experience"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Skills</Form.Label>
                <Form.Control as="textarea" rows={3} name="skills" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your  Name"
                  name="email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your  Name"
                  name="phone"
                />
              </Form.Group>

              <br />
              <Button variant="primary" type="submit">
                Apply Now
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ApplyJob;
