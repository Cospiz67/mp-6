import { auth } from "@/auth";
import { redirect } from "next/navigation";
import styled from "styled-components";
import LogoutForm from "../components/LogoutForm";

const StyledPicture = styled.img`
`

export default async function HomePage(){
    const session = await auth();

    if(!session?.user)
        redirect("/"); //if no user is logged in then redirect to the login page
                        // prevent someone from directly accessing the /home page

    return(
        <>
            <h1>Hello {session.user.name}</h1>
            <StyledPicture src = {session.user.image ?? ""} alt = {session.user.image ?? "Profile picture of the user"}/>
            <LogoutForm/>
        </>
    )
}