import { combineReducers } from "redux";
import CommentsReducer from "reducers/comments";
import AuthReducer from "reducers/auth";

export default combineReducers({
  comments: CommentsReducer,
  auth: AuthReducer
});
