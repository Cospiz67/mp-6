"use client";
import styled from "styled-components";
import { logout } from "../actions/actions";

export default function LogoutForm(){
    return(
        <form action={logout}>
            <button type = "submit">Log Out</button>
        </form>
    )
}