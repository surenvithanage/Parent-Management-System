import { combineReducers } from "redux";
import { subjects } from "./subjectReducer";
import { tutionClass } from "./classReducer";
import { ui } from "./uiReducer";

export default combineReducers({
  subjects,
  tutionClass,
  ui
});
