import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { userSignIn } from "../../utils/api/user.api";
import { useAuth } from "../../contexts/authContext";
import { Navigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSignIn, setIsSignIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;

    if (!isSignIn) {
      await userSignIn({ email, password })
        .then(() => setIsSignIn(true))
        .catch(() => setErrorMessage("Echec de la connexion"));
    }

    form.reset();
  };

  return (
    <>
      {isSignIn && <Navigate to={"/"} replace={true} />}
      <h1 className="m-5">Page login</h1>
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
        {!isSignIn && <div className="my-3">{errorMessage}</div>}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
