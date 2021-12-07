import { useContext } from "react";
import MainNotice from "../context/MainNotice";

export default function useMyPageUsersInfo() {
  const { notice } = useContext(MainNotice);
  return notice;
}
