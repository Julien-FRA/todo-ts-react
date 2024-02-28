import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { userSignOut } from "../../utils/api/user.api";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

export const Header = () => {
  const user = useAuth();

  const handleLogOut = (e: any) => {
    e.preventDefault();

    userSignOut();
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar>
        <Navbar id="basic-navbar-nav">
          <Nav className="me-auto">
            {user?.userLoggedIn ? (
              <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
            ) : (
              <>
                <Nav.Link href="login">Login</Nav.Link>
                <Nav.Link href="register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
};
