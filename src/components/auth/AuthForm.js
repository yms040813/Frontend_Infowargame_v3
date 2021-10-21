import React from "react";
import Button from "../common/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from "../../img/Icon.png";

const AuthFormBlock = styled.div`
  h2 {
    margin: 0;
    font-size: 40px;
    color: white;
    margin-bottom: 1rem;
    position: absolute;
    left: 71px;
    top: 148px;
  }
`;

/*검은색 박스*/
const BlackBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  h3 {
    background-color: #2c2c2c;
    color: white;

    position: absolute;
    font-weight: 500;
    line-height: 23px;
    font-size: 16px;
    text-align: center;
    margin-top: 3px;
    margin-left: 35px;
  }
  h4 {
    background-color: #2c2c2c;
    color: white;
    position: absolute;

    font-weight: 500;
    line-height: 23px;
    font-size: 16px;

    text-align: center;
  }

  position: absolute;
  left: calc(1313 / 1920 * 100) vw;
  top: calc(1080 / 211 * 100) vw;
  right: 151px;

  padding: 2rem;
  width: 455px;
  height: 669px;

  @media (min-width: 900px) {
    width: 380px;
    height: 580px;
  }

  background: #2c2c2c;
  border-radius: 20px;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  background-color: #2c2c2c;
  line-height: 40px;
  font-size: 1rem;
  outline: none;
  border: solid white;
  border-radius: 10px;
  text-indent: 1rem;
  margin-left: 1rem;
  margin-right: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 78%;
  color: gray;
  &:focus {
    color: white;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Area = styled.div`
  margin-top: 20px;
  position: absolute;
  top: 240px;
`;

const ButtonMarginTop = styled(Button)`
  margin-top: 1rem;
  margin-left: 1rem;
`;

const IconBox = styled.div`
  background-image: url(${Icon});
  background-size: 100%;
  border-radius: 50%;
  @media (min-width: 900px) {
    margin-right: 1rem;
    margin-left: 12rem;
  }
  margin-right: 1rem;
  margin-left: 16rem;
  position: absolute;

  width: 120px;
  height: 120px;
`;

const AuthForm = () => {
  return (
    <BlackBox>
      <IconBox />
      <AuthFormBlock>
        <h2>ADMIN</h2>
        <Area>
          <h3>E-MAIL</h3>
          <StyledInput
            autoComplete="e-mail"
            name="e-mail"
            placeholder=" EMAIL을 입력해주세요"
          />
          <h3>PASSWORD</h3>
          <StyledInput
            autoComplete="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            type="password"
          />
          <ButtonMarginTop fullWidth>로그인</ButtonMarginTop>
        </Area>
      </AuthFormBlock>
    </BlackBox>
  );
};

export default AuthForm;
