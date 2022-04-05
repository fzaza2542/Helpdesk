import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.css"

class Navigation extends Component {
  render() {
    return (
      <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/" className="ms-5">
          Helpdesk
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-5">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/admin">Admin Ticket</Nav.Link>
            <Nav.Link href="/add">Add Ticket</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}
export default Navigation;
