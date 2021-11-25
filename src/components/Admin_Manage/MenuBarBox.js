import React from "react";
import * as S from "./style";

const MenuBarHeader = () => {
  return (
    <S.HeaderStyled>
      <S.TitleAreaStyled>
        <S.MainLogoStyled />
        <S.DefaultLinkStyled to="/">
          <S.TitleTextAreaStyled>
            <div>INFO</div>
            <div>WARGAME</div>
          </S.TitleTextAreaStyled>
        </S.DefaultLinkStyled>
      </S.TitleAreaStyled>
      <S.DefaultLinkStyled to="/">
        <S.AccountButtonStyled>Logout</S.AccountButtonStyled>
      </S.DefaultLinkStyled>
    </S.HeaderStyled>
  );
};

export default MenuBarHeader;
