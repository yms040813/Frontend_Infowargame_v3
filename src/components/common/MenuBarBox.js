import React from 'react';
import styled from 'styled-components';

const TitleBoxStyled = styled.div`
  width: 303px;
  height: 160px;
  background-color: #2c2c2c;

  display: flex;
  padding: 29px 12px 11px 16px;
  box-sizing: border-box;

  position: relative;
`;
const TitleLogoStyled = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${process.env.PUBLIC_URL + "/images/InfoLogo.jpg"});
  background-size: contain;
  background-repeat: no-repeat;

  position: absolute;
  top: 29px;
  left: 16px;
`;
const InfoTextStyled = styled.div`
  width: 72px;
  height: 44px;

  font-family: 'CookieRunOTF-Bold', sans-serif;
  color: #949494;
  font-size: 32px;
  line-height: 44px;

  position: absolute;
  top: 29px;
  left: 91px;
`;
const WebTitleStyled = styled.div`
  width: 139px;
  height: 38px;
  
  font-family: 'CookieRun-Regular', sans-serif;
  color: #fff;
  font-size: 28px;
  line-height: 38px;

  position: absolute;
  top: 60px;
  left: 89px;
`;
const AccountButtonStyled = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  color: #fff;
  font-size: 20px;
  
  position: absolute;
  right: 12px;
  bottom: 11px;
`;

const MenuBarBox = () => {
  return (
    <TitleBoxStyled>
      <TitleLogoStyled />
      <InfoTextStyled>INFO</InfoTextStyled>
      <WebTitleStyled>WARGAME</WebTitleStyled>
      <AccountButtonStyled>Logout</AccountButtonStyled>
    </TitleBoxStyled>
  );
};

export default MenuBarBox;