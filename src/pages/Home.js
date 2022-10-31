import React, { useContext, useReducer, useState } from "react";
import styled from "styled-components";
import IssuesList from "../components/IssuesList";
import { IssuesContext } from "../context/issuesContext";

const Home = () => {
  const state = useContext(IssuesContext);
  const { issuesData } = state;
  return (
    <Wrap>
      <IssuesList issuesData={issuesData} />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 90%;
  height: auto;
  border: 1px solid red;
  margin: auto;
  padding: 30px 35px;
  display: flex;
  flex-direction: column;
`;

export default Home;
