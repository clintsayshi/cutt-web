import { Link, useHistory } from "react-router-dom";
import { VscAdd, VscBell, VscAccount } from "react-icons/vsc";
import styled from "styled-components";

const Header = () => {
  const history = useHistory();
  const createPost = () => {
    history.push("/create-post");
  };
  const openProfile = () => {
    history.push("/profile");
  };

  return (
    <HeaderWrapper>
      <h2>Cutt</h2>

      <Nav>
        <Button onClick={createPost}>
          <VscAdd />
        </Button>
        <Button onClick={openProfile}>
          <VscAccount />
        </Button>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;

// styled components
const HeaderWrapper = styled.header`
  position: sticky;
  background-color: white;
  z-index: 5;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //padding: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  //border: 1px dotted blue;
`;
const Nav = styled.div`
  display: flex;
  column-gap: 0.75rem;
  align-items: center;
  //border: 1px dotted blue;
`;
const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.25rem 0.25rem;
  background: none;
  border: 2px solid transparent;
  cursor: pointer;

  line-height: 0;
  font-size: 1.5rem;
  color: black;
  font-weight: 500;

  &:hover {
    background-color: whitesmoke;
  }
`;

const AddBtn = styled(Button)`
  //border-color: black;
`;
