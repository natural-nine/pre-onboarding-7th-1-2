import React from "react";
import styled from "styled-components";

const Spinner = () => {
  return (
    <>
      <SpinnerBox />
    </>
  );
};

const SpinnerBox = styled.div`
  width: 6rem;
  height: 6rem;
  border: 15px solid rgba(163, 151, 198, 0.2);
  border-top: 15px solid rgba(163, 151, 198, 1);
  border-radius: 50%;
  background-color: #ecf0f1;
  animation: spinner 1s linear infinite;
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
