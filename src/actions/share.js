import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receivePolls } from "./polls";
import { setAuthUser } from "./authUser";
import { showLoading, hideLoading } from "react-redux-loading";

const AUTH_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, polls }) => {
      dispatch(receiveUsers(users));
      dispatch(receivePolls(polls));
      dispatch(setAuthUser(AUTH_ID));
      dispatch(hideLoading());
    });
  };
}
