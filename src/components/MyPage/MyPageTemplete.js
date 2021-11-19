import React from 'react'
import useMyPageUsersInfo from '../../hooks/useMyPageUsersInfo'
import MenuBar from '../default/MenuBar'
import * as S from './style'

const MyPageTemplete = () => {
  const usersInfo = useMyPageUsersInfo()
  const {name, email} = usersInfo[0]

  return (
    <div className="inner-style">
      <MenuBar page="profile"/>
      <S.MyPageAreaStyled>
        <S.PageTitleStyled>MYPAGE</S.PageTitleStyled>
        <S.InfoNameStyled>
          <div>NICKNAME : </div>
          <div>EMAIL : </div>
        </S.InfoNameStyled>
        <S.PersonalInfoStyled>
          <div>{name}</div>
          <div>{email}</div>
        </S.PersonalInfoStyled>

        <S.DtInfoAreaStyled>
          <S.InfoChangeButtonStyled>유저 정보 변경</S.InfoChangeButtonStyled>
          <S.DetailInfoStyled />
          <S.DetailInfoStyled />
        </S.DtInfoAreaStyled>

      </S.MyPageAreaStyled>
    </div>
  )
}

export default MyPageTemplete