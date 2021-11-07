import React from "react";
import MenuBarHeader from "./MenuBarHeader";
import * as S from './style';

const DefaultTemplete = () => {
  return (
      <S.MenuBarStyled>
        <MenuBarHeader />

        <S.NavigatorAreaStyled>

          <S.TopicAreaStyled>
            
            <S.MainTopicStyled>CHALENGE</S.MainTopicStyled>
            <S.SubAreaStyled>
              <S.SubTopicStyled>Pwnable</S.SubTopicStyled>
              <S.SubTopicStyled>Reversing</S.SubTopicStyled>
              <S.SubTopicStyled>Web</S.SubTopicStyled>
            </S.SubAreaStyled>

          </S.TopicAreaStyled>

          <S.MainTopicStyled>NOTICE</S.MainTopicStyled>
          <S.MainTopicStyled>EVENT</S.MainTopicStyled>
          <S.MainTopicStyled>RANK</S.MainTopicStyled>
          <S.MainTopicStyled>MYPAGE</S.MainTopicStyled>
          <S.MainTopicStyled>DEVELOPER</S.MainTopicStyled>
          
        </S.NavigatorAreaStyled>

      </S.MenuBarStyled>
  );
};

export default DefaultTemplete;