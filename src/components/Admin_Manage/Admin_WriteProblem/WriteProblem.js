import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import FileUpload from "../../../components/common/FileUpload";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import * as S from "./style";

export const WhiteBox = styled.div`
  background-color: white;
  width: calc(100% - 440px);
  height: 840px;
  top: 120px;
  left: 370px;
  position: absolute;
  border: 5px solid #000;
  box-sizing: border-box;
  border-radius: 40px;

  @media (max-width: 880px) {
    width: 400px;
  }
  //title
  h2 {
    background-color: white;

    color: black;
    position: absolute;
    text-align: center;
    top: 60px;
    left: 110px;
    font-family: Noto Sans KR;
    font-size: 25px;
    @media (max-width: 1100px) {
      top: 65px;
      font-size: 15px;
    }
    @media (max-width: 890px) {
      left: 50px;
    }
  }
  //content
  h3 {
    background-color: white;

    color: black;
    position: absolute;
    text-align: center;
    top: 235px;
    left: 110px;
    font-family: Noto Sans KR;
    font-size: 25px;
    @media (max-width: 1100px) {
      top: 240px;
      font-size: 15px;
    }
    @media (max-width: 890px) {
      left: 50px;
    }
  }
  //flag
  h4 {
    background-color: white;

    color: black;
    position: absolute;
    text-align: center;
    top: 590px;
    left: 120px;
    font-family: Noto Sans KR;
    font-size: 22px;
    @media (max-width: 1700px) {
      font-size: 18px;
      top: 570px;
    }
    @media (max-width: 1100px) {
      top: 574px;
      font-size: 14px;
    }
    @media (max-width: 890px) {
      left: 50px;
    }
  }
  //score
  h5 {
    background-color: white;

    color: black;
    position: absolute;
    text-align: center;
    top: 587px;
    left: 720px;
    font-family: Noto Sans KR;
    font-size: 23px;
    @media (max-width: 1700px) {
      font-size: 18px;
      top: 640px;
      left: 120px;
    }
    @media (max-width: 1100px) {
      left: 120px;
      top: 644px;
      font-size: 14px;
    }
    @media (max-width: 890px) {
      left: 50px;
    }
  }
  //files
  h6 {
    background-color: white;

    color: black;
    position: absolute;
    text-align: center;
    top: 690px;
    left: 320px;
    font-family: Noto Sans KR;
    font-size: 19px;
    @media (max-width: 1700px) {
      font-size: 18px;
      top: 720px;
      left: 310px;
    }
    @media (max-width: 1100px) {
      left: 260px;
      top: 724px;
      font-size: 14px;
    }
    @media (max-width: 890px) {
      left: 180px;
    }
  }
`;
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

  const HandleClick = () => {};

  return (
    <WhiteBox>
      <S.StyledInput
        autoComplete="title"
        name="title"
        placeholder="TITLE을 입력해주세요"
      />
      <h2>TITLE</h2>
      <S.ButtonStyled>작성하기</S.ButtonStyled>
      <S.ButtonP onClick={HandleClick}>Pwnable</S.ButtonP>
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
    </WhiteBox>
  );
};

export default WriteProblem;
