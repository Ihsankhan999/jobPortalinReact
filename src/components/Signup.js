import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Image } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const userCollectionRef = collection(db, "Users");
      const newUserDocRef = await addDoc(userCollectionRef, {
        name: name,
        email: email,
        password: password,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    navigate("/Login");
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center vh-100 p-0 container m-0"
    >
      <Row>
        <Col className="className='order-2 order-lg-1 d-flex flex-column align-items-center">
          <Form onSubmit={handleSignUp}>
            <h1>Sign Up </h1>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name </Form.Label>
              <Form.Control type="text" placeholder="Enter Name" name="name" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
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
            <div className="d-flex">
              <a href="/Login" className="p-2">
                Login
              </a>
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </div>
          </Form>
        </Col>
        <Col
          md="10"
          lg="6"
          className="order-1 order-lg-2 d-flex align-items-center"
        >
          <Image
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
}
