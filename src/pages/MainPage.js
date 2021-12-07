import React from "react";
import MainTemplete from "../components/main/main";
import Notice from "../providers/MainProvider";

const MainPage = () => {
  return (
    <Notice>
      <MainTemplete />
    </Notice>
  );
};

export default MainPage;
