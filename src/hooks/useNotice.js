import { useContext } from "react";
import NoticeContext from "../context/NoticeContext";

export default function useNotice() {
  const Notices  = useContext(NoticeContext);

  return Notices;
}