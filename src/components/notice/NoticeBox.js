import React from "react";
import * as S from './style'

const NoticeBox = (props) => {
  return (
    <S.NoticeBoxStyled>
      <S.QuestTextStyled>{props.title}</S.QuestTextStyled>
      <S.QuestScoreStyled>{props.time}</S.QuestScoreStyled>
    </S.NoticeBoxStyled>
  );
}

export default NoticeBox;