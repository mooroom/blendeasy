import React from "react";
import Order from "../components/Order";

const page_info = {
  type: "coupang",
  title: "쿠팡으로 주문하기",
  places: [
    {
      url: "#",
      title: "대림1호점",
      addr: "서울시 영등포구 대림동 810-5 202호",
    },
    {
      url: "#",
      title: "대림1호점",
      addr: "서울시 영등포구 대림동 810-5 202호",
    },
    {
      url: "#",
      title: "대림1호점",
      addr: "서울시 영등포구 대림동 810-5 202호",
    },
    {
      url: "#",
      title: "대림1호점",
      addr: "서울시 영등포구 대림동 810-5 202호",
    },
    {
      url: "#",
      title: "대림1호점",
      addr: "서울시 영등포구 대림동 810-5 202호",
    },
    {
      url: "#",
      title: "대림1호점",
      addr: "서울시 영등포구 대림동 810-5 202호",
    },
  ],
};

function Order_C(props) {
  return (
    <Order
      type={page_info.type}
      title={page_info.title}
      places={page_info.places}
    />
  );
}

export default Order_C;
