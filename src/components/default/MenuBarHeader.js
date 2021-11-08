import React from 'react';
import * as S from './style';

const MenuBarHeader = () => {
  return (
    <S.HeaderStyled>
      <S.TitleAreaStyled>
        <S.MainLogoStyled />
        <S.HeaderLinkStyled to="/">
          <S.TitleTextAreaStyled>
            <div>INFO</div>
            <div>WARGAME</div>
          </S.TitleTextAreaStyled>
        </S.HeaderLinkStyled>
      </S.TitleAreaStyled>
      <S.HeaderLinkStyled to="/"><S.AccountButtonStyled>Logout</S.AccountButtonStyled></S.HeaderLinkStyled>
    </S.HeaderStyled>
  );
};

export default MenuBarHeader;