import React from "react";
import MenuBarBox from "./MenuBarBox";
import * as S from "./style";

const DefaultTemplete = (params) => {
  let mainTopic;
  switch (params.page) {
    case "pwnable":
    case "reversing":
    case "web":
      mainTopic = "challenge";
      break;
    case "notice":
      mainTopic = "notice";
      break;
    case "event":
      mainTopic = "event";
      break;
    case "user":
      mainTopic = "user";
      break;
    default:
      mainTopic = "/";
  }

  return (
    <S.MenuBarStyled>
      <MenuBarBox />
      <S.NavigatorAreaStyled>
        <S.TopicAreaStyled>
          <S.LinkStyled to="/Adminctf/pwnable">
            <div
              className={
                mainTopic === "challenge" ? "btn__black" : "btn__white"
              }
            >
              CHALLENGE
            </div>
          </S.LinkStyled>
          <S.SubAreaStyled>
            <S.DefaultLinkStyled to="/Adminctf/pwnable">
              <div
                className={
                  params.page === "pwnable" ? "btn__black" : "btn__white"
                }
              >
                Pwnable
              </div>
            </S.DefaultLinkStyled>
            <S.DefaultLinkStyled to="/Adminctf/reversing">
              <div
                className={
                  params.page === "reversing" ? "btn__black" : "btn__white"
                }
              >
                Reversing
              </div>
            </S.DefaultLinkStyled>
            <S.DefaultLinkStyled to="/Adminctf/web">
              <div
                className={params.page === "web" ? "btn__black" : "btn__white"}
              >
                Web
              </div>
            </S.DefaultLinkStyled>
          </S.SubAreaStyled>
        </S.TopicAreaStyled>
        <S.LinkStyled to="/notification">
          <div className={mainTopic === "notice" ? "btn__black" : "btn__white"}>
            NOTICE
          </div>
        </S.LinkStyled>

        <S.LinkStyled to="/adminevent">
          <div className={mainTopic === "event" ? "btn__black" : "btn__white"}>
            EVENT
          </div>
        </S.LinkStyled>

        <S.LinkStyled to="/users">
          <div className={mainTopic === "user" ? "btn__black" : "btn__white"}>
            USER
          </div>
        </S.LinkStyled>
      </S.NavigatorAreaStyled>
    </S.MenuBarStyled>
  );
};

export default DefaultTemplete;
