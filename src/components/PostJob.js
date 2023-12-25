import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarScreen from "./Navbar";
import Footer from "./Footer";
function PostJob() {
  const navigate = useNavigate();
  const handleJob = async (event) => {
    event.preventDefault();

    const jobTitle = event.target.elements.jobtitle.value;
    const jobDescription = event.target.elements.jobdescription.value;
    const requiredLevel = event.target.elements.requiredLevel.value;
    const location = event.target.elements.location.value;

    const docRef = await addDoc(collection(db, "AllJobs"), {
      jobTitle: jobTitle,
      jobDescreption: jobDescription,
      level: requiredLevel,
      location: location,
    });
    navigate("/Home");
  };

  return (
    <>
      <NavbarScreen />
      <Container
        fluid
        className="d-flex align-items-center justify-content-center vh-100 p-0  m-0"
      >
        <Row className="mt-5">
          <Col>
            <Form onSubmit={handleJob}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Job Title"
                  name="jobtitle"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Job Description</Form.Label>
                <Form.Control as="textarea" rows={3} name="jobdescription" />
              </Form.Group>

              <Form.Label>Required career level for this job?</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="requiredLevel"
              >
                <option>Required career level for this job?</option>
                <option value="Intern/ Student">Intern/ Student</option>
                <option value="Entry Level">Entry Level</option>
                <option value="Expert">Expert</option>
              </Form.Select>

              <Form.Label>Job Location</Form.Label>
              <Form.Select aria-label="Default select example" name="location">
                <Form.Label>Job Location</Form.Label>
                <option>Job Location</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Lahore">Lahore</option>
                <option value="Peshawar">Peshawar</option>
              </Form.Select>

              <br />
              <Button variant="primary" type="submit">
                Post Job
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default PostJob;
