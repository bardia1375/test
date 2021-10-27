import React from "react";
import styled from "styled-components";
function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="./images/cta-logo-one.svg" />
        <SignUp>GETT ALL THERE</SignUp>
        <Description>Tout ce que vous imaginez et encore +</Description>
        <CTALogoTwo src="./images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;
const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: top;
 
  &:before {
    background-position: top;
    background-size: cover;
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-image: url("./images/login-background.jpg");
  }
`;
const CTA = styled.div`
  display: flex;
  flex-direction: column;
    // justify-content: center;
    // align-items: center;
  max-width: 650px;
 margin-top:170px;
  width: 90%;
`;

const CTALogoOne = styled.img`
  //   width: 70%;
`;
const SignUp = styled.a`
  background-color: #0063e5;
  color: white;
  border-radius:4px;
  padding: 17px 0;
  width: 100%;text-align:center;
  cursor:pointer;
  letter-spacing:1.5px;
  margin-top:8px;
  margin-bottom:12px;
  &:hover{
      background:#0483ee
  }
`;
const Description = styled.p`
font-size:11px;
letter-spacing:1.5px;
text-align:center;
line-height:1.5;
`;
const CTALogoTwo = styled(CTALogoOne)``;
