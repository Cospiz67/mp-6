import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Container = styled.div`
  background-color: #FAF9F6;
  display: flex;
  flex: 1 1 0;
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>OAuth Application</title>
      <body>
        <Wrapper>
          <Header/>
          <Container>
            {children}
          </Container>
          <Footer/>
        </Wrapper>
      </body>
    </html>
  );
}
