import React, { useCallback } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { FaRegCommentAlt } from "react-icons/fa";
import remarkGfm from "remark-gfm";
import { getCreateDate } from "../shared/date";

const IssueDetail = ({
  number,
  title,
  created_at,
  comments,
  user,
  markDown,
}) => {
  // const getCreateDate = useCallback(() => {
  //   const date = new Date(created_at);
  //   const year = date.getFullYear();
  //   const month = date.getMonth() + 1;
  //   const day = date.getDate();

  //   return `${year}년 ${month}월 ${day}일`;
  // }, [created_at]);

  // const createdAt = getCreateDate();
  return (
    <DetailBox>
      <TopBox>
        <TitleBox>
          <span>{title}&nbsp;</span>
          <span>| #{number}</span>
        </TitleBox>
        <UserBox>
          <ProfileBox>
            <img src={user.avatar_url} alt="프로필" />
            <span> Writer : {user.login}</span>
          </ProfileBox>
          <CommentsBox>
            <Icon />
            <span>{comments}</span>
          </CommentsBox>
        </UserBox>
        <TimeBox>
          <span>{getCreateDate(created_at)}</span>
        </TimeBox>
      </TopBox>
      <BottomBox>
        <MarkDown remarkPlugins={[remarkGfm]}>{markDown}</MarkDown>
      </BottomBox>
    </DetailBox>
  );
};

const DetailBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0px 12px 42px rgba(0, 0, 0, 0.2);
  padding: 15px;
`;

const TopBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 1.2rem;
  }
  span:last-child {
    font-style: italic;
  }
`;

const UserBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  img {
    width: 50%;
    margin-bottom: 10px;
  }
`;

const CommentsBox = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span {
    font-size: 1.3rem;
  }
`;

const Icon = styled(FaRegCommentAlt)`
  font-size: 1.8rem;
  margin-right: 10px;
`;
const TimeBox = styled.div`
  width: 100%;
  margin: 10px 0px;
`;

const BottomBox = styled.div`
  width: 100%;
  background-color: #f8efba;
`;
const MarkDown = styled(ReactMarkdown)`
  box-sizing: border-box;
  margin: auto;
  padding: 20px 30px;
`;
export default IssueDetail;
