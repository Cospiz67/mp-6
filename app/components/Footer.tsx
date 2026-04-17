import styled from "styled-components";
import Link from "next/link";

const StyledDiv = styled.div`
    background-color: #F3F2EE;
    padding: 1%;
    text-align: center;
`;

export default function Footer(){
    return(
        <StyledDiv>
            <p>
              All Rights Reserved by Jeanne Durand&nbsp;
              <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">
                CC BY-NC-SA 4.0
              </Link>
              &nbsp;&copy;
            </p>
        </StyledDiv>
    )
}