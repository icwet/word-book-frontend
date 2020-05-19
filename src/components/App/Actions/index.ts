import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "store/index";
import { getPing } from "api/index";
import { PingResult } from "api/types";

interface AppState {
  testResp: PingResult | null;
}

const initialState: AppState = {
  testResp: null,
};

const appTest = createSlice({
  name: "appTest",
  initialState,
  reducers: {
    getRepoDetailsSuccess(state, action: PayloadAction<PingResult>) {
      state.testResp = action.payload;
    },
    getRepoDetailsFailed(state, action: PayloadAction<PingResult>) {
      state.testResp = action.payload;
    },
  },
});

export const { getRepoDetailsSuccess, getRepoDetailsFailed } = appTest.actions;
export default appTest.reducer;

export const fetchTestData = (): AppThunk => async (dispatch) => {
  try {
    const repoDetails = await getPing();
    dispatch(getRepoDetailsSuccess(repoDetails));
  } catch (err) {
    dispatch(getRepoDetailsFailed(err));
  }
};
