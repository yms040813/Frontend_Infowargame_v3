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
const List1 = styled.div`
width: 674px;
height: 110px;
margin-left: 25px;
margin-top: 60px;
background-color: #2C2C2C;
border-radius: 20px;
display: flex;

font-family: Noto Sans Linear B;
font-size: 27px;
line-height: 37px;
color: #FFFFFF;
text-align: center;
`;
const List2 = styled(List1)`
margin-top: 40px;
`;
const NoticeAreaStyled = styled.div`
  margin: 0;
  padding: 0;
  width: 698x;
  height: 860px;
  position: absolute;
  top: 113px;
  right: 97px;
  bottom: 37px;
  left: 1095px;
  border: 3px solid black;
  border-radius: 30px;
  box-sizing: border-box;
`;

const NoticeTemplete = () => {
	return(
		<InnerStyled>
      <DefaultTemplete />
      <ProblemAreaStyled>
        <ProblemTopicStyled>Notice</ProblemTopicStyled>
        <List1 />
        <List2>akksdfaksf;</List2>
        <List2></List2>
        <List2></List2>
        <List2></List2>
        <List2></List2>
        <NoticeAreaStyled />
      </ProblemAreaStyled>
    </InnerStyled>
	);
      };
      
export default NoticeTemplete;