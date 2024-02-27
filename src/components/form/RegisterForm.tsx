import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { userSignUp } from "../../utils/api/user.api";
import { redirect } from "react-router-dom";

const RegisterForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;

    if (!isSignIn) {
      await userSignUp({ email, password })
        .then(() => setIsSignIn(true))
        .catch((err) => console.log(err));
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        {isSignIn && <Alert variant="success">Insciption validé</Alert>}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterForm;
