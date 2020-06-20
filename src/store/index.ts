// Vendor
import { combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
// Reducers
import Login from "components/Containers/Login/Actions/index";

const rootReducer = combineReducers({
  Login: Login,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;
export default store;
