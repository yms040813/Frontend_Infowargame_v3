import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const DefaultLinkStyled = styled(Link)`
  text-decoration: none;
`

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
  padding: 0 10px;
  width: auto;
  height: 58px;
  left: 24px;
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

export const ExitButtonStyled = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  right: -5px;
  top: -5px;

  background: #FFFFFF;
  border: 5px solid #000000;
  box-sizing: border-box;
  border-radius: 0px 40px 0px 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: black;
  padding-top: 5px;
  padding-right: 5px;
  font-size: 20px;
`

export const ContentStyled = styled.div`
  margin: 81px 59px;
  color: #000000;

  .title {
    font-size: 35px;
    line-height: 48px;
    margin-bottom: 43px;
  }
  .content {
    max-height: 324px;
    overflow: auto;
    font-size: 20px;
    line-height: 27px;

    &::-webkit-scrollbar{
      width: 0;
    }
  }
`

export const ButtonAreaStyled = styled.div`
  height: 229px;
  width: 506px;
  margin-bottom: 66px;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  a {
    position: absolute;
    left: 0;
    right: 0;

    text-decoration: none;
    padding: 4px 14px;

    background: #2C2C2C;
    border-radius: 10px;
    width: 174px;
    height: 33px; 

    font-size: 18px;
    text-align: center;
    color: #FFFFFF;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    position: absolute;
    width: 506px;
    height: 51px;

    padding-left: 27px;

    bottom: 102px;
    left: 50%;
    transform: translateX(-50%);

    background: white;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;

    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #9B9B9B;
  }

  .submitButton {
    position: absolute;
    width: 187px;
    height: 52px;
    background: #2C2C2C;
    border-radius: 10px;
    border: 0;

    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    cursor: pointer;
    color: white;
    font-size: 27px;
  }
`