import React from "react";
import styled from "styled-components";
import Login from "../../img/Login.png";

const AuthTemplateBlock = styled.div`
  position: absolute;
  background-image: url(${Login});
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  //flex-direction: column;
  //justify-content: center;
  align-items: center;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <div className="logo-area"></div>
      {children}
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
