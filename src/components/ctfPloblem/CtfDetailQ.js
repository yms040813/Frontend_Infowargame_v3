import useCtfProblemDetails from '../../hooks/useCtfProblemDetails'
import * as S from './style'

const CtfDetailQ = (params) => {
  const problemDetails = useCtfProblemDetails()
  const problemDt = problemDetails.find(problemDetail => problemDetail.id === params.id)

  return (
    <S.CtfDetailAreaStyled>
      <S.CtfProblemStyled>
        {problemDt.title}
        <br />
        {problemDt.context}
      </S.CtfProblemStyled>
    </S.CtfDetailAreaStyled>
  )
}

export default CtfDetailQ