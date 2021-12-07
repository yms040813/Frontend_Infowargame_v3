import React from "react";
import MainTemplete from "../components/main/main";
import Notice from "../providers/MainProviders";

const MainPage = () => {
  return (
    <Notice>
      <MainTemplete />
    </Notice>
  );
};

export default MainPage;
