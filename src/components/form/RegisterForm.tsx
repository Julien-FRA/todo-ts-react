import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { userSignUp } from "../../utils/api/user.api";
import { Navigate, redirect } from "react-router-dom";

const RegisterForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;

    if (!isSignUp) {
      await userSignUp({ email, password })
        .then(() => setIsSignUp(true))
        .catch(() => setErrorMessage("Echec lors du register"));
    }

    form.reset();
  };

  return (
    <>
      {isSignUp && <Navigate to={"/login"} replace={true} />}
      <h1 className="m-5">Page register</h1>
      <Form className="m-5" onSubmit={handleSubmit}>
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
        {!isSignUp && <div className="my-3">{errorMessage}</div>}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default RegisterForm;
