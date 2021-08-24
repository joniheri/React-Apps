import React from "react";

// import bootstrap components
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";

// import components
import NavbarPublic from "../components/NavbarPublic";

// import img
import Walpaper1 from "../img/walpaper1.png";
import Walpaper2 from "../img/walpaper2.png";
import Walpaper3 from "../img/walpaper3.png";

export default function BerandaPublic() {
  return (
    <div>
      <NavbarPublic />
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Walpaper1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Walpaper2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Walpaper3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container style={{ marginTop: "50px" }}>
        <center style={{ marginBottom: "50px" }}>
          <h1 style={{ color: "#CBCECF" }}>Welcom To My Web</h1>
        </center>
        <Row>
          <Col md={4}>
            <Card
              style={{
                background: "#2E2D2D",
                marginBottom: "15px",
              }}
            >
              <Card.Img
                variant="top"
                src={Walpaper1}
                style={{ height: "300px", width: "auto", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#CBCECF" }}>Card Title</Card.Title>
                <Card.Text style={{ color: "#CBCECF" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              style={{
                background: "#2E2D2D",
                marginBottom: "15px",
              }}
            >
              <Card.Img
                variant="top"
                src={Walpaper2}
                style={{ height: "300px", width: "auto", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#CBCECF" }}>Card Title</Card.Title>
                <Card.Text style={{ color: "#CBCECF" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              style={{
                background: "#2E2D2D",
                marginBottom: "15px",
              }}
            >
              <Card.Img
                variant="top"
                src={Walpaper3}
                style={{ height: "300px", width: "auto", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#CBCECF" }}>Card Title</Card.Title>
                <Card.Text style={{ color: "#CBCECF" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
