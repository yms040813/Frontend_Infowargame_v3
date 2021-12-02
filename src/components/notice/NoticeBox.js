import React from "react";
import * as S from './style'

const NoticeBox = (props) => {
  return (
    <S.NoticeBoxStyled>
      <S.NoticeTitleStyled>{props.title}</S.NoticeTitleStyled>
      <S.NoticeTimeStyled>{props.time}</S.NoticeTimeStyled>
    </S.NoticeBoxStyled>
  );
}

export default NoticeBox;