import React from "react";
import styled from "styled-components";
import Icon from "../../img/Icon.png";

const TitleBoxStyled = styled.div`
  width: 303px;
  height: 160px;
  background-color: #f9f9f9;
  display: flex;
  padding: 29px 12px 11px 16px;
  box-sizing: border-box;
  position: relative;
`;
const TitleLogoStyled = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${Icon});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 29px;
  left: 16px;
`;
const InfoTextStyled = styled.div`
  width: 100px;
  height: 44px;
  font-family: "CookieRun";
  color: #949494;
  font-size: 32px;
  line-height: 44px;
  position: absolute;
  top: 29px;
  left: 89px;
`;
const WebTitleStyled = styled.div`
  width: 139px;
  height: 38px;

  font-family: "CookieRun";
  font-style: normal;
  color: #2c2c2c;
  font-size: 28px;
  line-height: 38px;
  position: absolute;
  top: 60px;
  left: 89px;
`;
const AccountButtonStyled = styled.div`
  font-family: "Noto Sans KR";
  color: #2c2c2c;
  font-size: 20px;
  font-weight: bold;

  position: absolute;
  right: 12px;
  bottom: 11px;
`;

const MenuBarBox = () => {
  return (
    <TitleBoxStyled>
      <TitleLogoStyled />
      <InfoTextStyled>ADMIN</InfoTextStyled>
      <WebTitleStyled>WARGAME</WebTitleStyled>
      <AccountButtonStyled>Logout</AccountButtonStyled>
    </TitleBoxStyled>
  );
};

export default MenuBarBox;
