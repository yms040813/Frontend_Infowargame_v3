import { useContext } from "react";
import CtfContext from "../context/CtfContext";

export default function useCtfProblems() {
  const { pwnableProblems, reversingProblems, webProblems } = useContext(CtfContext);

  return { pwnableProblems, reversingProblems, webProblems };
}