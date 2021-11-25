import useCtfProblemDetails from "../../hooks/useCtfProblemDetails";
import * as S from "./style";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CtfDetailQ = (params) => {
  const { pwnableProblemDetails, reversingProblemDetails, webProblemDetails } =
    useCtfProblemDetails();

  let problemDetails;
  switch (params.page) {
    case "pwnable":
      problemDetails = pwnableProblemDetails;
      break;
    case "reversing":
      problemDetails = reversingProblemDetails;
      break;
    case "web":
      problemDetails = webProblemDetails;
      break;
    default:
      problemDetails = pwnableProblemDetails;
  }

  const problemDt = problemDetails.find(
    (problemDetail) => problemDetail.id === params.id
  );

  return (
    <S.CtfDetailAreaStyled>
      <S.CtfProblemStyled>
        <S.ExitButtonStyled>
          <S.DefaultLinkStyled to={`/ctf/${params.page}`}>
            {/* <FontAwesomeIcon icon={faTimes} style={{ color: "black" }} /> */}
          </S.DefaultLinkStyled>
        </S.ExitButtonStyled>
        <S.ContentStyled>
          <div className="title">{problemDt.title}</div>
          <div className="content">{problemDt.content}</div>
        </S.ContentStyled>
        <S.ButtonAreaStyled>
          <a href="%PUBLIC_URL%/test.jpg" download="test.jpg">
            FILE DOWNLOAD
          </a>
          <input placeholder="INFO CTF{} 을 입력해주세요" />
          <button className="submitButton">SUBMIT</button>
        </S.ButtonAreaStyled>
      </S.CtfProblemStyled>
    </S.CtfDetailAreaStyled>
  );
};

export default CtfDetailQ;
