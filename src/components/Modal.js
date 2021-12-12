import { animation } from "polished";
import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

import CloseButton from "./CloseButton";
import CardContent from "./CardContent";
import Button from "./Button";
import ImagePlaceholder from "./ImagePlaceholder";
import { Link } from "react-router-dom";

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
  z-index: 99;

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
  overflow: hidden;

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
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title-con {
    display: flex;
    align-items: center;
  }

  .title {
    font-size: 20px;
    font-weight: 900;
    margin-right: 10px;
  }

  .subtitle {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.4);
  }
`;

const ModalBody = styled.div`
  width: 100%;
  height: 400px;
  overflow: auto;
  background: white;
  padding: 0 20px;

  &::-webkit-scrollbar {
    display: none;
  }

  img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 20px;
  }
`;

const ModalFooter = styled.div`
  width: 100%;
  padding: 20px;
`;

function Modal({ data, onCancel, visible }) {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!animate && !localVisible) return null;

  return (
    <DarkBackground disappear={!visible}>
      <ModalBlock disappear={!visible}>
        <ModalHeader>
          <div className="title-con">
            <div className="title">{data.name}</div>
            <div className="subtitle">{data.ename}</div>
          </div>
          <CloseButton onClickEvents={{ onCancel, setIsImageLoaded }} />
        </ModalHeader>
        <ModalBody>
          {!isImageLoaded && <ImagePlaceholder />}

          <img
            style={isImageLoaded ? { display: "block" } : { display: "none" }}
            src={data.img2}
            alt="img"
            onLoad={() => setIsImageLoaded(true)}
          />

          <CardContent color={data.color} info={data.info} story={data.story} />
        </ModalBody>
        <ModalFooter>
          <Link to="/order_b" style={{ textDecoration: "none" }}>
            <Button color={data.alias} size="large" fullWidth>
              주문하기
            </Button>
          </Link>
        </ModalFooter>
      </ModalBlock>
    </DarkBackground>
  );
}

export default Modal;
