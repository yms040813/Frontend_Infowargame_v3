import React, { useRef, useEffect, useState } from "react";
import FileUpload from "../../../components/common/FileUpload";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import * as S from "./style";

//function

const WriteProblem = () => {
  const quillElement = useRef(null); //Quill을 적용할 DivElement 설정
  const quillInstance = useRef(null); //Quill 인스턴스 설정

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "bubble",
      placeholder: "CONTENT를 입력하세요.",
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block", "link", "image"],
        ],
      },
    });
  }, []);

  return (
    <S.WhiteBox>
      <S.StyledInput
        autoComplete="title"
        name="title"
        placeholder="TITLE을 입력해주세요"
      />
      <h2>TITLE</h2>
      <S.ButtonStyled>작성하기</S.ButtonStyled>
      <S.ButtonP>Pwnable</S.ButtonP>
      <S.ButtonC>Cryptography</S.ButtonC>
      <S.ButtonR>Reversing</S.ButtonR>
      <S.ButtonW>Web</S.ButtonW>
      <S.ButtonF>Forensics</S.ButtonF>
      <S.ButtonM>Misc</S.ButtonM>
      <S.ContentInput>
        <div ref={quillElement} />
      </S.ContentInput>
      <h3>CONTENT</h3>
      <S.FlagStyle name="flag" placeholder="FLAG 를 입력해주세요" />
      <h4>FLAG</h4>
      <S.ScoreStyle name="score" placeholder="SCORE 를 입력해주세요" />
      <h5>SCORE</h5>
      <FileUpload />
      <h6>FILES</h6>
    </S.WhiteBox>
  );
};

export default WriteProblem;
