import React from "react";
import Order from "../components/Order";

const page_info = {
  type: "baemin",
  title: "배민으로 주문하기",
  places: [
    {
      url: "#",
      title: "강남1호점",
      addr: "서울시 영등포구 대림동 810-5 202호",
      available:
        "대림 1동, 대림 2동, 대림 3동, 구로 1동, 구로 2동, 가리봉동, 영등포, 신도림역",
    },
    {
      url: "#",
      title: "강남2호점",
      addr: "서울시 영등포구 대림동 810-5 202호",
      available:
        "신촌 1동, 신촌 2동, 신촌 3동, 구로 1동, 구로 2동, 가리봉동, 영등포, 신도림역",
    },
    {
      url: "#",
      title: "강남3호점",
      addr: "서울시 영등포구 대림동 810-5 202호",
      available:
        "이대 1동, 이대 2동, 이대 3동, 이대 1동, 구로 2동, 가리봉동, 영등포, 신도림역",
    },
    {
      url: "#",
      title: "대림4호점",
      addr: "서울시 영등포구 대림동 810-5 202호",
      available:
        "대림 1동, 대림 2동, 대림 3동, 구로 1동, 구로 2동, 가리봉동, 영등포, 신도림역",
    },
    {
      url: "#",
      title: "대림1호점",
      addr: "서울시 영등포구 대림동 810-5 202호",
      available:
        "신촌 1동, 신촌 2동, 신촌 3동, 구로 1동, 구로 2동, 가리봉동, 영등포, 신도림역",
    },
    {
      url: "#",
      title: "대림1호점",
      addr: "서울시 영등포구 대림동 810-5 202호",
      available:
        "이대 1동, 이대 2동, 이대 3동, 이대 1동, 구로 2동, 가리봉동, 영등포, 신도림역",
    },
  ],
};

function Order_B(props) {
  return (
    <Order
      type={page_info.type}
      title={page_info.title}
      places={page_info.places}
    />
  );
}

export default Order_B;
