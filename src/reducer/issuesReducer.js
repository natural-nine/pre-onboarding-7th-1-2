export const initialState = {
  loading: false,
  issuesData: [],
  success: false,
  failure: false,
};

const INITIAL = "initial";
const SUCCESS = "success";
const FAILURE = "failure";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL: {
      return { ...state, loading: true, success: false, failure: false };
    }
    case SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true,
        failure: false,
        issuesData: action.payload,
      };
    }
    case FAILURE: {
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
