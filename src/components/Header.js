import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderBox>
      <h1>angular / angular-cli</h1>
    </HeaderBox>
  );
};

const HeaderBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
