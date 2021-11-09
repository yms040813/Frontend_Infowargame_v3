import { useContext } from "react";
import CtfContext from "../context/CtfContext";

export default function useCtfProblems() {
  const { problems } = useContext(CtfContext);

  return problems;
}