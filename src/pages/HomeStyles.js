import React from "react";
import styled, { css } from "styled-components";
import headerBg from "../img/bg_header.png";

export const Header = styled.div`
  position: relative;
  width: 100%;
  height: 225px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-image: url(${headerBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  position: relative;

  img {
    width: 60px;
    margin-bottom: 20px;
  }

  span {
    color: white;
    font-family: condor, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 22px;
  }
`;

export const Content = styled.div`
  background: white;
  position: absolute;
  top: 195px;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 30px 30px 0 0;
  padding: 30px;
  overflow: auto;

  .title {
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
    `;
  }}
`;

export const PlatformButton = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  & + & {
    margin-top: 20px;
  }

  img {
    height: 30px;
  }

  ${colorStyles}
`;
