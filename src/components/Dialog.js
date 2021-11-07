import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import Button from "./Button";

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
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
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const DialogBlock = styled.div`
  width: 100%;
  padding: 15px;
  padding-top: 20px;
  background: white;
  border-radius: 2px;
  .title {
    font-weight: bold;
    font-size: 18px;
  }
  p {
    font-size: 0.8rem;
  }

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

const PlaceCon = styled.div`
  width: 100%;
  height: 300px;
  overflow: auto;
`;

const PlaceBlock = styled.div`
  width: 100%;
  margin-bottom: 15px;
  .placeTitle {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .placeBox {
    padding: 15px;
    font-size: 14px;
    border-radius: 5px;
    background: #ededed;
  }
`;

function Dialog({ title, children, onCancel, visible, places }) {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    // visible 값이 true -> false 가 되는 것을 감지
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!animate && !localVisible) return null;
  return (
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
        <div className="title">{title}</div>
        <p>{children}</p>
        <PlaceCon>
          {places.map((place, index) => (
            <PlaceBlock key={index}>
              <div className="placeTitle">{place.title}</div>
              <div className="placeBox">{place.available}</div>
            </PlaceBlock>
          ))}
        </PlaceCon>

        <Button fullWidth size="large" color="gray" onClick={onCancel}>
          닫기
        </Button>
      </DialogBlock>
    </DarkBackground>
  );
}

Dialog.defaultProps = {
  confirmText: "확인",
  cancelText: "취소",
};

export default Dialog;
