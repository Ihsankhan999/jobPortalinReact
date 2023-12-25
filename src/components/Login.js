import React, { useState } from "react";
import { getDocs } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Image } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { db } from "./firebase";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const querySnapshot = await getDocs(collection(db, "Users"));
    const cardData = [];
    console.log(cardData);
    querySnapshot.forEach((doc) => {
      cardData.push(doc.data());
    });

    const user = cardData.find(
      (text) => text.email === email && text.password === password
    );

    if (user) {
      navigate("/Layout");
    } else {
      alert("Not Found");
    }
  };

  return (
    <div>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center vh-100 p-0 container m-0"
      >
        <Row>
          <Col col="10" md="6">
            <Image
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid"
              alt="Sample image"
            />
          </Col>
          <Col className="d-flex flex-row align-items-center justify-content-center">
            <Form onSubmit={handleLogin}>
              <h1>Login</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login In
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
