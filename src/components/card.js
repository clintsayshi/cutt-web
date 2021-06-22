import styled from "styled-components";

import { useDispatch } from "react-redux";

function Card({ home, post }) {
  const dispatch = useDispatch();

  const openPost = () => {
    dispatch({
      type: "MODAL_OPEN",
      payload: true,
    });
    dispatch({
      type: "POST_UPDATE",
      payload: {
        media: post.image,
        name: post.name,
      },
    });
  };

  return (
    <CardWrapper onClick={openPost} home={home}>
      <Image src={post.image} alt="" />
      <Name>{post.name}</Name>
    </CardWrapper>
  );
}

export default Card;

// components
const CardWrapper = styled.button`
  border: none;
  background: none;
  outline: none;
  border-radius: 1rem;
  position: relative;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 100%;
  height: 30em;
  cursor: pointer;
  box-shadow: 0px 0px 0px 1rem #fff inset;
  &:focus-visible {
    outline-style: dashed;
    outline-width: 2px;
    outline-color: #fff;
  }

  @media (min-width: 600px) {
    max-width: ${({ home }) => (home ? "48%" : "100%")};
  }

  &:after {
    position: absolute;
    content: "";
    inset: 0;
    border-radius: inherit;
    background-color: #000;
    opacity: 0.6;
  }
`;
const Image = styled.img`
  border-radius: inherit;
  width: 100%;
  max-width: 100%;
  height: inherit;
  position: relative;
  display: block;
  object-fit: cover;
  object-position: center;
  padding: 0;

  //border: 1px dotted blue;
`;
const Name = styled.h5`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  width: inherit;
  font-weight: 400;
  font-size: 1rem;
  color: #fff;
  text-overflow: ellipsis;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  z-index: 3;
  //border: 1px dotted blue;
`;
