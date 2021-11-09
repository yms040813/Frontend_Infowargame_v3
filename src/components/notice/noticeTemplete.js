import React from "react";
import * as S from './style';
import MenuBar from '../default/MenuBar';


const NoticeTemplete = () => {
	return(
		<div className="inner-style">
      <MenuBar/>
      <S.ProblemAreaStyled>
        <S.ProblemTopicStyled>Notice</S.ProblemTopicStyled>
        <S.List1 />
        <S.List2></S.List2>
        <S.List2></S.List2>
        <S.List2></S.List2>
        <S.List2></S.List2>
        <S.List2></S.List2>
        <S.NoticeAreaStyled />
      </S.ProblemAreaStyled>
    </div>
	);
      };
      
export default NoticeTemplete;