import React from "react";
import styled from "styled-components";
import MenuBarBox from "./MenuBarBox";

const MenuBarStyled = styled.div`
  width: 303px;
  height: calc(160px + 920px);
  background-color: #cccccc;
  border-bottom-right-radius: 40px;
`;
const NavigatorAreaStyled = styled.div`
  padding: 7px 6px 40px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 250px);
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const MainTopicStyled = styled.div`
  width: 291px;
  height: 56px;
  background-color: #2c2c2c;
  border-radius: 10px;
  margin-top: 7px;
  color: #fff;
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  font-family: "Noto Sans KR";
  line-height: 51px;
  transition: 0.1s;
  &:first-child {
    margin-top: 0;
  }
  &:hover {
    background-color: #fff;
    color: #2c2c2c;
  }
`;

const DefaultTemplete = () => {
  return (
    <MenuBarStyled>
      <MenuBarBox />
      <NavigatorAreaStyled>
        <MainTopicStyled>CHALENGE</MainTopicStyled>
        <MainTopicStyled>NOTICE</MainTopicStyled>
        <MainTopicStyled>EVENT</MainTopicStyled>
        <MainTopicStyled>USER</MainTopicStyled>
      </NavigatorAreaStyled>
    </MenuBarStyled>
  );
};

export default DefaultTemplete;
