import styled from "styled-components";

export const Event = styled.div`
  width: 120px;
  height: 48px;
  position: absolute;
  left: 370px;
  top: 15px;
  font-weight: 900;
  font-size: 35px;
  line-height: 52px;
  text-align: center;
`;

export const Banner = styled.div`
  width: 1400px;
  height: 460px;
  position: absolute;
  left: 375px;
  top: 80px;
  background-image: url(${process.env.PUBLIC_URL +
  "/images/security-265130.jpg"});
  background-position: 50% 35%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
`;

export const Notice = styled(Event)`
  width: 150px;
  height: 48px;
  top: 560px;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex: 300px;
  flex-wrap: wrap;
  position: absolute;
  top: 600px;
`;

export const List = styled.div`
  width: 665px;
  height: 90px;
  left: 380px;
  margin-top: 30px;
  margin-left: 30px;
  background-color: #2c2c2c;
  border-radius: 20px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
`;

export const Title = styled.div`
  width: 350px;
  height: 40px;
  margin-left: 20px;
  margin-top: 10px;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
`;

export const Date = styled.div`
  width: 300px;
  height: 20px;
  font-size: 28px;
  line-height: 27px;
  margin-left: 400px;
  color: #ffffff;
`;
