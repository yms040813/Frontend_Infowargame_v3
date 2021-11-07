import React from "react";
import styled from "styled-components";

const QuestBoxStyled = styled.div`
  width: 313px;
  height: 151px;
  background-color: #2C2C2C;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin: 0 35px 33px 0;
  box-sizing: border-box;
  position: relative;
`;
const QuestTextStyled = styled.span`
  font-size: 27px;
  color: white;
  position: absolute;
  top: 17px;
  left: 36px;

  &::after{
    content: '';
    background-color: white;
    border: 1px solid white;
    position: absolute;
    width: 259px;
    left: -10px;
    top: 35px;
  }
`;
const QuestScoreStyled = styled.div`
  width: 77px;
  height: 27px;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  position: absolute;
  bottom: 22px;
  right: 26px;

  font-weight: normal;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const ProblemBox = () => {
  return (
    <div>
      <QuestBoxStyled>
        <QuestTextStyled>버퍼 오버플로우</QuestTextStyled>
        <QuestScoreStyled>점수 : 30</QuestScoreStyled>
      </QuestBoxStyled>
    </div>
  );
}

export default ProblemBox;