import React from "react";
import * as S from './style';
import MenuBar from '../default/MenuBar';
import NoticeBox from "./NoticeBox";
import useNotice from "../../hooks/useNotice";

const NoticeTemplete = () => {

   const {Notices} = useNotice()
   

	return(
		<div className="inner-style">
      <MenuBar page="notice"/>
      <S.ProblemAreaStyled>
        <S.ProblemTopicStyled>Notice</S.ProblemTopicStyled>
        <div>
        {Notices.map(notice => {
          const {title, time} = notice
          return(<NoticeBox title={title} time={time} />)
        })} 
        </div>
        <S.NoticeAreaStyled>
          <S.NoticeTextStyledtwo>공지를 선택해주세요.</S.NoticeTextStyledtwo>
        </S.NoticeAreaStyled>
      </S.ProblemAreaStyled>
    </div>
	);
      };
      
export default NoticeTemplete;