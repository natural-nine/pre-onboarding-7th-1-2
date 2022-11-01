import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Error from "../components/Error";
import IssueDetail from "../components/IssueDetail";

const Detail = () => {
  const location = useLocation();
  return (
    <Wrap>
      {location.state === null ? (
        <Error />
      ) : (
        <IssueDetail
          number={location?.state.number}
          title={location?.state.title}
          created_at={location?.state.created_at}
          comments={location?.state.comments}
          user={location?.state.user}
          markDown={location?.state.markDown}
        />
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 90%;
  height: 85vh;
  border: 1px solid red;
  margin: auto;
  padding: 30px 35px;
  display: flex;
  flex-direction: column;
`;

export default Detail;
