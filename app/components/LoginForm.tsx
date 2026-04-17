"use client";
import styled from "styled-components";
import { login } from "../actions/actions";

const StyledButton = styled.button`
    background-color: #656665;
    color: #F3F2EE;
    border: 3px solid #D97706;
    border-radius: 20px;
    padding: 1% 8%;
    display: flex;
    align-items: center;

    
    &:hover{
        background-color: #827761;
        cursor: pointer;
    }
`;

const StyledImg = styled.img`
    max-width: 40px;
    max-height: 40px;
    padding-right: 2%;
`;

export default function LoginForm(){
    return(
        <form action={login}>
            <StyledButton type = "submit" name = "action" value= "GitHub">
                <StyledImg src = "/github.png" alt="GitHub image"></StyledImg>
                Sign in with GitHub
            </StyledButton>
        </form>
    )
}