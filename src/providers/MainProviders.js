import { useState } from "react";
import MainNotice from "../context/MainNotice";

const Notice = ({ children }) => {
  const [notice, setNotice] = useState([
    {
      id: "1",
      title: "공지 1번",
      date: "2021-09-09 | 20:00",
    },
    {
      id: "2",
      title: "공지 2번",
      date: "2021-09-09 | 20:00",
    },
    {
      id: "3",
      title: "공지 3번",
      date: "2021-09-09 | 20:00",
    },
    {
      id: "4",
      title: "공지 4번",
      date: "2021-09-09 | 20:00",
    },
    {
      id: "5",
      title: "공지 5번",
      date: "2021-09-09 | 20:00",
    },
    {
      id: "6",
      title: "공지 6번",
      date: "2021-09-09 | 20:00",
    },
  ]);

  return (
    <MainNotice.Provider value={{ notice }}>{children}</MainNotice.Provider>
  );
};

export default Notice;
