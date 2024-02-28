import React from "react";
import { Container } from "react-bootstrap";
import { useAuth } from "../../contexts/authContext";

const HomePage = () => {
  const user = useAuth();

  console.log(user?.currentUser?.uid);

  return <Container className="m-5">HomePage</Container>;
};

export default HomePage;
