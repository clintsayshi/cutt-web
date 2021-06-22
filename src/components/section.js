import styled from "styled-components";

// styled components
const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
`;

const Section = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>;
};

export default Section;
