import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.REACT_APP_API_KEY,
});

export const getOctokit = async page =>
  await octokit
    .request(`GET /repos/angular/angular-cli/issues`, {
      sort: "comments",
      per_page: 20,
      page: page,
    })
    .then(res => {
      return res.data;
    });
