import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  // Input fields references
  const emailRef = useRef();
  const passwordRef = useRef();
  // Error handling
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  //
  const { signin } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(emailRef.current.value, passwordRef.current.value);
    // sign in on firebase

    setLoading(false);
  }

  return (
    <LoginWrapper className="container">
      <Header>
        <h1>Sign in</h1>
        <p>into your Cutt account</p>
      </Header>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Enter your username"
          type="text"
          max="10"
          autoComplete="false"
          ref={emailRef}
          required
        />
        <Input
          placeholder="Enter your password"
          type="password"
          autoComplete="false"
          max="18"
          ref={passwordRef}
          required
        />

        <Button type="submit">Sign in</Button>
      </Form>

      <Text>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </Text>
    </LoginWrapper>
  );
}

// styled components
const LoginWrapper = styled.main`
  position: relative;
  height: fit-content;
  top: 15%;

  @media (min-width: 769px) {
    padding: 0 6rem;
  }
`;
const Header = styled.header`
  margin-bottom: 2rem;
`;
const Form = styled.form`
  //border: 1px dotted blue;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1.5rem;
`;
const Input = styled.input`
  font-size: 1rem;
  font-weight: normal;
  font-family: "poppins", sans-serif;
  padding: 0.5rem 0.5rem;
  min-width: 100%;

  @media (min-width: 769px) {
    //min-width: 70%;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 20px;
  background-color: black;
  padding: 0.5rem 1.5rem;
  //font-weight: bold;
  font-size: 1rem;
  font-family: "poppins", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
`;

const Text = styled.p`
  margin-top: 1.5rem;
`;
