import { Link, useHistory } from "react-router-dom";
import {
  VscClose,
  VscArrowDown,
  VscTriangleLeft,
  VscTriangleRight,
} from "react-icons/vsc";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const PostModal = () => {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const history = useHistory();

  const closePost = () => {
    dispatch({
      type: "MODAL_OPEN",
      payload: false,
    });
  };

  const gotoProfile = () => {
    history.push("/");
    closePost();
  };

  console.log(post);

  return (
    <Modal className="container">
      <ImageContainer>
        <Header>
          <ProfileBtn onClick={gotoProfile}>{post.name}</ProfileBtn>
          <Close onClick={closePost}>
            <VscClose />
          </Close>
        </Header>
        <Image src={post.images} alt="" />
      </ImageContainer>
      <Nav>
        <Button>
          <VscTriangleLeft />
        </Button>
        <Button>
          <VscTriangleRight />
        </Button>
      </Nav>

      <ActionBtn>
        <VscArrowDown />
        <small>See more</small>
      </ActionBtn>
    </Modal>
  );
};

export default PostModal;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;

  z-index: 10;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: inherit;
  margin: 0;
  padding: 0;
`;

const Image = styled.img`
  display: block;
  object-fit: cover;
  height: 100%;
  width: inherit;
  padding: 0;
`;

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 0.5rem 1rem 0.5rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  display: block;
  height: 100%;
  width: 4rem;

  background: none;
  border: none;
  cursor: pointer;
`;

const ProfileBtn = styled(Button)`
  width: fit-content;
  &:hover {
    text-decoration: underline;
  }
`;

const Close = styled(Button)`
  height: fit-content;
  width: fit-content;
  padding: 0.5rem;
  font-size: 1.5rem;
`;

const Nav = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  //left: 0;
  padding: 1rem 0;
  //transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActionBtn = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;
  color: white;

  width: fit-content;
  height: fit-content;
  padding: 1.5rem;
`;
