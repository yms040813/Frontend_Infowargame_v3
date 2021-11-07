import React from "react";
import ManageTemplate from "../components/Admin_Manage/ManageTemplate";
import styled from "styled-components";
import SelectUser from "../components/Admin_Manage/SelectUser";

const Background = styled.div`
  background-color: #2c2c2c;
  background-size: cover;
  width: auto;
  margin: 0 0 0 0;
`;

const AdminUser = () => {
  return (
    <Background>
      <ManageTemplate />
      <SelectUser />
    </Background>
  );
};

export default AdminUser;
