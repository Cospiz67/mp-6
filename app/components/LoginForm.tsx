"use client";
import styled from "styled-components";
import { signIn } from "@/auth";

async function login(formData: FormData){
    const action = formData.get('action');
    await signIn(action, {redirectTo: "/home"}); //sign in with the value of the button so here github
}

export default function LoginForm(){
    return(
        <form action={login}>
            <button type = "submit" name = "action" value= "GitHub">Sign in with GitHub</button>
        </form>
    )
}