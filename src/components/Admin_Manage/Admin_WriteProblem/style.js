import styled from "styled-components";

export const WhiteBox = styled.div`
  background-color: white;
  width: calc(100% - 440px);
  height: 840px;
  top: 120px;
  left: 370px;
  position: absolute;
  border: 5px solid #000;
  box-sizing: border-box;
  border-radius: 40px;
  @media (max-width: 880px) {
    width: 400px;
  }
  h2 {
    background-color: white;

    color: black;
    position: absolute;
    text-align: center;
    top: 33px;
    left: 110px;
    font-family: Noto Sans KR;
    font-size: 25px;
    @media (max-width: 1100px) {
      top: 50px;
      font-size: 15px;
    }
    @media (max-width: 890px) {
      left: 50px;
    }
  }

  h3 {
    background-color: white;

    color: black;
    position: absolute;
    text-align: center;
    top: 205px;
    left: 110px;
    font-family: Noto Sans KR;
    font-size: 25px;
    @media (max-width: 1100px) {
      top: 225px;
      font-size: 15px;
    }
    @media (max-width: 890px) {
      left: 50px;
    }
  }
  h4 {
    background-color: white;

    color: black;
    position: absolute;
    text-align: center;
    top: 555px;
    left: 120px;
    font-family: Noto Sans KR;
    font-size: 22px;
    @media (max-width: 1700px) {
      font-size: 18px;
      top: 540px;
    }
    @media (max-width: 1100px) {
      top: 550px;
      font-size: 14px;
    }
    @media (max-width: 890px) {
      left: 50px;
    }
  }
  h5 {
    background-color: white;

    color: black;
    position: absolute;
    text-align: center;
    top: 545px;
    left: 720px;
    font-family: Noto Sans KR;
    font-size: 23px;
    @media (max-width: 1700px) {
      font-size: 18px;
      top: 605px;
      left: 120px;
    }
    @media (max-width: 1100px) {
      left: 120px;
      top: 615px;
      font-size: 14px;
    }
    @media (max-width: 890px) {
      left: 50px;
    }
  }
  h6 {
    background-color: white;

    color: black;
    position: absolute;
    text-align: center;
    top: 640px;
    left: 320px;
    font-family: Noto Sans KR;
    font-size: 19px;
    @media (max-width: 1700px) {
      font-size: 18px;
      top: 675px;
      left: 310px;
    }
    @media (max-width: 1100px) {
      left: 260px;
      top: 686px;
      font-size: 14px;
    }
    @media (max-width: 890px) {
      left: 180px;
    }
  }
`;

export const StyledInput = styled.input`
  position: absolute;
  width: calc(100% - 370px);
  height: 51px;
  left: 100px;
  top: 74px;
  font-size: 18px;
  padding-left: 20px;
  background-color: #fff;
  border: 1px solid #000;
  box-sizing: border-box;
  border-radius: 10px;
  @media (max-width: 1100px) {
    font-size: 10px;
    width: 180px;
    height: 41px;
  }
  @media (max-width: 890px) {
    left: 40px;
    width: 180px;
  }
`;

export const FlagStyle = styled.input`
  position: absolute;
  width: 500px;
  height: 51px;
  left: 100px;
  top: 600px;
  font-size: 18px;
  padding-left: 20px;
  background-color: #fff;
  border: 1px solid #000;
  box-sizing: border-box;
  border-radius: 10px;
  @media (max-width: 1700px) {
    top: 580px;
  }
  @media (max-width: 1100px) {
    font-size: 13px;
    width: 300px;
    height: 41px;
  }
  @media (max-width: 890px) {
    left: 40px;
  }
`;

export const ScoreStyle = styled.input`
  position: absolute;
  width: 500px;
  height: 51px;
  left: 700px;
  top: 600px;
  font-size: 18px;
  padding-left: 20px;
  background-color: #fff;
  border: 1px solid #000;
  box-sizing: border-box;
  border-radius: 10px;
  @media (max-width: 1700px) {
    left: 100px;
    top: 650px;
  }
  @media (max-width: 1100px) {
    font-size: 13px;
    width: 300px;
    height: 41px;
  }
  @media (max-width: 890px) {
    left: 40px;
  }
`;

export const ContentInput = styled.div`
  position: absolute;
  width: calc(100% - 190px);
  height: calc(100% - 540px);
  left: 100px;
  top: 250px;
  font-size: 18px;
  padding-left: 20px;
  background-color: #fff;
  border: 1px solid #000;
  box-sizing: border-box;
  border-radius: 10px;
  padding-top: 30px;

  text-align: top;

  .ql-editor {
    padding: 0;
    min-height: 200px;
    font-size: 18px;
  }
  @media (max-width: 1100px) {
    font-size: 10px;
    width: 300px;
  }
  @media (max-width: 890px) {
    left: 40px;
    width: 300px;
  }
`;

export const ButtonStyled = styled.button`
  position: absolute;
  width: 170px;
  height: 51px;
  background-color: #2c2c2c;
  top: 74px;
  right: 70px;
  color: #fff;
  text-align: center;
  font-size: 30px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 900px;
  font-size: 20px;
  line-height: 29px;

  border: 1px solid #000;
  box-sizing: border-box;
  border-radius: 20px;

  @media (max-width: 1100px) {
    width: 100px;
    height: 41px;
    font-size: 15px;
    left: 300px;
  }
  @media (max-width: 890px) {
    left: 240px;
    width: 80px;
    font-size: 12px;
  }
  &:hover {
    background-color: #818181;
    border: 1px solid #818181;
  }
`;

//6 Button Style
export const ButtonP = styled.button`
  position: absolute;
  width: 106px;
  height: 40px;

  top: 160px;
  left: 120px;
  color: #fff;
  text-align: center;
  font-size: 30px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 900px;
  font-size: 18px;
  line-height: 20px;
  background-color: #2c2c2c;
  border: 2px solid #2c2c2c;
  box-sizing: border-box;
  border-radius: 10px;

  @media (max-width: 1250px) {
    top: 140px;
  }
  @media (max-width: 1100px) {
    width: 90px;
    top: 140px;
    height: 35px;
    font-size: 13px;
    line-height: 15px;
    left: 60px;
  }
  @media (max-width: 890px) {
    left: 30px;
    width: 80px;
    font-size: 12px;
  }
  &:hover {
    background-color: #818181;
    border: 2px solid #818181;
  }
  &:focus {
    background-color: white;
    color: #2c2c2c;
  }
`;

export const ButtonC = styled.button`
  position: absolute;
  width: 140px;
  height: 40px;

  top: 160px;
  left: 240px;
  color: #fff;
  text-align: center;
  font-size: 30px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 900px;
  font-size: 18px;
  line-height: 26px;
  background-color: #2c2c2c;
  border: 2px solid #2c2c2c;
  box-sizing: border-box;
  border-radius: 10px;

  @media (max-width: 1250px) {
    top: 140px;
  }
  @media (max-width: 1100px) {
    top: 140px;
    height: 35px;
    width: 100px;
    font-size: 12px;
    line-height: 15px;
    left: 160px;
  }
  @media (max-width: 890px) {
    left: 120px;
    width: 80px;
    font-size: 10px;
  }
  &:hover {
    background-color: #818181;
    border: 1px solid #818181;
  }
  &:focus {
    background-color: white;
    color: #2c2c2c;
  }
`;

export const ButtonR = styled.button`
  position: absolute;
  width: 100px;
  height: 40px;

  top: 160px;
  left: 390px;
  color: #fff;
  text-align: center;
  font-size: 30px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 900px;
  font-size: 18px;
  line-height: 26px;
  background-color: #2c2c2c;
  border: 2px solid #2c2c2c;
  box-sizing: border-box;
  border-radius: 10px;

  @media (max-width: 1250px) {
    top: 140px;
  }
  @media (max-width: 1100px) {
    top: 140px;
    width: 80px;
    height: 35px;
    font-size: 12px;
    line-height: 15px;
    left: 270px;
  }
  @media (max-width: 890px) {
    left: 210px;
    width: 80px;
    font-size: 10px;
  }
  &:hover {
    background-color: #818181;
    border: 1px solid #818181;
  }

  &:focus {
    background-color: white;
    color: #2c2c2c;
  }
`;

export const ButtonW = styled.button`
  position: absolute;
  width: 60px;
  height: 40px;

  top: 160px;
  left: 500px;
  color: #fff;
  text-align: center;
  font-size: 30px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 900px;
  font-size: 18px;
  line-height: 26px;
  background-color: #2c2c2c;
  border: 2px solid #2c2c2c;
  box-sizing: border-box;
  border-radius: 10px;

  @media (max-width: 1250px) {
    top: 140px;
  }
  @media (max-width: 1100px) {
    top: 140px;
    width: 50px;
    height: 35px;
    font-size: 12px;
    line-height: 15px;
    left: 360px;
  }
  @media (max-width: 890px) {
    left: 300px;
    font-size: 10px;
  }
  &:hover {
    background-color: #818181;
    border: 1px solid #818181;
  }

  &:focus {
    background-color: white;
    color: #2c2c2c;
  }
`;

export const ButtonF = styled.button`
  position: absolute;
  width: 114px;
  height: 40px;

  top: 160px;
  left: 570px;
  color: #fff;
  text-align: center;
  font-size: 30px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 900px;
  font-size: 18px;
  line-height: 26px;
  background-color: #2c2c2c;
  border: 2px solid #2c2c2c;
  box-sizing: border-box;
  border-radius: 10px;

  @media (max-width: 1250px) {
    top: 190px;
    left: 120px;
  }
  @media (max-width: 1100px) {
    width: 90px;
    height: 35px;
    font-size: 12px;
    line-height: 15px;
    left: 60px;
  }
  @media (max-width: 890px) {
    width: 60px;
    left: 30px;
    font-size: 10px;
  }
  &:hover {
    background-color: #818181;
    border: 1px solid #818181;
  }

  &:focus {
    background-color: white;
    color: #2c2c2c;
  }
`;

export const ButtonM = styled.button`
  position: absolute;
  width: 60px;
  height: 40px;

  top: 160px;
  left: 695px;
  color: #fff;
  text-align: center;
  font-size: 30px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 900px;
  font-size: 18px;
  line-height: 26px;
  background-color: #2c2c2c;
  border: 2px solid #2c2c2c;
  box-sizing: border-box;
  border-radius: 10px;

  @media (max-width: 1250px) {
    top: 190px;
    left: 250px;
  }

  @media (max-width: 1100px) {
    height: 35px;
    font-size: 12px;
    line-height: 15px;
    left: 160px;
  }
  @media (max-width: 890px) {
    left: 100px;
    width: 50px;
  }
  &:hover {
    background-color: #818181;
    border: 1px solid #818181;
  }
  &:focus {
    background-color: white;
    color: #2c2c2c;
  }
`;
