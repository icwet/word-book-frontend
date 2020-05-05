import { SystemState, SystemActionTypes, UPDATE_SESSION } from "store/types";

const initialState: SystemState = {
  loggedIn: false,
  session: "",
  userName: "",
};

export const appReducer = (state = initialState, action: SystemActionTypes) => {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
