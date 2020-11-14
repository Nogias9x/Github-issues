import { combineReducers } from "redux";
import issueReducer from "./issueReducer";

const myReducer = combineReducers({
    issue: issueReducer,
});

export default myReducer;
