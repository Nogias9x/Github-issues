
import { ADD_ISSUE } from './actionTypes';

// create Action
export const addIssueAction = (issue) => {
    return {
        type: ADD_ISSUE,
        issue: issue
    }
};