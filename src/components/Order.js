import React from "react";
import {
  Container,
  Title,
  BtnContainer,
  BtnRow,
  PlaceBtn,
  ConfirmBtn,
} from "./OrderStyles";

function Order({ type, title, places }) {
  const rows = places.reduce((rows, current, index) => {
    return (
      (index % 2 === 0 ? rows.push([current]) : rows.at(-1).push(current)) &&
      rows
    );
  }, []);

  return (
    <Container>
      <Title>{title}</Title>
      <BtnContainer>
        {rows.map((row, index) => (
          <BtnRow key={index}>
            {row.map((place, idx) => (
              <PlaceBtn key={idx} onClick={() => window.open(place.url)}>
                <div className="title">{place.title}</div>
                <div className="addr">{place.addr}</div>
              </PlaceBtn>
            ))}
          </BtnRow>
        ))}
      </BtnContainer>
      <ConfirmBtn type={type}>주문가능 지역 확인</ConfirmBtn>
    </Container>
  );
}

export default Order;
