import styled from "styled-components";

export const ProblemAreaStyled = styled.div`
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
export const NoticeAreaStyled = styled.div`
  margin: 0;
  padding: 0;
  width: 698x;
  height: 860px;
  position: absolute;
  top: 60px;
  right: 24px;
  bottom: 60px;
  left: 723px;
  border: 3px solid black;
  border-radius: 30px;
  box-sizing: border-box;
`;
export const NoticeTextStyledtwo = styled.div`
  text-align: center;
  font-size: 27px;
  line-height: 39px;
  margin-top: 397px;
`;

export const NoticeBoxStyled = styled.div`
width: 674px;
height: 110px;
margin-left: 25px;
margin-top: 40px;
background-color: #2C2C2C;
border-radius: 20px;
display: flex;
position: relative;

&:first-child{
  margin-top: 60px;
}

`;


export const NoticeTitleStyled = styled.div`
  font-size: 27px;
  color: white;
  position: absolute;
  top: 17px;
  left: 36px;
`;

export const NoticeTimeStyled = styled.div`
  width: 177px;
  height: 27px;
  position: absolute;
  bottom: 22px;
  right: 26px;

  font-weight: normal;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
`;