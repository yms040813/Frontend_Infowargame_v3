import React from 'react';
import * as S from './style';

const MenuBarHeader = () => {
  return (
    <S.HeaderStyled>
      <S.TitleAreaStyled>
        <S.MainLogoStyled />
        <S.LinkStyled to="/">
          <S.TitleTextAreaStyled>
            <div>INFO</div>
            <div>WARGAME</div>
          </S.TitleTextAreaStyled>
        </S.LinkStyled>
      </S.TitleAreaStyled>
      <S.LinkStyled to="/"><S.AccountButtonStyled>Logout</S.AccountButtonStyled></S.LinkStyled>
    </S.HeaderStyled>
  );
};

export default MenuBarHeader;