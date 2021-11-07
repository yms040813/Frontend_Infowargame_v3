import React, { useState } from "react";
import ManageTemplate from "../components/Admin_Manage/ManageTemplate";
import styled from "styled-components";

const Background = styled.div`
  background-color: #2c2c2c;
  background-size: cover;
  width: auto;
  margin: 0 0 0 0;
`;

const AdminUser = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "서건희",
    },
    {
      id: 2,
      name: "킹남대",
    },
  ]);
  return (
    <Background>
      <ManageTemplate />
    </Background>
  );
};

export default AdminUser;
