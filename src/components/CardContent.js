import styled from "styled-components";

const CardInfoBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  & + & {
    margin-top: 10px;
  }
`;

const CardInfoItem = styled.div`
  width: 70px;
  padding: 5px;
  color: white;
  background: ${(props) => props.keyColor};
  margin-right: 10px;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
`;

const CardInfoItemValue = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const CardInfo = ({ itemName, itemValue, itemColor }) => (
  <CardInfoBlock>
    <CardInfoItem keyColor={itemColor}>{itemName}</CardInfoItem>
    <CardInfoItemValue>{itemValue}</CardInfoItemValue>
  </CardInfoBlock>
);

const CardStory = styled.div`
  width: 100%;
  font-weight: normal;
  font-size: 15px;
  margin-top: 20px;
  line-height: 24px;
`;

const renderInfo = (color, info) => {
  const items = [];
  for (const prop in info) {
    let propName;
    if (prop === "abv") {
      propName = "도수";
    } else if (prop === "rcmndBase") {
      propName = "추천주류";
    } else if (prop === "recipe") {
      propName = "레시피";
    }

    items.push(
      <CardInfo
        key={prop}
        itemName={propName}
        itemValue={info[prop]}
        itemColor={color}
      />
    );
  }

  return items;
};

function CardContent({ color, info, story }) {
  return (
    <>
      {renderInfo(color, info)}
      <CardStory>{story}</CardStory>
    </>
  );
}

export default CardContent;
