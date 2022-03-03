import { combineReducers } from "redux";
import { reposReducer } from "./repos.reducer";
import { forkReducer } from "./fork.reducer";

export const rootReducer = combineReducers({
  reposReducer,forkReducer
});
