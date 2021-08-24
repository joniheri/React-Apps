import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

// import components
import NavbarPublic from "../components/NavbarPublic";

// import image
import profile1 from "../img/profile1.jfif";

export default function About() {
  return (
    <div>
      <NavbarPublic />
      <Container style={{ marginTop: "100px" }}>
        <Row>
          <Col md={4}>
            <Card
              style={{
                background: "#2E2D2D",
                height: "600px",
                marginBottom: "15px",
              }}
            >
              <Card.Img
                variant="top"
                src={profile1}
                style={{ height: "300px", width: "auto", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#CBCECF" }}>Jon Heri</Card.Title>
                <Card.Text style={{ color: "#CBCECF", textAlign: "justify" }}>
                  I'm Fullstack Developer but prefer to Web Developer using
                  React JS. I'm interested in new technology such as React JS
                  Library to build Web App and React Native to build Mobile App.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <Card
              style={{
                background: "#2E2D2D",
                height: "600px",
                marginBottom: "15px",
              }}
            >
              <Card.Body>
                <Card.Title style={{ color: "#CBCECF" }}>
                  React Bootstrap Components
                </Card.Title>
                <Card.Text style={{ color: "#CBCECF", textAlign: "justify" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. I build this website with
                  React.JS and React-Bootstrap as CSS Template. In this website,
                  I use React-Bootstrap v4.6.x
                </Card.Text>
                <Card.Title style={{ color: "#CBCECF" }}>
                  Example Button From React-Bootstrap
                </Card.Title>
                <Button
                  variant="primary"
                  style={{ marginRight: "10px", marginBottom: "10px" }}
                >
                  primary
                </Button>
                <Button
                  variant="secondary"
                  style={{ marginRight: "10px", marginBottom: "10px" }}
                >
                  secondary
                </Button>
                <Button
                  variant="success"
                  style={{ marginRight: "10px", marginBottom: "10px" }}
                >
                  success
                </Button>
                <Button
                  variant="danger"
                  style={{ marginRight: "10px", marginBottom: "10px" }}
                >
                  danger
                </Button>
                <Button
                  variant="warning"
                  style={{ marginRight: "10px", marginBottom: "10px" }}
                >
                  warning
                </Button>
                <Button
                  variant="light"
                  style={{ marginRight: "10px", marginBottom: "10px" }}
                >
                  light
                </Button>
                <Button
                  variant="dark"
                  style={{ marginRight: "10px", marginBottom: "10px" }}
                >
                  dark
                </Button>
                <Button
                  variant="info"
                  style={{ marginRight: "10px", marginBottom: "10px" }}
                >
                  dark
                </Button>
                <br />
                <br />
                <br />
                <Card.Text style={{ color: "#CBCECF" }}>
                  If you want to try React-Boostrap,{" "}
                  <a
                    href="https://react-bootstrap.github.io/"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    Click Here
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
