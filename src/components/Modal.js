import { animation } from "polished";
import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        transform: translate(0px);
    }
`;

const slideDown = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(200px);
    }
`;

const handleAnimationType = (animation, on) => {
  switch (animation) {
    case "fadeInAndOut":
      if (on) return fadeIn;
      else return fadeOut;
    case "slideUpAndDown":
      if (on) return slideUp;
      else return slideDown;
    default:
      if (on) return fadeIn;
      else return fadeOut;
  }
};

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  padding: 0 30px;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${({ animation }) => handleAnimationType(animation, 1)};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${({ animation }) => handleAnimationType(animation, 0)};
    `}
`;

const ModalBlock = styled.div`
  width: 100%;
  background: white;
  border-radius: 5px;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${({ animation }) => handleAnimationType(animation, 1)};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`animation-name${({ animation }) => handleAnimationType(animation, 0)}`}
`;

const ModalHeader = styled.div`
  width: 100%;
  padding: 20px 20px 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    font-size: 20px;
    font-weight: bolder;
    margin-right: 10px;
  }

  .subtitle {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.4);
  }
`;
