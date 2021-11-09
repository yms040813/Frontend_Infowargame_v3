import React from "react";
import * as S from './style';
import MenuBar from '../default/MenuBar'

const MainTemplete = () => {

    return(
      <>
      <div className="inner-style">
        <MenuBar/>
        <S.Event>Event</S.Event>
        <S.Banner />
        <S.Notice>NOTICE</S.Notice>
        <S.List1 />
        <S.List2 />
        <S.List3 />
        <S.List4 />
        <S.List5 />
        <S.List6 />
      </div>
      </>
    );
  };
  
export default MainTemplete;