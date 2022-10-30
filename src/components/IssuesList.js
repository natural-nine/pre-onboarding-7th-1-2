import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const IssuesList = ({ isList, getIssue }) => {
  const [isTarget, setIsTarget] = useState(null);
  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          getIssue();
        }
      },
      { threshold: 1 }
    )
  );
  useEffect(() => {
    const currentTarget = isTarget;
    const currentObserver = observer.current;
    if (currentTarget) {
      currentObserver.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        currentObserver.unobserve(currentTarget);
      }
    };
  }, [isTarget]);
  console.log(isTarget);
  return (
    <MainBox>
      {isList?.map((i, idx) => (
        <IssueBox key={idx}>
          <span>{i.title}</span>
        </IssueBox>
      ))}
      <div ref={isTarget}>target</div>
    </MainBox>
  );
};

const MainBox = styled.div`
  width: 75%;
  height: 90vh;
  margin: auto;
`;
const IssueBox = styled.div`
  width: 60%;
  height: 100px;
  border: 1px solid red;
`;

export default IssuesList;
