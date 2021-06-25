import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { VscGear } from "react-icons/vsc";

import avatar from "../assets/clb-03.jpeg";

export default function Profile() {
  const history = useHistory();

  return (
    <main className="container">
      <Header>
        <TopHeader>
          <Avatar src={avatar} alt="" />
          <Button onClick={() => history.push("/")}>
            <VscGear />
          </Button>
        </TopHeader>
      </Header>

      <Posts></Posts>
    </main>
  );
}

const Header = styled.header`
  border: 1px dotted blue;
`;

const TopHeader = styled.nav`
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;

const Button = styled.button`
  font-size: 2rem;
  line-height: 0;
  border: none;
  border: 1px dotted blue;
  padding: 0.5rem;
  background-color: transparent;
`;

const Section = styled.section`
  border: 1px dotted blue;
`;

const Posts = styled.div`
  border: 1px dotted blue;
  padding: 0.5rem 0;
`;
