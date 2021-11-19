import React from "react";
import Order from "../components/Order";

const page_info = {
  type: "baemin",
  title: "배민으로 주문",
  places: [
    {
      url: "https://baemin.me/5HH4tgncP",
      title: "관악점(본점)",
      addr: "서울특별시 관악구 관악로 287, 지하 2층",
      available:
        "상도1동, 상도2동, 상도3동, 상도4동, 청룡동, 낙성대동, 행운동, 인헌동, 성현동, 중앙동, 은천동, 청림동, 노량진1동, 노량진2동, 대방동, 흑석동, 신대방2동, 보라매동, 신림동, 신사동, 신원동, 서원동, 서림동, 사당1동, 사당2동, 사당3동, 사당4동, 사당5동",
    },
    {
      url: "https://baemin.me/Qh9WGixYT",
      title: "논현점",
      addr: "서울특별시 강남구 봉은사로29길 35, 지하 2층",
      available:
        "반포3동, 잠원동, 논현1동, 논현2동, 신사동, 압구정동, 반포한강공원, 잠원한강공원",
    },
    // {
    //   url: "https://baemin.me/bp03aYQOe",
    //   title: "서초점",
    //   addr: "서울특별시 서초구 서초대로 350, 지하 1층",
    //   available:
    //     "방배3동, 서초1동, 서초2동, 서초3동, 서초4동, 역삼1동, 역삼2동, 도곡1동, 도독2동, 양재1동",
    // },
    {
      url: "https://baemin.me/d3Svbv9Ug",
      title: "방배점",
      addr: "서울특별시 관악구 창림6길 3, 제지1층",
      available: "방배본동, 방배1동, 방배2동, 방배3동",
    },
    // {
    //   url: "https://baemin.me/rmXnSn9EA",
    //   title: "삼성점",
    //   addr: "서울특별시 강남구 테헤란로83길 11, 지하2층",
    //   available:
    //     "대치1동, 대치2동, 대치3동, 대치4동, 일원1동, 일원2동, 개포2동, 삼성1동, 삼성2동, 청담동, 잠실본동, 잠실2동, 잠실7동, 삼전동",
    // },
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
