import { ADD_ISSUE } from "../actions/actionTypes";

const issueReducers = (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD_ISSUE:
      let highlighted = [];
      if (Array.isArray(state.highlighted)) {
        highlighted = [...state.highlighted];
        if (!highlighted.some((item) => item.Id === action.issue.Id)) {
          if (state.highlighted.length === 5) {
            highlighted.pop();
          }
          highlighted = [action.issue, ...highlighted];
        }
      }
      return { ...state, highlighted };
    default:
      return { highlighted: [] };
  }
};

export default issueReducers;
