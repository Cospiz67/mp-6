"use server";
import { signIn, signOut } from "@/auth";

export async function login(formData: FormData){
    const provider = formData.get('action') as string;
    await signIn('github', {redirectTo: "/home"}); //sign in with the value of the button so here github
}

export async function logout(){
    await signOut({redirectTo: "/"});
}