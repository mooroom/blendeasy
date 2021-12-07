import Reac from "react";
import styled from "styled-components";

import Badge from "./Badge";

const SliderContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  position: relative;

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

const SliderItemSubText = styled.div`
  font-size: 13px;
  margin-top: 2px;
  padding: 0 5px;
  color: gray;
`;

const Slider = ({ data, onClickItem }) => {
  const { setModal, setItem } = onClickItem;
  return (
    <SliderContainer>
      {data.map((item) => (
        <SliderItem
          onClick={() => {
            setModal(true);
            setItem(item);
          }}
        >
          {item.best && <Badge text="BEST" />}
          <SliderItemImage img={item.img} />
          <SliderItemText>{item.name}</SliderItemText>
          <SliderItemSubText>{item.price}</SliderItemSubText>
        </SliderItem>
      ))}
    </SliderContainer>
  );
};

export default Slider;
