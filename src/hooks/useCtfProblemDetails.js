import { useContext } from "react";
import CtfContext from "../context/CtfContext";

export default function useCtfProblemDetails() {
  const { pwnableProblemDetails, reversingProblemDetails, webProblemDetails } = useContext(CtfContext);

  return { pwnableProblemDetails, reversingProblemDetails, webProblemDetails };
}