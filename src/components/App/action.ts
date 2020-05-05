import { SystemState, SystemActionTypes, UPDATE_SESSION } from "store/types";

export const updateSession = (newSession: SystemState): SystemActionTypes => ({
  type: UPDATE_SESSION,
  payload: newSession,
});
