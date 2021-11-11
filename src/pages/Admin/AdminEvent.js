import React from "react";
import ManageTemplate from "../../components/Admin_Manage/ManageTemplate";
import styled from "styled-components";
import WriteEvent from "../../components/Admin_Manage/WriteEvent";

const Background = styled.div`
  background-color: #2c2c2c;
  background-size: cover;
  width: auto;
  margin: 0 0 0 0;
`;

const AdminEvent = () => {
  return (
    <Background>
      <ManageTemplate />
      <WriteEvent />
    </Background>
  );
};

export default AdminEvent;
