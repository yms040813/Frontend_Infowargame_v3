import React from "react";
import Button from "../common/Button";
import styled from "styled-components";

import Icon from "../../img/Icon.png";
import App from "../../App.css";

const AuthFormBlock = styled.div`
  h2 {
    font-family: CookieRun;
    font-style: normal;
    margin: 0;
    font-size: 40px;
    line-height: 54px;
    color: white;

    margin-bottom: 1rem;
    position: absolute;
    left: 45px;
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
    font-family: Noto Sans KR;
    position: absolute;
    font-weight: 500;
    line-height: 23px;
    font-size: 16px;
    text-align: center;
    margin-top: 3px;
    margin-left: 35px;
  }

  position: absolute;
  left: calc(1313 / 1920 * 100) vw;
  top: calc(1080 / 211 * 100) vw;
  right: 151px;

  padding: 2rem;
  width: 455px;
  height: 669px;

  @media (max-width: 800px) {
    width: 380px;
    height: 580px;
  }

  background: #2c2c2c;
  border-radius: 20px;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  background-color: #2c2c2c;
  font-family: Noto Sans KR;
  line-height: 34px;
  font-size: 1rem;
  outline: none;
  border: solid white;
  border-radius: 10px;
  text-indent: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 72%;
  color: gray;
  &:focus {
    color: white;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Area = styled.div`
  margin-top: 15px;
  padding-left: 2rem;
  position: absolute;
  top: 240px;
`;

const ButtonMarginTop = styled(Button)`
  margin-top: 3rem;
  margin-left: 1rem;
  font-family: CookieRun;
  color: #2c2c2c;
  text-align: center;
  font-size: 30px;
  @media (max-width: 800px) {
    margin-top: 1.5rem;
  }
`;

const IconBox = styled.div`
  background-image: url(${Icon});
  background-size: 100%;
  border-radius: 50%;
  @media (max-width: 800px) {
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
            placeholder=" EMAIL을 입력해주세요!"
          />
          <h3>PASSWORD</h3>
          <StyledInput
            autoComplete="password"
            name="password"
            placeholder="비밀번호를 입력해주세요!"
            type="password"
          />
          <ButtonMarginTop fullWidth>LOGIN</ButtonMarginTop>
        </Area>
      </AuthFormBlock>
    </BlackBox>
  );
};

export default AuthForm;
