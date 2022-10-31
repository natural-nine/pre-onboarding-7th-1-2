import React, { useContext, useReducer, useState } from "react";
import { IssuesContext } from "../context/issuesContext";

const Home = () => {
  const testData = useContext(IssuesContext);
  return <div>hello</div>;
};

export default Home;
