import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IssuesContext } from "../context/issuesContext";
import { getOctokit } from "../shared/octokit";
import { FaRegCommentAlt } from "react-icons/fa";
import Spinner from "./Spinner";
import { getCreateDate } from "../shared/date";

const IssuesList = () => {
  const navigate = useNavigate();
  const state = useContext(IssuesContext);
  const { issuesData, dispatch } = state;
  const [isLoading, setIsLoading] = useState(false);
  const [isTarget, setIsTarget] = useState(false);
  const [isList, setIsList] = useState(issuesData ? issuesData.issuesData : []);
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
    setIsList(prev => prev.concat(response));
    // dispatch({ type: "success", payload: response });
    setIsLoading(false);
    num++;
  };
  const detailClick = state => {
    navigate("/detail", {
      state: state,
    });
  };
  return (
    <>
      {isList?.map((i, idx) => (
        <>
          <IssuesBox
            key={idx}
            onClick={() => {
              detailClick(i);
            }}
          >
            <LeftBox>
              <TitleBox>
                <span># {i.number} |</span>
                <span>{i.title}</span>
              </TitleBox>
              <UserBox>
                <span>Writer : {i.user.login}</span>
              </UserBox>
              <TimeBox>
                <span>{getCreateDate(i.created_at)}</span>
              </TimeBox>
            </LeftBox>
            <RightBox>
              <Icon />
              <span>{i.comments}</span>
            </RightBox>
          </IssuesBox>
          {idx === 3 && (
            <a href="https://www.wanted.co.kr" target="_blank">
              <ImgBox>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
                  alt="ad"
                />
              </ImgBox>
            </a>
          )}
        </>
      ))}
      <ObserverBox ref={setIsTarget}>{isLoading && <Spinner />}</ObserverBox>
    </>
  );
};

const IssuesBox = styled.div`
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0px 12px 42px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const LeftBox = styled.div`
  width: 70%;
  height: 170px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TitleBox = styled.div`
  span {
    margin-right: 10px;
  }
`;

const UserBox = styled.div`
  margin: 20px 0px;
`;

const TimeBox = styled.div``;
const RightBox = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.3rem;
  padding: 0px 30px;
  span {
    margin-left: 15px;
  }
`;

const Icon = styled(FaRegCommentAlt)``;

const ObserverBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ImgBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70%;
    height: 150px;
  }
`;

export default IssuesList;
