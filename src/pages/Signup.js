import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Signup() {
  return (
    <SignupWrapper className="container">
      <Header>
        <h1>Sign up</h1>
        <p>for a Cutt account</p>
      </Header>
      <Form>
        <Input
          placeholder="Enter your First Name"
          type="text"
          max="10"
          autoComplete={false}
          required
        />
        <Input
          placeholder="Enter your Last Name"
          type="text"
          max={10}
          size={20}
          autoComplete={false}
          required
        />
        <Input
          placeholder="Enter your Email"
          type="text"
          max="10"
          autoComplete={false}
          required
        />
        <Input
          placeholder="Enter your Password"
          type="password"
          size={18}
          max={18}
          required
        />

        <Button type="submit">Sign up</Button>
      </Form>

      <Text>
        Already have an account? <Link to="/login">Sign in</Link>
      </Text>
    </SignupWrapper>
  );
}

// styled components
const SignupWrapper = styled.main`
  //border: 1px dotted blue;

  height: fit-content;

  @media (min-width: 769px) {
    padding: 0 6rem;
  }
`;
const Header = styled.header`
  margin: 1rem 0;
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
