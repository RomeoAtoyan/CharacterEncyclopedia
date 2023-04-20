import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Nav = () => {
  return (
    <Container>
      <Navbar
        style={{
          background: "rgba(255, 255, 255, 0)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(7.3px)",
          bkitBackdropFfilter: " blur(7.3px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          padding: "15px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
        className="my-5 navbar-container"
        expand="lg"
        variant="dark"
      >
        <h2 style={{ margin: "0 auto", color: "yellow" }}>
          Universes Unleashed
        </h2>
      </Navbar>
    </Container>
  );
};

export default Nav;
