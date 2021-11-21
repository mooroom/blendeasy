import React from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  flex-direction: row;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const SliderItem = styled.div`
  flex-shrink: 0;

  & + & {
    margin-left: 10px;
  }
`;

const SliderItemImage = styled.div`
  width: 100px;
  height: 170px;
  border-radius: 5px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

const SliderItemText = styled.div`
  margin-top: 7px;
  font-size: 14px;
  font-weight: bold;
  padding: 0 5px;
`;

const Slider = ({ data }) => {
  return (
    <SliderContainer>
      {data.map((item) => (
        <SliderItem>
          <SliderItemImage img={item.img} />
          <SliderItemText>{item.name}</SliderItemText>
        </SliderItem>
      ))}
    </SliderContainer>
  );
};

export default Slider;
