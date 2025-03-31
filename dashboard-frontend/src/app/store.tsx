import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const appReducer = (state = {}, action: any) => state;

const rootReducer = combineReducers({
  app: appReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
