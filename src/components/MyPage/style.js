import styled from 'styled-components'

export const MyPageAreaStyled = styled.div`
  position: absolute;
  top: 0;
  left: 303px;

  width: calc(100% - 303px);
  height: calc(100vh - 80px);
`

export const PageTitleStyled = styled.div`
  font-weight: 900;
  font-size: 35px;
  line-height: 51px;
  color: #2C2C2C;

  position: absolute;
  top: 29px;
  left: 62px;
`

export const InfoNameStyled = styled.div`
  position: absolute;
  top: 174px;
  left: 73px;

  font-weight: 900;
  font-size: 30px;
  line-height: 43px;

  div {
    margin: 20px;
    text-align: right;
    word-spacing: 10px;
  }
`

export const PersonalInfoStyled = styled(InfoNameStyled)`
  left: 269px;
  font-size: 25px;
  font-weight: 500;
  color: white;

  div {
    padding: 2px 30px 2px 30px; 
    background-color: #2C2C2C;
    border-radius: 10px;
    text-align: center;
  }
`

export const InfoChangeButtonStyled = styled.button`
  position: absolute;
  width: 165px;
  height: 36px;
  top: 461px;
  right: 114px;
  color: white;

  background: #2C2C2C;
  border-radius: 10px;
`

export const DetailInfoStyled = styled.div`
  width: 686px;
  height: 398px;
  background-color: #2c2c2c;
  position: absolute;
  left: 62px;
  bottom: 50px;
  border-radius: 20px;

  &:last-child {
    left: 817px;
  }
`