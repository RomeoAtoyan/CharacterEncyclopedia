import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Nav = () => {
  return (
    <Container>
      <Navbar className="my-5 rounded" expand="lg" variant="dark" bg="black">
        <h2 style={{ margin: "0 auto", color: "yellow" }}>
          Character Encyclopedia
        </h2>
      </Navbar>
    </Container>
  );
};

export default Nav;
