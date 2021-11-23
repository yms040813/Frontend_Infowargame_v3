import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DefaultLinkStyled = styled(Link)`
  text-decoration: none;
`

export const LinkStyled = styled(DefaultLinkStyled)`
  width: 291px;
  height: 56px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 7px;

  color: #2c2c2c;
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  line-height: 51px;

  transition: .1s;

  display: block;

  &:first-child{
    margin-top: 0;
  }

  div {
    border-radius: 10px;
    height: 56px;
  }

  .btn__black, .btn__white:hover{
    background-color: #2c2c2c;
    color: #fff;
  }

  .btn__white, .btn__black:hover{
    background-color: #fff;
    color: #2c2c2c;
  }
`

// In the menu bar, the area where the logo and logout button are located.
export const HeaderStyled = styled.div`
  width: 303px;
  height: 160px;
  background-color: #2c2c2c;
  position: relative;
`;

// The area where the main logo and site name are in it.
export const TitleAreaStyled = styled.div`
  position: absolute;
  top: 29px;
  left: 16px;
  display: flex;
  cursor: pointer;
`;

// Style setting for the main logo.
export const MainLogoStyled = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${process.env.PUBLIC_URL + "/images/InfoLogo.jpg"});
  background-size: contain;
  background-repeat: no-repeat;
`;

// The area where the site name is located.
export const TitleTextAreaStyled = styled.div`
  margin-top: 5px;
  margin-left: 5px;

  div {
    &:first-child{
    font-family: 'CookieRunOTF-Bold', sans-serif;
    color: #949494;
    font-size: 32px;
  }
    &:nth-child(2){
      font-family: 'CookieRun-Regular', sans-serif;
      color: #fff;
      font-size: 28px;
    }
  }
`;

// Set the login/logout button style.
export const AccountButtonStyled = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  color: #fff;
  font-size: 20px;
  
  position: absolute;
  right: 12px;
  bottom: 11px;

  cursor: pointer;
`;

// 
export const MenuBarStyled = styled.div`
  width: 303px;
  height: 100vh;
  background-color: #BCBCBC;
  border-bottom-right-radius: 40px;
`;

// 
export const NavigatorAreaStyled = styled.div`
  padding: 7px 6px 40px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: calc(100% - 250px);
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar{
    width: 0;
  }
`;

// 
export const TopicAreaStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 
export const SubAreaStyled = styled.div`
  height: auto;

  div {
    width: 235px;
    height: 56px;
    background: #fff;
    border-radius: 5px;
    margin-top: 7px;

    color: #2c2c2c;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    line-height: 51px;
  }

  .btn__black, .btn__white:hover{
    background-color: #2c2c2c;
    color: #fff;
  }

  .btn__white, .btn__black:hover{
    background-color: #fff;
    color: #2c2c2c;
  }
`;