import { combineReducers } from "redux";
import authUser from "./authUser";
import users from "./users";
import polls from "./polls";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  authUser,
  users,
  polls,
  loadingBar: loadingBarReducer,
});
