import React from "react";
import styled from "styled-components";
import MenuBarBox from "../components/common/MenuBarBox";

const MenuBarStyled = styled.div`
  width: 303px;
  height: calc(160px + 920px);
  background-color: #BCBCBC;
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

  &::-webkit-scrollbar{
    width: 0;
  }
`;
const TopicAreaStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MainTopicStyled = styled.div`
  width: 291px;
  height: 56px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 7px;

  color: #2c2c2c;
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  line-height: 51px;

  transition: .1s;

  &:first-child{
    margin-top: 0;
  }
  &:hover{
    background-color: #2c2c2c;
    color: #fff;
  }
`;
const SubAreaStyled = styled.div`
  height: auto;
`;
const SubTopicStyled = styled.div`
  width: 235px;
  height: 56px;
  background: #fff;
  border-radius: 5px;
  margin-top: 7px;

  color: #2c2c2c;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  line-height: 51px;
`;

const DefaultTemplete = () => {
  return (
    <MenuBarStyled>
      <MenuBarBox />

      <NavigatorAreaStyled>

        <TopicAreaStyled>

          <MainTopicStyled>CHALENGE</MainTopicStyled>
          <SubAreaStyled>
            <SubTopicStyled>Pwnable</SubTopicStyled>
            <SubTopicStyled>Reversing</SubTopicStyled>
            <SubTopicStyled>Web</SubTopicStyled>
          </SubAreaStyled>

        </TopicAreaStyled>

        <MainTopicStyled>NOTICE</MainTopicStyled>
        <MainTopicStyled>EVENT</MainTopicStyled>
        <MainTopicStyled>RANK</MainTopicStyled>
        <MainTopicStyled>MYPAGE</MainTopicStyled>
        
      </NavigatorAreaStyled>

    </MenuBarStyled>
  );
};

export default DefaultTemplete;