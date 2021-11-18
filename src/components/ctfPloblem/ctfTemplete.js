import React from "react";
import { Link } from 'react-router-dom'
import MenuBar from "../default/MenuBar";
import ProblemBox from "./ProblemBox";
import useCtfProblems from "../../hooks/useCtfProblems";
import CtfDetailQ from "./CtfDetailQ";
import * as S from './style'

const CtfTemplete = (params) => {
  const problems = useCtfProblems()
  return(
    <div className="inner-style">
      <MenuBar />
      <S.ProblemAreaStyled>
        <S.ProblemTopicStyled>Pwnable</S.ProblemTopicStyled>
        {problems.map(problem => {
          const {id, title, score} = problem
          return(<Link to={`/ctf/pwnable/${id}`}><ProblemBox title={title} score={score} /></Link>)
        })}
      </S.ProblemAreaStyled>
      { !Number.isNaN(Number(params.id)) ? <CtfDetailQ id={params.id}/> : null }
    </div>
  );
};

export default CtfTemplete;