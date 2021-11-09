import React from "react";
import CtfTemplete from "../components/ctfPloblem/ctfTemplete"
import CtfProviders from "../providers/CtfProviders";

const ctfPloblemPage = () => {
  return(
    <CtfProviders>
      <CtfTemplete />
    </CtfProviders>
  );
};

export default ctfPloblemPage;