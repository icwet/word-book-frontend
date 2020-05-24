import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "store/index";
import { requestApi } from "helpers/api";
import { AxiosResponse } from "axios";
import { PingResult } from "./types";

interface AppState {
  testResp: AxiosResponse<PingResult> | null;
}

const initialState: AppState = {
  testResp: null,
};

const appTest = createSlice({
  name: "appTest",
  initialState,
  reducers: {
    getRepoDetailsSuccess(
      state,
      action: PayloadAction<AxiosResponse<PingResult>>
    ) {
      state.testResp = action.payload;
    },
    getRepoDetailsFailed(
      state,
      action: PayloadAction<AxiosResponse<PingResult>>
    ) {
      state.testResp = action.payload;
    },
  },
});

export const fetchTestData = (): AppThunk => async (dispatch) => {
  try {
    const repoDetails = await requestApi<PingResult, null>(
      "/ping",
      "get",
      () => {}
    );
    dispatch(getRepoDetailsSuccess(repoDetails));
  } catch (err) {
    dispatch(getRepoDetailsFailed(err));
  }
};

export const { getRepoDetailsSuccess, getRepoDetailsFailed } = appTest.actions;
export default appTest.reducer;
