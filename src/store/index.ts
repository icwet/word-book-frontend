// Vendor
import { combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
// Reducers
import appTest from "components/App/Actions/index";

const rootReducer = combineReducers({
  appTest: appTest,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;
export default store;
