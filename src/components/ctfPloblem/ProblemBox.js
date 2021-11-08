import React from "react";
import * as S from './style'

const ProblemBox = (props) => {
  return (
    <S.QuestBoxStyled>
      <S.QuestTextStyled>{props.title}</S.QuestTextStyled>
      <S.QuestScoreStyled>점수 : {props.score}</S.QuestScoreStyled>
    </S.QuestBoxStyled>
  );
}

export default ProblemBox;