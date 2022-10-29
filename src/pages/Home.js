import axios from "axios";
import React from "react";
import { useEffect } from "react";

const Home = () => {
  const getIssue = () => {
    axios
      .get("https://api.github.com/repos/angular/angular-cli/issues?q=sort")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getIssue();
  }, []);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Home;
