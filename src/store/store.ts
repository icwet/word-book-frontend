import { createStore } from "redux";

const initialState = {
  app: "123",
};

// @ts-ignore
const rootReducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

// @ts-ignore
const store = createStore(rootReducer, initialState);

export default store;
