import React from "react";
import styled from "styled-components";

const CloseIcon = styled.div`
  position: relative;
  width: 14px;
  height: 14px;

  &:before,
  &:after {
    position: absolute;
    left: 6px;
    content: "";
    height: 15px;
    width: 2px;
    background: #cbcbcb;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

function CloseButton({ onClickEvents }) {
  return (
    <CloseIcon
      onClick={() => {
        onClickEvents.onCancel();
        onClickEvents.setIsImageLoaded(false);
      }}
    />
  );
}

export default CloseButton;
