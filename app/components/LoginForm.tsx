"use client";
import styled from "styled-components";
import { login } from "../actions/actions";

export default function LoginForm(){
    return(
        <form action={login}>
            <button type = "submit" name = "action" value= "GitHub">Sign in with GitHub</button>
        </form>
    )
}