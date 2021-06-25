import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { useAuth } from "../contexts/AuthContext";
import { v4 as uuidv4 } from "uuid";

export default function Signup() {
  // Input fields references here
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nameRef = useRef();
  // error handling
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const passwordCheck = () => {};

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    console.log(emailRef.current.value, passwordRef.current.value);
    // signup on firebase

    setLoading(false);
  }

  return (
    <SignupWrapper className="container">
      {error && alert(error)}

      <Header>
        <h1>Sign up</h1>
        <p>for a Cutt account</p>
      </Header>

      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Label htmlFor="name">Name</Label>
          <Input
            placeholder="Enter your Name"
            id="name"
            type="text"
            ref={nameRef}
            autoComplete="false"
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="Enter your Email"
            id="email"
            type="text"
            ref={emailRef}
            autoComplete="false"
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="password">Password</Label>
          <Input
            placeholder="Enter your Password"
            id="password"
            type="password"
            ref={passwordRef}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="password-confirm">Confirm your password</Label>
          <Input
            placeholder="Enter your Password Again"
            id="password-confirm"
            type="password"
            ref={passwordConfirmRef}
            required
          />
        </InputWrapper>

        <Button disabled={loading} type="submit">
          Sign up
        </Button>
      </Form>

      <Text>
        Already have an account? <Link to="/login">Sign in</Link>
      </Text>
    </SignupWrapper>
  );
}

// styled components
const SignupWrapper = styled.main`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.header`
  margin: 1rem 0;
  width: inherit;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  width: inherit;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  //padding: 0.5rem 0;
`;

const Input = styled.input`
  border: none;
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  background-color: whitesmoke;

  font-size: 1rem;
  font-weight: normal;
  font-family: "poppins", sans-serif;
`;

const Button = styled.button`
  width: 100%;
  max-width: 400px;
  border: none;
  border-radius: 6px;
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

/* 

const emailKey = uuidv4();
    const passwordKey = uuidv4();
    window.sessionStorage.setItem(passwordKey, passwordRef.current.value);
    window.sessionStorage.setItem(emailKey, emailRef.current.value);
    dispatch({
      type: "SET_PASSWORD",
      payload: passwordKey,
    });
    dispatch({
      type: "SET_EMAIL",
      payload: emailKey,
    });

*/
