import styled from 'styled-components'

export const QuestBoxStyled = styled.div`
  width: 313px;
  height: 151px;
  background-color: #2C2C2C;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin: 0 35px 33px 0;
  box-sizing: border-box;
  position: relative;

  cursor: pointer;
`;

export const QuestTextStyled = styled.div`
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

export const QuestScoreStyled = styled.div`
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

export const ProblemAreaStyled = styled.div`
  margin: 0;
  padding-top: 38px;
  padding-left: 34px;
  width: 1445px;
  height: calc(100vh - 80px);
  position: absolute;
  top: 47px;
  right: 97px;
  bottom: 37px;
  left: 378px;
  border: 3px solid black;
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

export const CtfDetailAreaStyled = styled.div`
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 100vh; 
  z-index: 2;
  background-color: white;

  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
`

export const CtfProblemStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 616px;
  height: 826px;
  background-color: white;
  border: 5px solid #000000;
  box-sizing: border-box;
  border-radius: 40px;
  
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`