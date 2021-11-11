import React from "react";
import AuthForm from "../../components/Admin_auth/Admin_AuthForm";
import AuthTemplate from "../../components/Admin_auth/Admin_AuthTemplate";

const AdminLoginPage = () => {
  return (
    <AuthTemplate>
      <AuthForm />
    </AuthTemplate>
  );
};

export default AdminLoginPage;
