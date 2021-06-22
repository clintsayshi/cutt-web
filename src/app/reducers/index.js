import { combineReducers } from "redux";

import actionsReducer from "./actionsReducer";
import postReducer from "./postReducer";
import postsReducer from "./postsReducer";

const reducers = combineReducers({
  actions: actionsReducer,
  post: postReducer,
  posts: postsReducer,
});

export default reducers;
