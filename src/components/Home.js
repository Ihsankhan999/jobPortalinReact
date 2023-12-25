import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BG from "../Images/bg.png";
import NavbarScreen from "./Navbar";
import Footer from "./Footer";

function Home() {
  const [cardData, setCardData] = useState([]);
  let navigate = useNavigate();

  const handleApplyJobNav = () => {
    navigate("/ApplyJob");
  };

  useEffect(() => {
    (async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "AllJobs"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        setCardData(data);
      } catch (err) {
        console.log("Error occurred when fetching data", err);
      }
    })();
  }, []);

  return (
    <>
      <NavbarScreen />
      <Row className="d-flex flex-row bd-highlight m-5">
        <Col xs={12} md={6}>
          <Image src={BG} fluid />
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex flex-row bd-highlight mb-3 justify-content-center align-items-center"
        >
          <h1 className="mt-5 text-center landingText">
            Find a job that suits your interest & skills.
          </h1>
        </Col>
      </Row>
      <Row className="jobsbackrground">
        <Col className="mb-3 g-4 d-flex justify-content-center align-items-center">
          <h1 className="jobHeading">Jobs</h1>
        </Col>
      </Row>
      <Row xs={1} sm={2} md={3} lg={4} className="jobsbackrground">
        {cardData.map((data, index) => (
          <Col
            key={index}
            className="mb-3 g-4 d-flex justify-content-center align-items-center"
          >
            <Card border="secondary" style={{ width: "18rem" }}>
              <Card.Header>Job Title: {data.jobTitle}</Card.Header>
              <Card.Body>
                <Card.Title>Job Description: {data.jobDescreption}</Card.Title>
                <Card.Text>Experience: {data.level}</Card.Text>
                <Card.Text>Location: {data.location}</Card.Text>
                <Button className="bg-success" onClick={handleApplyJobNav}>
                  Apply
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Footer />
    </>
  );
}

export default Home;
