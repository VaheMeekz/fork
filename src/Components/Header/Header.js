import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { pages } from "../../Config/routes";
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">LOGO</Navbar.Brand>
          <Nav className="me-auto">
            {pages.map((i) => {
              return (
                <Nav.Link key={i.id}>
                  <NavLink exact to={i.path}>{i.name}</NavLink>
                </Nav.Link>
              );
            })}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
