import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "store/index";
import { EmailAccess, RegistrationFormValues, UserId } from "./types";
import { requestApi } from "helpers/api";

interface LoginInitialState {
  emailAccess: EmailAccess | null;
  emailAccessLoading: boolean;
  email: null | string;
  error: null | string;
  modal: boolean;
  sendingRegistrationData: boolean;
}

const initialState: LoginInitialState = {
  emailAccess: null,
  emailAccessLoading: false,
  email: null,
  modal: false,
  error: null,
  sendingRegistrationData: false,
};

const Login = createSlice({
  name: "Login",
  initialState,
  reducers: {
    toggleModal(state) {
      state.modal = !state.modal;
    },

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

    sendRegistrationDataStart(state) {
      state.sendingRegistrationData = true;
    },
    sendRegistrationDataSuccess(state) {
      state.sendingRegistrationData = false;
    },
    sendRegistrationDataFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const getEmailAccess = (email: string): AppThunk => (dispatch) => {
  requestApi<EmailAccess, {}>(`/auth/emails/${email}`, "get", () =>
    dispatch(getEmailAccessStart(email))
  ).then(
    (emailAccess) => {
      dispatch(getEmailAccessSuccess(emailAccess));
    },
    (err) => dispatch(getEmailAccessFailed(err.toString()))
  );
};

export const sendRegistrationData = (
  data: RegistrationFormValues
): AppThunk => (dispatch) => {
  requestApi<UserId, RegistrationFormValues>(
    `/auth/users`,
    "post",
    () => {
      sendRegistrationDataStart();
    },
    data
  ).then(
    () => dispatch(sendRegistrationDataSuccess()),
    (err) => dispatch(sendRegistrationDataFailed(err.toString()))
  );
};

export const {
  toggleModal,
  getEmailAccessStart,
  getEmailAccessSuccess,
  getEmailAccessFailed,
  sendRegistrationDataStart,
  sendRegistrationDataSuccess,
  sendRegistrationDataFailed,
} = Login.actions;
export default Login.reducer;
