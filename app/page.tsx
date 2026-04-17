import LoginForm from "./components/LoginForm";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto auto;
  padding: 5%;
  background-color: #F3F2EE;
  border: 3px solid #D97706;
  border-radius: 20px;
`;

const StyledH3 = styled.h3`
  font-size: xx-large;
  font-weight: bold;
  margin: 2% 0;
`;

export default function Home() {
  return (
    <StyledCard>
      <StyledH3>Log in to see more content</StyledH3>
      <LoginForm/>
    </StyledCard>
  );
}