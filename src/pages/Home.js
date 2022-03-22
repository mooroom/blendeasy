import React, { useState } from "react";
import { Link } from "react-router-dom";
// import logo_coupang from "../img/logo_coupang_w.png";
import logo_baemin from "../img/logo_baemin_w.png";
import logo from "../img/logo_white.svg";
import products from "./products";

import {
  Header,
  HeaderContent,
  Content,
  PlatformButton,
  Footer,
} from "./HomeStyles";
import Slider from "../components/Slider";
import Modal from "../components/Modal";
import ResponsiveGrid from "../components/ResponsiveGrid";
import GridItem from "../components/GridItem";

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
        {/* <Slider
          data={products}
          onClickItem={{ setModal: setModal, setItem: setItem }}
        /> */}
        <ResponsiveGrid>
          {products.map((product) => (
            <GridItem
              key={product.id}
              data={product}
              onClickItem={{ setModal: setModal, setItem: setItem }}
            />
          ))}
        </ResponsiveGrid>
        <Footer>
          <Link to="/order_b">
            <PlatformButton color="baemin">배민으로 주문하기</PlatformButton>
          </Link>
        </Footer>
      </Content>
      <Modal
        visible={modal}
        onCancel={() => setModal(false)}
        data={item}
        theme={props.theme}
      />
    </>
  );
}

export default Home;
