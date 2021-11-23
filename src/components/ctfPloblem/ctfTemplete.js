import React from "react";
import { Link } from "react-router-dom";
import MenuBar from "../default/MenuBar";
import ProblemBox from "./ProblemBox";
import useCtfProblems from "../../hooks/useCtfProblems";
import CtfDetailQ from "./CtfDetailQ";
import * as S from "./style";

const CtfTemplete = (match) => {
  const { pwnableProblems, reversingProblems, webProblems } = useCtfProblems();

  let subMenu;
  switch (match.id.params.id) {
    case "pwnable":
      subMenu = "pwnable";
      break;
    case "reversing":
      subMenu = "reversing";
      break;
    case "web":
      subMenu = "web";
      break;
    default:
      subMenu = "id";
  }

  let pageName = match.id.url.slice(5);
  pageName = subMenu === "id" ? pageName.slice(0, -2) : pageName;

  let problems;
  switch (pageName) {
    case "pwnable":
      problems = pwnableProblems;
      break;
    case "reversing":
      problems = reversingProblems;
      break;
    case "web":
      problems = webProblems;
      break;
    default:
      problems = pwnableProblems;
  }

  return (
    <div className="inner-style">
      <MenuBar page={pageName} />
      <S.ProblemAreaStyled>
        <S.ProblemTopicStyled>
          {pageName[0].toUpperCase() + pageName.slice(1)}
        </S.ProblemTopicStyled>
        {problems.map((problem) => {
          const { id, title, score } = problem;
          return (
            <Link to={`/ctf/${subMenu}/${id}`}>
              <ProblemBox title={title} score={score} />
            </Link>
          );
        })}
      </S.ProblemAreaStyled>
      {!Number.isNaN(Number(match.id.params.id)) ? (
        <CtfDetailQ id={match.id.params.id} page={pageName} />
      ) : null}
    </div>
  );
};

export default CtfTemplete;
