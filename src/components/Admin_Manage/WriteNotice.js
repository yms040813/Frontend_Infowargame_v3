import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import Quill from "quill";
import "quill/dist/quill.bubble.css";

const WhiteBox = styled.div`
  background-color: white;
  width: calc(100% - 440px);
  height: 840px;
  top: 120px;
  left: 370px;
  position: absolute;
  border: 5px solid #000;
  box-sizing: border-box;
  border-radius: 40px;
  @media (max-width: 830px) {
    width: 350px;
  }

  h2 {
    background-color: white;

    color: black;
    position: absolute;
    text-align: center;
    top: 30px;
    left: 110px;
    font-family: Noto Sans KR;
    font-size: 25px;
    @media (max-width: 1100px) {
      top: 50px;
      font-size: 15px;
    }
    @media (max-width: 890px) {
      left: 50px;
    }
  }

  h3 {
    background-color: white;

    color: black;
    position: absolute;
    text-align: center;
    top: 138px;
    left: 110px;
    font-family: Noto Sans KR;
    font-size: 25px;
    @media (max-width: 1100px) {
      top: 155px;
      font-size: 15px;
    }
    @media (max-width: 890px) {
      left: 50px;
    }
  }
`;

const StyledInput = styled.input`
  position: absolute;
  width: calc(100% - 370px);
  height: 51px;
  left: 100px;
  top: 74px;
  font-size: 18px;
  padding-left: 20px;
  background-color: #fff;
  border: 1px solid #000;
  box-sizing: border-box;
  border-radius: 10px;
  @media (max-width: 1100px) {
    font-size: 10px;
    width: 180px;
    height: 41px;
  }
  @media (max-width: 890px) {
    left: 40px;
    width: 180px;
  }
`;

const ContentInput = styled.div`
  position: absolute;
  width: calc(100% - 190px);
  height: calc(100% - 300px);
  left: 100px;
  top: 181px;
  font-size: 18px;
  padding-left: 20px;
  background-color: #fff;
  border: 1px solid #000;
  box-sizing: border-box;
  border-radius: 10px;
  padding-top: 30px;

  text-align: top;

  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 18px;
  }
  @media (max-width: 1100px) {
    font-size: 10px;
    width: 300px;
  }
  @media (max-width: 890px) {
    left: 40px;
    width: 280px;
  }
`;

const ButtonStyled = styled(Button)`
  position: absolute;
  width: 161px;
  height: 51px;
  font-family: CookieRun;
  top: 74px;
  right: 86px;
  color: #fff;
  text-align: center;
  font-size: 30px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 900px;
  font-size: 20px;
  line-height: 29px;

  border: 1px solid #000;
  box-sizing: border-box;
  border-radius: 20px;

  @media (max-width: 1100px) {
    width: 100px;
    height: 41px;
    font-size: 15px;
    left: 300px;
  }
  @media (max-width: 890px) {
    left: 240px;
    width: 80px;
    font-size: 12px;
  }
  &:hover {
    background-color: #818181;
    border: 1px solid #818181;
  }
`;

const WriteNotice = () => {
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
    <WhiteBox>
      <StyledInput
        autoComplete="title"
        name="title"
        placeholder="TITLE을 입력해주세요"
      />
      <h2>TITLE</h2>
      <ContentInput>
        <div ref={quillElement} />
      </ContentInput>
      <h3>CONTENT</h3>

      <ButtonStyled>작성하기</ButtonStyled>
    </WhiteBox>
  );
};

export default WriteNotice;
