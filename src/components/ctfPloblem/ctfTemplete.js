import React from "react";
import styled from "styled-components";
import DefaultTemplete from "../DefaultTemplete";

const TestTotalArea = styled.div`
  display: flex;
  width: 1920px;
  margin: 0 auto;
`;
const TestArea = styled.div`
  width: 1000px;
  height: 100vh;
  background-color: orange;
`;

const ctfTemplete = () => {
  return(
    <TestTotalArea>
      <DefaultTemplete />
    </TestTotalArea>
  );
};

export default ctfTemplete;