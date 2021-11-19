import React from "react";
import { Link } from "react-router-dom";
import logo_coupang from "../img/logo_coupang_w.png";
import logo_baemin from "../img/logo_baemin_w.png";
import logo from "../img/logo_white.svg";

import { Header, HeaderContent, Content, PlatformButton } from "./HomeStyles";

function Home(props) {
  return (
    <>
      <Header>
        <HeaderContent>
          <img src={logo} alt="logo" />
          <span>Take it easy, blendeasy.</span>
        </HeaderContent>
      </Header>
      <Content>
        <div className="title">배달플랫폼을 선택해주세요.</div>
        <Link to="/order_b">
          <PlatformButton color="baemin">
            <img src={logo_baemin} alt="logo_baemin" />
          </PlatformButton>
        </Link>
        <hr style={{ borderStyle: "none" }} />
        {/* <Link to="order_c">
          <PlatformButton color="coupang">
            <img src={logo_coupang} alt="logo_coupang" />
          </PlatformButton>
        </Link> */}
      </Content>
    </>
  );
}

export default Home;
