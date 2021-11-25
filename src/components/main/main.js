import React from "react";
import * as S from "./style";
import MenuBar from "../default/MenuBar";
import NoticeBox from "./noticebox";
import useMainNotice from "../../hooks/useMainNotice";

const MainTemplete = () => {
  const Notices = useMainNotice();

  return (
    <>
      <div className="inner-style">
        <MenuBar />
        <S.Event>Event</S.Event>
        <S.Banner />
        <S.Notice>NOTICE</S.Notice>
        <S.Div>
          {Notices.map((problem) => {
            const { title, date } = problem;
            return <NoticeBox title={title} date={date} />;
          })}
        </S.Div>
      </div>
    </>
  );
};

export default MainTemplete;
