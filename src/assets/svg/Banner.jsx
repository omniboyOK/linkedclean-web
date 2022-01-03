import * as React from "react";
import Banner from "../img/banner.svg";
import styled from "styled-components";

function BannerSVG(props) {
  return (
    <LogoWrapper className="flexCenter">
      <ImgStyle src={Banner} alt="client logo" />
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
`;

export default BannerSVG;
