import React from "react";
import CtfTemplete from "../../components/Admin_Manage/Admin_Problem/ctfTemplete";
import CtfProviders from "../../providers/CtfProviders";
import styled from "styled-components";

const BackgroundStyle = styled.div`
  width: 1920px;
  margin: 0 auto;
  background-color: #2c2c2c;
  position: relative;
`;

const AdminProblem = () => {
  return (
    <BackgroundStyle>
      <CtfProviders>
        <CtfTemplete />
      </CtfProviders>
    </BackgroundStyle>
  );
};

export default AdminProblem;
