import React from "react";
import styled from "styled-components";

const Error = () => {
  return (
    <ErrorBox>
      <h1>페이지를 찾을 수 없습니다.</h1>
    </ErrorBox>
  );
};

const ErrorBox = styled.div`
  width: 100%;
  height: 80vh;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Error;
