import { InitialTypes, TypesActions } from "../types/contextTypes";

export const initialState = {
  loading: false,
  issuesData: [],
  success: false,
  failure: false,
};

const INITIAL = "initial";
const SUCCESS = "success";
const FAILURE = "failure";

const reducer = (state: InitialTypes, action: TypesActions) => {
  switch (action.type) {
    case "initial": {
      return { ...state, loading: true, success: false, failure: false };
    }
    case "success": {
      return {
        ...state,
        loading: false,
        success: true,
        failure: false,
        issuesData: action.payload,
      };
    }
    case "failure": {
      return {
        ...state,
        loading: false,
        failure: true,
      };
    }
    default:
      return state;
  }
};

export default reducer;
