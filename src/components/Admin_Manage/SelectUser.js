import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const WhiteBox = styled.div`
  background-color: white;
  width: calc(100% - 440px);
  height: 840px;
  top: 120px;
  left: 370px;
  position: absolute;
  border: 5px solid #000;
  box-sizing: border-box;
  border-radius: 40px;
  @media (max-width: 830px) {
    width: 350px;
  }
  h2 {
    background-color: white;

    color: black;
    position: absolute;
    text-align: center;
    top: 33px;
    left: 110px;
    font-family: Noto Sans KR;
    font-size: 25px;
    @media (max-width: 1000px) {
      top: 50px;
      font-size: 15px;
    }
    @media (max-width: 890px) {
      left: 50px;
    }
  }
`;

const StyledInput = styled.input`
  position: absolute;
  width: calc(100% - 200px);
  height: 51px;
  left: 100px;
  top: 74px;
  padding-left: 10px;
  background-color: #fff;
  border: 1px solid #000;
  box-sizing: border-box;
  border-radius: 10px;
  @media (max-width: 1000px) {
    font-size: 10px;
    height: 41px;
  }
  @media (max-width: 890px) {
    left: 40px;
    width: 180px;
  }
`;

const ButtonStyled = styled(Button)`
  position: absolute;
  width: 161px;
  height: 51px;
  font-family: CookieRun;
  top: 74px;
  right: 90px;
  color: #fff;
  text-align: center;
  font-size: 30px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 900px;
  font-size: 20px;
  line-height: 29px;

  border: 1px solid #000;
  box-sizing: border-box;
  border-radius: 10px;

  @media (max-width: 1000px) {
    width: 100px;
    height: 41px;
    font-size: 15px;
  }
  @media (max-width: 890px) {
    left: 190px;
  }
`;

const BanButton = styled.div`
  width: 115px;
  height: 56px;
  margin-bottom: 10px;
  position: absolute;
  margin-left: calc(100% - 100px);
  background-color: #c2c2c2;
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
  color: #2c2c2c;
  top: -45px;
  font-family: Noto Sans KR;
  font-weight: 900;
  font-size: 20px;
  line-height: 54px;
  text-align: center;
  &:first-child {
    margin-top: 0px;
  }
  &:hover {
    background-color: #e6c6c6;
  }
  @media (max-width: 1200px) {
    width: 70px;
    height: 37px;
    line-height: 35px;
    font-size: 15px;
    margin-left: calc(100% - 60px);
    top: -37px;
  }
  @media (max-width: 1120px) {
    width: 50px;
    margin-left: 0;

    left: 80px;
    height: 37px;
    font-size: 13px;
  }
  @media (max-width: 890px) {
    left: 60px;
  }
`;

const UserAlign = styled.div`
  background-color: #2c2c2c;
  position: relative;
  width: calc(100% - 300px);
  height: 47px; //real size 56
  border-radius: 15px;
  margin-right: 0px;
  margin-left: 150px;

  margin-bottom: 10px;
  color: white;
  text-align: left;

  font-family: Noto Sans KR;
  font-weight: 900px;
  font-size: 25px;
  line-height: 36px;
  padding-left: 46px;
  padding-top: 9px;

  &:first-child {
    margin-top: 0;
  }
  @media (max-width: 1200px) {
    height: 35px;
    font-size: 20px;
    margin-left: 120px;
    padding-top: 1px;
    padding-left: 20px;
  }

  @media (max-width: 1100px) {
    font-size: 15px;
    margin-left: 100px;
    width: 100px;
    padding-top: 0px;
  }
  @media (max-width: 890px) {
    margin-left: 50px;
  }
`;

const ScrollArea = styled.div`
  position: absolute;
  overflow-y: scroll;
  width: calc(100% - 220px);
  height: 600px;
  top: 140px;
  background-color: white;
  &::-webkit-scrollbar {
    width: 10px;
    background: #c4c4c4;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #2c2c2c;
  }
`;

const SelectUser = ({ users }) => {
  const UserData = [
    {
      name: "서건희",
      id: "1",
    },
    {
      name: "킹남대",
      id: "2",
    },
  ];

  return (
    <WhiteBox>
      <StyledInput
        autoComplete="name"
        name="name"
        placeholder=" USERNAME을 입력해주세요"
      />
      <h2>USERNAME</h2>
      <ButtonStyled>검색하기</ButtonStyled>
      <ScrollArea>
        <UserAlign>
          {UserData[1].name}
          <BanButton>BAN</BanButton>
        </UserAlign>

        <UserAlign>
          {UserData[0].name}
          <BanButton>BAN</BanButton>
        </UserAlign>

        <UserAlign>
          {UserData[1].name}
          <BanButton>BAN</BanButton>
        </UserAlign>

        <UserAlign>
          {UserData[1].name}
          <BanButton>BAN</BanButton>
        </UserAlign>
      </ScrollArea>
    </WhiteBox>
  );
};

export default SelectUser;
