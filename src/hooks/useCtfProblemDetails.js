import { useContext } from "react";
import CtfContext from "../context/CtfContext";

export default function useCtfProblemDetails() {
  const { problemDetails } = useContext(CtfContext);

  return problemDetails;
}