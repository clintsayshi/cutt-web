import { useState } from "react";
import { Link, history, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import ImageUploader from "../components/image-uploader";

const NewPost = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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

  const goHome = () => {
    history.push("/");
  };

  const addPost = () => {
    if (post.name && post.image) {
      dispatch({
        type: "ADD_POST",
        payload: post,
      });
      goHome();
    } else {
      console.log("add both image and name for post...");
    }
  };

  return (
    <div className="container">
      <Header>
        <Button onClick={goHome}>Cancel</Button>
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
