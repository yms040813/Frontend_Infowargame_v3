import styled from "styled-components";

export const QuestBoxStyled = styled.div`
  width: 313px;
  height: 151px;
  background-color: #fff;
  box-shadow: 4px 4px 0px rgba(249, 249, 249, 0.25);
  border-radius: 20px;
  margin: 0 35px 33px 0;
  box-sizing: border-box;
  position: relative;

  cursor: pointer;
`;

export const QuestTextStyled = styled.div`
  font-size: 27px;
  color: #2c2c2c;
  position: absolute;
  top: 17px;
  left: 36px;

  &::after {
    content: "";
    background-color: white;
    border: 1px solid #2c2c2c;
    position: absolute;
    width: 259px;
    left: -10px;
    top: 35px;
  }
`;

export const QuestScoreStyled = styled.div`
  width: 77px;
  height: 27px;
  border-top: 2px solid #2c2c2c;
  border-bottom: 2px solid #2c2c2c;
  position: absolute;
  bottom: 22px;
  right: 26px;

  font-weight: normal;
  color: #2c2c2c;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

export const ProblemAreaStyled = styled.div`
  margin: 0;
  padding-top: 65px;
  padding-left: 34px;
  width: 1445px;
  height: calc(100vh - 80px);
  position: absolute;
  top: 47px;
  right: 97px;
  bottom: 37px;
  left: 378px;
  border: 3px solid white;
  border-radius: 30px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: start;
`;

export const ProblemTopicStyled = styled.div`
  position: absolute;
  width: 178px;
  height: 58px;
  left: 22px;
  top: -32px;
  background-color: #2c2c2c;
  z-index: 1;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 58px;

  text-align: center;

  color: #fff;
`;

export const WriteButton = styled.div`
  position: absolute;
  width: 177px;
  height: 41px;
  right: 150px;
  top: 60px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 36px;
  /* identical to box height */

  text-align: center;

  color: #2c2c2c;

  background: #fff;
  border-radius: 20px;
`;
