import { useContext } from "react";
import MyPageContext from "../context/MyPageContext";

export default function useMyPageUsersInfo() {
  const { usersInfo } = useContext(MyPageContext);
  return usersInfo;
}