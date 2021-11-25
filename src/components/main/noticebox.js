import React from "react";
import * as S from "./style";

const NoticeBox = (props) => {
  return (
    <S.List>
      <S.Title>{props.title}</S.Title>
      <S.Date>{props.date}</S.Date>
    </S.List>
  );
};

export default NoticeBox;
