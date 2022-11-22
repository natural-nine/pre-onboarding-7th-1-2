import styled from "styled-components";
import IssuesList from "../components/IssuesList";

const Home = () => {
  return (
    <Wrap>
      <IssuesList />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 90%;
  height: auto;
  margin: auto;
  padding: 30px 35px;
  display: flex;
  flex-direction: column;
`;

export default Home;
