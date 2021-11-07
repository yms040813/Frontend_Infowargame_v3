import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border-radius: 20px;
  font-size: 20px;
  line-height: 26px;
  color: #fff;

  text-align: center;
  font-size: 30px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 29px;

  padding: 0.25rem 1rem;
  color: #fff;
  outline: none;
  cursor: pointer;

  background: #2c2c2c;

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 74%;
      font-size: 1.125rem;
      border-radius: 10px;
      font-size: 30px;
      line-height: 26px;
      font-weight: bold;
      color: #2c2c2c;

      background: white;
      &:hover {
        background: #bcbcbc;
      }
    `};
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
