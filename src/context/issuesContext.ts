import { createContext } from "react";
import { InitialTypes } from "../types/contextTypes";

const initialState = {
  loading: false,
  issuesData: [],
  success: false,
  failure: false,
};

export const IssuesContext = createContext<{
  issuesData: InitialTypes;
  dispatch: React.Dispatch<any>;
}>({
  issuesData: initialState,
  dispatch: () => null,
});
