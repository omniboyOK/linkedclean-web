import * as React from "react";
import Logo from "../img/logo-lc.svg";
import styled from "styled-components";

function SvgComponent(props) {
  return (
    <LogoWrapper className="flexCenter">
      <ImgStyle src={Logo} alt="client logo" />
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
`;
const ImgStyle = styled.img`
  width: 50px;
  height: 50px;
`;

export default SvgComponent;
