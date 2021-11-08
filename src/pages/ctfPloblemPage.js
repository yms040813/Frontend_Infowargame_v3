import React from "react";
import CtfTemplete from "../components/ctfPloblem/CtfTemplete";
import CtfProviders from "../providers/CtfProviders";

const ctfPloblemPage = () => {
  return(
    <CtfProviders>
      <CtfTemplete />
    </CtfProviders>
  );
};

export default ctfPloblemPage;