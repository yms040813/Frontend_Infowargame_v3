import React from "react";
import * as S from './style';
import MenuBar from '../default/MenuBar';


const NoticeTemplete = (params) => {
	return(
		<div className="inner-style">
      <MenuBar page="notice" />
      <S.ProblemAreaStyled>
        <S.ProblemTopicStyled>Notice</S.ProblemTopicStyled>
        <S.List1 />
        <S.List2 />
        <S.List2 />
        <S.List2 />
        <S.List2 />
        <S.List2 />
        <S.NoticeAreaStyled>
          <S.NoNoticeTextStyled>공지를 선택해주세요.</S.NoNoticeTextStyled>
        </S.NoticeAreaStyled>
      </S.ProblemAreaStyled>
    </div>
	);
      };
      
export default NoticeTemplete;