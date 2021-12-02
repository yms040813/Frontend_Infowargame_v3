import React, { useEffect } from "react";
import MenuBarHeader from "./MenuBarHeader";
import useMBar from "../../hooks/useMBar"
import * as S from './style';

const DefaultTemplete = (params) => {
  const {ctfScroll, changeFalse, changeScroll} = useMBar()

  let mainTopic
  switch (params.page) {
    case 'pwnable':
    case 'reversing':
    case 'web': mainTopic = 'challenge'; break
    case 'notice': mainTopic = 'notice'; break
    case 'event': mainTopic = 'event'; break
    case 'profile': mainTopic = 'mypage'; break
    case 'rank': mainTopic = 'rank'; break
    case 'developers': mainTopic = 'developer'; break
    default: mainTopic = '/'
  }

  useEffect(() => {
    if (ctfScroll === true && mainTopic === 'challenge') { 
      changeFalse() 
    }
  })

  return (
    <S.MenuBarStyled>
      <MenuBarHeader />
      <S.NavigatorAreaStyled>
        <S.TopicAreaStyled >
          <S.ChallengeLinkStyled to='/ctf/pwnable' onClick={changeScroll} replace>
            <div className={mainTopic === 'challenge' ? 'btn__black' : "btn__white"}>CHALLENGE</div>
          </S.ChallengeLinkStyled>
          <S.SubAreaStyled click={ctfScroll}>
            <S.DefaultLinkStyled to='/ctf/pwnable'>
              <div className={params.page === 'pwnable' ? 'btn__black' : "btn__white"}>Pwnable</div>
            </S.DefaultLinkStyled>
            <S.DefaultLinkStyled to='/ctf/reversing'>
              <div className={params.page === 'reversing' ? 'btn__black' : "btn__white"}>Reversing</div>
            </S.DefaultLinkStyled>
            <S.DefaultLinkStyled to='/ctf/web'>
              <div className={params.page === 'web' ? 'btn__black' : "btn__white"}>Web</div>
            </S.DefaultLinkStyled>
          </S.SubAreaStyled>
        </S.TopicAreaStyled>
        <S.LinkStyled to='/notice/1'>
          <div className={mainTopic === 'notice' ? 'btn__black' : "btn__white"}>NOTICE</div>
        </S.LinkStyled>

        <S.LinkStyled to='/event'>
          <div className={mainTopic === 'event' ? 'btn__black' : "btn__white"}>EVENT</div>
        </S.LinkStyled>

        <S.LinkStyled to='/rank'>
          <div className={mainTopic === 'rank' ? 'btn__black' : "btn__white"}>RANK</div>
        </S.LinkStyled>

        <S.LinkStyled to='/profile'>
          <div className={mainTopic === 'mypage' ? 'btn__black' : "btn__white"}>MYPAGE</div>
        </S.LinkStyled>

        <S.LinkStyled to='/developers'>
          <div className={mainTopic === 'developer' ? 'btn__black' : "btn__white"}>DEVELOPER</div>
        </S.LinkStyled>

      </S.NavigatorAreaStyled>
    </S.MenuBarStyled>
  );
};

export default DefaultTemplete;