import { useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { IssuesContext } from "./context/issuesContext";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import reducer, { initialState } from "./reducer/issuesReducer";
import { getOctokit } from "./shared/octokit";

function App() {
  const [issuesData, dispatch] = useReducer(reducer, initialState);
  const getIssuesData = async () => {
    dispatch({ type: "initial" });
    try {
      const response = await getOctokit(0);
      console.log(response, "왜 여기선 찍히지 않는걸까요?");
      dispatch({ type: "success", payload: response });
    } catch (err) {
      dispatch({ type: "failure", error: err });
    }
  };
  useEffect(() => {
    getIssuesData();
  }, []);
  console.log(issuesData);
  return (
    <>
      <IssuesContext.Provider value={{ issuesData, dispatch }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </IssuesContext.Provider>
    </>
  );
}

export default App;
