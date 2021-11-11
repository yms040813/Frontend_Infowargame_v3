import React from "react";
import ManageTemplate from "../../components/Admin_Manage/ManageTemplate";
import styled from "styled-components";
import WriteNotice from "../../components/Admin_Manage/WriteNotice";

const Background = styled.div`
  background-color: #2c2c2c;
  background-size: cover;
  width: auto;
  margin: 0 0 0 0;
`;

const AdminNotice = () => {
  return (
    <Background>
      <ManageTemplate />
      <WriteNotice />
    </Background>
  );
};

export default AdminNotice;
