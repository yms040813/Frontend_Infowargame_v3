import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// page import
import ctfPloblemPage from "../pages/ctfPloblemPage";
import MainPage from "../pages/MainPage";
import NoticePage from "../pages/NoticePage";
import MyPage from "../pages/MyPage";
import EventPage from "../pages/Event";

const LoggedInRoutes = () => (                  //로그인 이후 접근 가능
  <Switch>
    <Route exact path="/" component={MainPage}/>       { /* 메인화면 */  }
    <Route path="/rank" component={null} />         { /* 랭킹 */ }
    <Route path="/notice" component={NoticePage} />   { /* 공지사항 Detail */ }
    <Route path="/event" component={EventPage} />   { /* 이벤트 Detail */ }
    <Route path="/notice/:id" component={null} />   { /* 공지사항 아이디 Detail */ }
    <Route path="/profile" component={MyPage} />      { /* 유저 페이지 */ }
    <Route exact path="/ctf/:id" component={ctfPloblemPage} />{ /*ctf 문제리스트 페이지 */ }
    <Route path="/ctf/:id/:id" component={ctfPloblemPage} />      { /*ctf 문제 Detail페이지 */ }
    <Route path="/wargame" component={null} />      { /*wargame 페이지 */ }
    <Route path="/wargame/:id" component={null} />  { /*wargame 문제사이트 */ }
    <Route path="/administration" component={null} /> { /*admin 페이지 */ }
    <Route path="/notification" component={null} /> { /*공지, 이벤트 작성 페이지 */ }
    <Route path="/quest" component={null} />        { /*문제 관리 리스트 */ }
    <Route path="/users" component={null} />        { /*회원 관리 리스트 */ }
    <Route path="/developers" component={null} />        { /* 개발자 리스트 */ }
    <Redirect from="*" to="/" />                { /*리다이렉션 */ }
  </Switch>
);

const LoggedOutRoutes = () => (                 //로그인 이전 접근 경로
  <Switch>
    <Route exact path="/" component={null} />       { /*로그인 이전 메인화면 */ }
    <Route path="/signup" component={null} />       { /*회원가입 페이지 */ }
    <Route path="/login" component={null} />        { /*로그인 페이지 */ }
    <Route path="/administration" component={null} /> { /*admin 로그인 페이지 */ }
    <Redirect from="*" to="/" />                { /*다른 경로로 접근시 리다이렉션 경로 */ }
  </Switch>
);

const AppRouter = ({ isLoggedIn }) => 
  <LoggedInRoutes />; // Test
  // isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

export default AppRouter;