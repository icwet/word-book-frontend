import { combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware(),
});

export default store;
