import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Header from "../components/header";
import Section from "../components/section";
import Card from "../components/card";
import react from "../assets/if-you-are-reading-01.jpg";
import react1 from "../assets/clb-02.jpeg";

export default function Home() {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <>
      <Main className="container">
        <Header />
        {/* <HeaderWrapper>
          <h1>Welcome</h1>
        </HeaderWrapper> */}

        <Section>
          {posts &&
            React.Children.toArray(
              posts.map((post) => <Card post={post} home />)
            )}
        </Section>
      </Main>
    </>
  );
}

const HeaderWrapper = styled.header`
  margin: 1rem 0;
`;

const Main = styled.main`
  position: relative;
  padding: 0;
  //border: 1px dotted blue;
  //margin: 0;
`;
