import { combineReducers } from "redux";
import authUser from "./authUser";
import users from "./users";
import polls from "./polls";

export default combineReducers({
  authUser,
  users,
  polls,
});
