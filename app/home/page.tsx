import { auth } from "@/auth";
import { redirect } from "next/navigation";
import styled from "styled-components";
import LogoutForm from "../components/LogoutForm";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto auto;
  padding: 3%;
  background-color: #F3F2EE;
  border: 3px solid #D97706;
  border-radius: 20px;
  place-items: center;
*`;

const StyledH3 = styled.h3`
  font-size: xx-large;
  font-weight: bold;
  margin: 2% 0;
`;

const StyledPicture = styled.img`
    border: 3px solid #D97706;
    border-radius: 20px;
    max-width: 200px;
    margin: 3% 0;
`

export default async function HomePage(){
    const session = await auth();

    if(!session?.user)
        redirect("/"); //if no user is logged in then redirect to the login page
                        // prevent someone from directly accessing the /home page

    return(
        <StyledCard>
            <StyledH3>Hello {session.user.name}</StyledH3>
            <p>Your email: {session.user.email}</p>
            <StyledPicture src = {session.user.image ?? ""} alt = {session.user.image ?? "Profile picture of the user"}/>
            <LogoutForm/>
        </StyledCard>
    )
}