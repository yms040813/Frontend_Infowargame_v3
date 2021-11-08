import React from "react";
import MenuBar from "../default/MenuBar";
import ProblemBox from "./ProblemBox";
import * as S from './style'
import useCtfProblems from "../../hooks/useCtfProblems";

const CtfTemplete = () => {
  const problems = useCtfProblems()

  return(
    <S.InnerStyled>
      <MenuBar />
      <S.ProblemAreaStyled>
        <S.ProblemTopicStyled>Pwnable</S.ProblemTopicStyled>
        {problems.map(problem => {
          const {title, score} = problem
          return(
            <ProblemBox title={title} score={score} />
          )
        })}
      </S.ProblemAreaStyled>
    </S.InnerStyled>
  );
};

export default CtfTemplete;