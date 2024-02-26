import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { userSignIn } from "../../utils/api/user.api";

const LoginForm = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;

    const elements = form.elements;

    const email = elements.email.value;

    const password = elements.password.value;

    if (email && password) await userSignIn({ email, password });

    form.reset();
  };

  return (
    <Form className="m-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email address</Form.Label>
        <Form.Control type="email" id="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control type="password" id="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
