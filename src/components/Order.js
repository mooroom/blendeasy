import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Dialog from "./Dialog";
import {
  Container,
  BtnContainer,
  BtnRow,
  PlaceBtn,
  ConfirmBtn,
  Header,
} from "./OrderStyles";
import backArrow from "../img/arrow_back.svg";
import { Link } from "react-router-dom";

function Order({ type, title, places }) {
  const [dialog, setDialog] = useState(false);
  const rows = places.reduce((rows, current, index) => {
    return (
      (index % 2 === 0
        ? rows.push([current, {}])
        : (rows[rows.length - 1][1] = current)) && rows
    );
  }, []);

  return (
    <>
      <Header color={type}>
        <Link style={{ display: "flex" }} to="/">
          <img src={backArrow} alt="backArrow" />
        </Link>
        <span>{title}</span>
      </Header>
      <Container>
        <BtnContainer>
          {rows.map((row, index) => (
            <BtnRow key={index}>
              {row.map((place, idx) => (
                <PlaceBtn
                  key={idx}
                  empty={place.title ? false : true}
                  onClick={() => window.open(place.url)}
                >
                  <div className="title">{place.title}</div>
                  <div className="addr">{place.addr}</div>
                </PlaceBtn>
              ))}
            </BtnRow>
          ))}
        </BtnContainer>
        <ConfirmBtn type={type} onClick={() => setDialog(true)}>
          주문가능 지역 확인
        </ConfirmBtn>
      </Container>
      <ThemeProvider
        theme={{
          palette: {
            blue: "#228be6",
            gray: "#495057",
            pink: "#f06595",
          },
        }}
      >
        <Dialog
          title="주문 가능지역확인"
          cancelText="닫기"
          onCancel={() => setDialog(false)}
          visible={dialog}
          places={places}
        >
          주문가능 지역 리스트
        </Dialog>
      </ThemeProvider>
    </>
  );
}

export default Order;
