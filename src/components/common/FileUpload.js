import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const SelectFile = styled.div`
  position: absolute;
  background-color: #2c2c2c;
  border: 1px solid #2c2c2c;
  color: white;
  text-align: center;
  border-radius: 20px;
  font-family: Noto Sans KR;
  line-height: 18px;
  font-size: 18px;
  font-weight: 900;
  width: 160px;
  height: 25px;
  left: 100px;
  top: 700px;
  padding-top: 5px;
  @media (max-width: 1700px) {
    top: 730px;
  }
  @media (max-width: 1100px) {
    line-height: 20px;
    font-size: 13px;
    width: 120px;
    height: 30px;
  }
  @media (max-width: 890px) {
    left: 30px;
  }
`;

const StyledInput = styled.input`
  top: 700px;
  position: absolute;
  height: 40px;
  border: 1px solid #2c2c2c;
  border-radius: 10px;
  padding-left: 10px;
  width: 300px;
  left: 300px;

  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 18px;
  @media (max-width: 1700px) {
    top: 730px;
  }
  @media (max-width: 1100px) {
    left: 250px;
    width: 150px;
    height: 41px;
  }
  @media (max-width: 890px) {
    left: 170px;
  }
`;

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    // files 배열 자체를 담을 것이므로 index 뺌.
    setSelectedFile(event.target.files);
  };

  const handleFileUpload = () => {
    const formData = new FormData();

    // 배열 내부에 있는 모든 요소를 append 해야 하므로
    for (let i = 0; i < selectedFile.length; i++) {
      formData.append("myfile", selectedFile[i], selectedFile[i].name);
    }

    // 여러 개의 파일이므로 multipart type으로
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    // config 넣어줌
    axios
      .post("api/uploadfile", formData, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <StyledInput name="file" placeholder="파일찾기" />
      <SelectFile>SELECT FILE</SelectFile>
    </div>
  );
};

export default FileUpload;
