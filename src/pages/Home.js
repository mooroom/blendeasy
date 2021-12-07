import React, { useState } from "react";
import { Link } from "react-router-dom";
// import logo_coupang from "../img/logo_coupang_w.png";
import logo_baemin from "../img/logo_baemin_w.png";
import logo from "../img/logo_white.svg";
import products from "./products";

import { Header, HeaderContent, Content, PlatformButton } from "./HomeStyles";
import Slider from "../components/Slider";
import Modal from "../components/Modal";

function Home(props) {
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState(null);
  return (
    <>
      <Header>
        <HeaderContent>
          <img src={logo} alt="logo" />
          <span>Take it easy, blendeasy.</span>
        </HeaderContent>
      </Header>
      <Content>
        <div className="title">블렌드이지만의 특별한 칵테일을 만나보세요!</div>
        <Slider
          data={products}
          onClickItem={{ setModal: setModal, setItem: setItem }}
        />
        <Link to="/order_b">
          {/* <PlatformButton color="baemin">
            <img src={logo_baemin} alt="logo_baemin" />
          </PlatformButton> */}
          <PlatformButton color="baemin">배민으로 주문하기</PlatformButton>
        </Link>
        <hr style={{ borderStyle: "none" }} />
        {/* <Link to="order_c">
          <PlatformButton color="coupang">
            <img src={logo_coupang} alt="logo_coupang" />
          </PlatformButton>
        </Link> */}
      </Content>
      <Modal visible={modal} onCancel={() => setModal(false)} data={item} />
    </>
  );
}

export default Home;
