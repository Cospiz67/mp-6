"use client";
import styled from "styled-components";
import { logout } from "../actions/actions";

const StyledButton = styled.button`
    background-color: #656665;
    color: #F3F2EE;
    border: 3px solid #D97706;
    border-radius: 20px;
    padding: 1% 8%;
    display: flex;
    align-items: center;
    white-space: nowrap;

    
    &:hover{
        background-color: #827761;
        cursor: pointer;
    }
`;

const StyledImg = styled.img`
    max-width: 40px;
    max-height: 40px;
    padding-left: 10%;
`;

export default function LogoutForm(){
    return(
        <form action={logout}>
            <StyledButton type = "submit">Log Out
                <StyledImg src= "/logout.svg" alt="Log out"></StyledImg>
            </StyledButton>
        </form>
    )
}