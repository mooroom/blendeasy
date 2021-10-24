import React from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import bg from "../img/bg.jpg";
import logo from "../img/logo.svg";
import logo_coupang from "../img/logo_coupang_w.png";
import logo_baemin from "../img/logo_baemin_w.png";

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${bg});
    background-position: left;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Nav = styled.div`
  position: fixed;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    height: 30px;
  }
`;

const TextCon = styled.div`
  position: absolute;
  top: 100px;
  left: 20px;

  h1 {
    font-family: condor, sans-serif;
    font-weight: 400;
    font-style: normal;
    opacity: 0;
  }

  h1.first {
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
  }

  h1.second {
    animation-delay: 1s;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
  }
`;

const BtnCon = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const DeliveryBtn = styled.button`
  outline: none;
  border-style: none;
  background: black;
  color: white;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 20px;
  }

  /* & + & {
    margin-top: 10px;
  } */
`;

function Home(props) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Nav>
          <img src={logo} alt="logo" />
        </Nav>
        <TextCon>
          <h1 className="first">Take it easy,</h1>
          <h1 className="second">blendeasy.</h1>
        </TextCon>
        <BtnCon>
          <Link to="/order_b">
            <DeliveryBtn>
              <img src={logo_baemin} alt="baemin" />
            </DeliveryBtn>
          </Link>

          <Link to="order_c">
            <DeliveryBtn>
              <img src={logo_coupang} alt="coupang" />
            </DeliveryBtn>
          </Link>
        </BtnCon>
      </Container>
    </>
  );
}

export default Home;
