import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IssuesContext } from "../context/issuesContext";
import { getOctokit } from "../shared/octokit";
import Spinner from "./Spinner";

const IssuesList = () => {
  const navigate = useNavigate();
  const state = useContext(IssuesContext);
  const { issuesData, dispatch } = state;
  const [isLoading, setIsLoading] = useState(false);
  const [isTarget, setIsTarget] = useState(false);
  const [isTest, setIsTest] = useState(issuesData ? issuesData.issuesData : []);
  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoading) {
      observer.unobserve(entry.target);
      await nextIssueItem();
      observer.observe(entry.target);
    }
  };
  useEffect(() => {
    let observer;
    if (isTarget) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.7,
      });
      observer.observe(isTarget);
    }
    return () => observer && observer.disconnect();
  }, [isTarget]);
  const loadingTerm = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
  };
  let num = 1;
  const nextIssueItem = async () => {
    setIsLoading(true);
    loadingTerm();
    const response = await getOctokit(num);
    setIsTest(prev => prev.concat(response));
    // dispatch({ type: "success", payload: response });
    setIsLoading(false);
    num++;
  };
  // console.log(isTest);
  const detailClick = state => {
    navigate("/detail", {
      state: state,
    });
  };
  return (
    <>
      {isTest?.map((i, idx) => (
        <>
          <IssuesBox
            key={idx}
            onClick={() => {
              detailClick(i);
            }}
          >
            <span>{i.title}</span>
            <span>{i.comments}</span>
          </IssuesBox>
          {idx === 4 && <h1>he</h1>}
        </>
      ))}
      <ObserverBox ref={setIsTarget}>{isLoading && <Spinner />}</ObserverBox>
    </>
  );
};

const IssuesBox = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid blue;
  margin-bottom: 25px;
`;

const ObserverBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default IssuesList;
