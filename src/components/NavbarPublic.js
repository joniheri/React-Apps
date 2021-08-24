// importreact components
import React from "react";

// import react-router-dom
import { Link } from "react-router-dom";

// import Bootstrap components
import { Navbar, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";

export default function NavbarPublic() {
  return (
    <div style={{ marginBottom: "60px" }}>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
        className="shadow"
      >
        <Navbar.Brand as={Link} to="/">
          React.JS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" style={{ marginTop: "5px" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ marginTop: "5px" }}>
              About
            </Nav.Link>
            <NavDropdown
              title="Loading Pages"
              id="basic-nav-dropdown"
              style={{ marginTop: "5px" }}
            >
              <NavDropdown.Item as={Link} to="/loading1">
                Loading 1
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/loading2">
                Loading 2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/loading3">
                Loading 3
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/loading4">
                Loading 4
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/loading5">
                Loading 5
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              style={{ marginTop: "5px", width: "100%" }}
            />
          </Form>
          <Nav></Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
