import { useContext } from "react";
import MBarContext from "../context/MBarContext";

export default function useMBar() {
  const { ctfScroll, changeFalse, changeScroll  } = useContext(MBarContext);
  return { ctfScroll, changeFalse, changeScroll };
}