import React from "react";
import MenuBarHeader from "./MenuBarHeader";
import * as S from './style';

const DefaultTemplete = () => {
  return (
    <S.MenuBarStyled>
      <MenuBarHeader />

      <S.NavigatorAreaStyled>

        <S.TopicAreaStyled>
          
          <S.LinkStyled to='/ctf/pwnable'><div className="menuBar--menu">CHALENGE</div></S.LinkStyled>
          <S.SubAreaStyled>
            <S.DefaultLinkStyled to='/ctf/pwnable'><div>Pwnable</div></S.DefaultLinkStyled>
            <S.DefaultLinkStyled to='/ctf/reversing'><div>Reversing</div></S.DefaultLinkStyled>
            <S.DefaultLinkStyled to='/ctf/web'><div>Web</div></S.DefaultLinkStyled>
          </S.SubAreaStyled>

        </S.TopicAreaStyled>

        <S.LinkStyled to='/notice'><div>NOTICE</div></S.LinkStyled>
        <S.LinkStyled to='/event'><div>EVENT</div></S.LinkStyled>
        <S.LinkStyled to='/rank'><div>RANK</div></S.LinkStyled>
        <S.LinkStyled to='/profile'><div>MYPAGE</div></S.LinkStyled>
        <S.LinkStyled to='/developers'><div>DEVELOPER</div></S.LinkStyled>
        
      </S.NavigatorAreaStyled>

    </S.MenuBarStyled>
  );
};

export default DefaultTemplete;