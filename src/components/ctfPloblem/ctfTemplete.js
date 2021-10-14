import React from "react";
import styled from "styled-components";
import DefaultTemplete from "../DefaultTemplete";

const InnerStyled = styled.div`
  width: 1920px;
  margin: 0 auto;
  position: relative;
`;
const ProblemAreaStyled = styled.div`
  margin: 0;
  padding: 0;
  width: 1445px;
  height: 996px;
  position: absolute;
  top: 47px;
  right: 97px;
  bottom: 37px;
  left: 378px;
  border: 3px solid black;
  border-radius: 30px;
  box-sizing: border-box;
`;
const ProblemTopicStyled = styled.div`
  position: absolute;
  width: 178px;
  height: 58px;
  left: 22px;
  top: -32px;
  background-color: #fff;
  z-index: 1;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 58px;

  text-align: center;

  color: #2C2C2C;
`;

const ctfTemplete = () => {
  return(
    <InnerStyled>
      <DefaultTemplete />
      <ProblemAreaStyled>
        <ProblemTopicStyled>Pwnable</ProblemTopicStyled>
      </ProblemAreaStyled>
    </InnerStyled>
  );
};

export default ctfTemplete;