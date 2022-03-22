import React from "react";
import styled from "styled-components";

import Badge from "./Badge";

const GridItemBlock = styled.div`
  position: relative;
`;

const GridItemImage = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 5px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

const GridItemText = styled.div`
  margin-top: 7px;
  font-size: 14px;
  font-weight: bold;
  padding: 0 5px;
`;

const GridItemSubText = styled.div`
  font-size: 13px;
  margin-top: 2px;
  padding: 0 5px;
  color: gray;
`;

const GridItem = ({ data, onClickItem }) => {
  const { setModal, setItem } = onClickItem;
  return (
    <GridItemBlock
      key={data.id}
      onClick={() => {
        setModal(true);
        setItem(data);
      }}
    >
      {data.best && <Badge text="BEST" />}
      <GridItemImage img={data.img} />
      <GridItemText>{data.name}</GridItemText>
      <GridItemSubText>{data.price}</GridItemSubText>
    </GridItemBlock>
  );
};

export default GridItem;
