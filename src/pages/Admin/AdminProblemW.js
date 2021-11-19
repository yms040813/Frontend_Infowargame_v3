import React from "react";
import ManageTemplate from "../../components/Admin_Manage/ManageTemplate";
import styled from "styled-components";
import WriteProblem from "../../components/Admin_Manage/Admin_WriteProblem/WriteProblem";

const Background = styled.div`
  background-color: #2c2c2c;
  background-size: cover;
  width: auto;
  margin: 0 0 0 0;
`;

const AdminProblemW = () => {
  return (
    <Background>
      <ManageTemplate />
      <WriteProblem />
    </Background>
  );
};

export default AdminProblemW;
