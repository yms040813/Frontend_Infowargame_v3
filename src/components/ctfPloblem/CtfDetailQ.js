import useCtfProblemDetails from '../../hooks/useCtfProblemDetails'
import * as S from './style'

const CtfDetailQ = (params) => {
  const problemDetails = useCtfProblemDetails()
  const problemDt = problemDetails.find(problemDetail => problemDetail.id === params.id)

  return (
    <S.CtfDetailAreaStyled>
      <S.CtfProblemStyled>
        <S.ContentStyled>
          <div className="title">{problemDt.title}</div>
          <div className='content'>{problemDt.content}</div>
        </S.ContentStyled>
        <S.ButtonAreaStyled>
          <input placeholder="INFO CTF{} 을 입력해주세요"/>
          <button className="submitButton">SUBMIT</button>
        </S.ButtonAreaStyled>
      </S.CtfProblemStyled>
    </S.CtfDetailAreaStyled>
  )
}

export default CtfDetailQ