import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #F3F2EE;
`
const StyledH1 = styled.h1`
  font-size: calc(2px + 2.5vw);
  font-weight:bold;
  padding: 2% 2% 0;
`
const StyledH3 = styled.h3`
  font-size: calc(2px + 1vw);
  padding: 0 2% 2%;
`
export default function Header(){
    return(
        <StyledHeader>
          <StyledH1>OAuth Application</StyledH1>
          <StyledH3>Sign in with your account</StyledH3>
        </StyledHeader>
    )
}