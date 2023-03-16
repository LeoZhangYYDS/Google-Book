////Child of => App.jsx

import React, { useState } from "react";
import { Form, Container, Nav, Navbar, Button } from "react-bootstrap";
//icons
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { GiBookmarklet } from "react-icons/gi";

function ColorSchemesExample(props) {
  const { handleClick } = props;
  //input value and on click set new value
  const [value, setValue] = useState("");

  //reset input value
  const changeClick = (e) => {
    setValue(e.target.value);
  };
  return (
    <Navbar expand="lg" className="nav">
      <Container fluid className="container">
        {/* logo */}
        <Navbar.Brand href="/">
          <GiBookmarklet className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="collapse">
          <Nav
            className="me-auto my-2 my-lg-0 ul"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* home */}
            <Nav.Link href="/" className="li">
              <AiOutlineHome className="icon" />
              Home
            </Nav.Link>

            {/* cart */}
            <Nav.Link href="/cart" className="li">
              <AiOutlineShoppingCart className="icon" />
              Cart
            </Nav.Link>

            {/* login */}
            <Nav.Link href="/login" className="li">
              <BsPeople className="icon" />
              login
            </Nav.Link>
          </Nav>

          {/* change search box input value */}
          <Form className="d-flex form">
            <Form.Control
              placeholder="Search"
              className="input"
              onChange={changeClick}
            />

            {/* setQuery on Button click */}
            <Button variant=" button" onClick={() => handleClick(value)}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;
