import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const IssueDetail = ({
  number,
  title,
  created_at,
  comments,
  user,
  markDown,
}) => {
  console.log(number, title, created_at, comments, user, markDown);
  return (
    <>
      <DetailBox></DetailBox>
    </>
  );
};

const DetailBox = styled.div`
  width: 100%;
  height: 80vh;
  border: 1px solid red;
`;

export default IssueDetail;
