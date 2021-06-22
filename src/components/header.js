import { Link } from "react-router-dom";
import { VscAdd, VscBell, VscSearch } from "react-icons/vsc";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <h2>Cutt</h2>

      <Nav>
        <AddBtn>
          <Link to="/create_post">
            <VscAdd />
          </Link>
        </AddBtn>
        <Button>
          <Link to="search">
            <VscSearch />
          </Link>
        </Button>
        <Button>
          <Link to="/notifs">
            <VscBell />
          </Link>
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
  column-gap: 0.5rem;
  align-items: center;
  //border: 1px dotted blue;
`;
const Button = styled.button`
  border: none;
  border-radius: 5px;
  line-height: 0;
  padding: 0.25rem 0;
  background: none;
  border: 2px solid transparent;

  & > * {
    color: black;
    font-size: 1.25rem;
    font-weight: 500;
    padding: 0 0.25rem;
    border-radius: inherit;
    line-height: 0;
  }
`;

const AddBtn = styled(Button)`
  border: 2px solid black;
`;
