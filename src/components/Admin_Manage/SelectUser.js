import React from "react";
import styled from "styled-components";

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
`;

const SelectBox = () => {
  return <WhiteBox />;
};

export default SelectBox;
