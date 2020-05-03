import logger from "./logger";
import reduxThunk from "redux-thunk";
import { applyMiddleware } from "redux";

export default applyMiddleware(logger, reduxThunk);
