import { ADD_ISSUE } from "../actions/actionTypes";

const issueReducers = (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD_ISSUE:
      let highlighted = [];
      if (Array.isArray(state.highlighted) && state.highlighted.length < 5)
        highlighted = [...state.highlighted];
        highlighted.push(action.issue);
      return { ...state, highlighted};

    default:
      return { highlighted: [] };
  }
};

export default issueReducers;
