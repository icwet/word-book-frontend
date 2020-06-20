import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "store/index";
import { EmailAccess } from "./types";
import { requestApi } from "helpers/api";

interface LoginInitialState {
  emailAccess: EmailAccess | null;
  emailAccessLoading: boolean;
  email: null | string;
  error: null | string;
}

const initialState: LoginInitialState = {
  emailAccess: null,
  emailAccessLoading: false,
  email: null,
  error: null,
};

const Login = createSlice({
  name: "Login",
  initialState,
  reducers: {
    getEmailAccessStart(state, action) {
      state.emailAccessLoading = true;
      state.email = action.payload;
    },
    getEmailAccessSuccess(state, action: PayloadAction<EmailAccess>) {
      state.emailAccessLoading = false;
      state.emailAccess = action.payload;
    },
    getEmailAccessFailed(state, action: PayloadAction<string>) {
      state.emailAccessLoading = false;
      state.error = action.payload;
    },
  },
});

export const fetchEmailAccess = (email: string): AppThunk => (dispatch) => {
  requestApi<EmailAccess, {}>(`/auth/emails/${email}`, "get", () =>
    dispatch(getEmailAccessStart(email))
  ).then(
    (emailAccess) => {
      dispatch(getEmailAccessSuccess(emailAccess));
    },
    (err) => dispatch(getEmailAccessFailed(err.toString()))
  );
};

export const {
  getEmailAccessStart,
  getEmailAccessSuccess,
  getEmailAccessFailed,
} = Login.actions;
export default Login.reducer;
