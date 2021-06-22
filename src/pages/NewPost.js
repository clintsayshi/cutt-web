import { useState } from "react";
import { VscClose, VscFileMedia } from "react-icons/vsc";
import { FiScissors } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import img from "../assets/clb-03.jpeg";
import ImageUploader from "../components/image-uploader";

const NewPost = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [post, setPost] = useState({
    name: null,
    image: null,
  });

  const nameUpdate = (e) => {
    setPost((prev) => {
      return {
        ...prev,
        name: e.target.value,
      };
    });
  };

  const addPost = () => {
    if (post.name && post.image) {
      dispatch({
        type: "ADD_POST",
        payload: post,
      });
      console.log("Added");
    } else {
      console.log("add both image and name for post...");
    }
  };

  return (
    <div className="container">
      <Header>
        <h2>New cutt</h2>
        <PostBtn onClick={addPost}>Post</PostBtn>
      </Header>
      <PostContent>
        <TextInput
          placeholder="Enter Name of style"
          onChange={nameUpdate}
          type="text"
        />

        <ActionButtons>
          <ImageUploader setPost={setPost} />
        </ActionButtons>
      </PostContent>

      <Link to="/">Home</Link>
    </div>
  );
};

export default NewPost;

// styled components
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`;
const PostContent = styled.div`
  //border: 1px dotted blue;
  border-radius: 10px;
  background-color: white;
  padding: 0.5rem 0;
  margin-bottom: 0.25rem;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 0.25rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: normal;
  font-family: "poppins", sans-serif;
`;
const MediaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.5rem;
  //border: 1px dotted blue;
`;
const MediaItem = styled.figure`
  position: relative;
  width: 100px;
  border-radius: 10px;

  &:after {
    position: absolute;
    content: "";
    inset: 0;
    background-color: black;
    opacity: 0.5;
    border-radius: inherit;
  }
`;
const MediaItemImage = styled.img`
  max-width: 100%;
  display: block;
  border-radius: inherit;
  position: relative;
`;

const ActionButtons = styled.div`
  width: 100%;
  //border: 1px dotted blue;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: black;
  background-color: white;
  text-decoration: none;
`;

const PostBtn = styled(Button)`
  border-radius: 20px;
  padding: 0.5rem 1rem;
  background-color: black;
  font-family: "poppins", sans-serif;
  text-transform: uppercase;
  color: white;
  //font-weight: bold;
`;

const ActionButton = styled(Button)`
  padding: 0.5rem;
  line-height: 0;
  font-size: 1.5rem;
  background-color: white;
  border: 1px solid black;
`;

const RemoveBtn = styled.button`
  position: absolute;
  padding: 2px;
  right: 5px;
  top: 5px;
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 1rem;
  line-height: 0;
  background-color: black;
  box-shadow: 0 0 0.5px 0.5px #fff;
  z-index: 5;
`;
