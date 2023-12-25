import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavbarScreen from "./Navbar";
import Footer from "./Footer";
import { collection, getDocs } from "firebase/firestore";
import Table from "react-bootstrap/Table";
import { db } from "./firebase";

function Candidates() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "ApplyJob"));
        const cardData = [];

        querySnapshot.forEach((doc) => {
          cardData.push(doc.data());
        });

        setCandidates(cardData);
      } catch (err) {
        console.error("Error occurred when fetching data", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="candidatesContainer">
      <>
        <NavbarScreen />
        <Container className="tableContainer">
          <h2>All Candidates</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Job Title</th>
                <th>Name</th>
                <th>Skills</th>
                <th>Experience</th>
                <th>Email Address</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.title}</td>
                  <td>{data.name}</td>
                  <td>{data.skills}</td>
                  <td>{data.experience}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
        <Footer />
      </>
    </div>
  );
}

export default Candidates;
