import React from "react";
import MenuBar from "../default/MenuBar";
import ProblemBox from "./ProblemBox";
import * as S from './style'
import useCtfProblems from "../../hooks/useCtfProblems";
import { Link } from 'react-router-dom'

const CtfTemplete = (paramsId) => {
  const problems = useCtfProblems()
  console.log(paramsId)
  return(
    <div className="inner-style">
      <MenuBar />
      <S.ProblemAreaStyled>
        <S.ProblemTopicStyled>Pwnable</S.ProblemTopicStyled>
        {problems.map(problem => {
          const {id, title, score} = problem
          return(
            <>
            <Link to={`/ctf/${id}`}><ProblemBox title={title} score={score} /></Link>
            </>
          )
        })}
      </S.ProblemAreaStyled>
    </div>
  );
};

export default CtfTemplete;