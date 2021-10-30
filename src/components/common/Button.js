import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 10px;
  font-size: 30px;
  line-height: 26px;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: #2c2c2c;
  outline: none;
  cursor: pointer;

  background: white;
  &:hover {
    background: #bcbcbc;
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 74%;
      font-size: 1.125rem;
    `};
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
