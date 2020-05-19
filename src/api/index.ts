import axios from "axios";
import { PingResult } from "./types";
import { BASE_URL, USERNAME, PASSWORD } from "../config";

export async function getPing(): Promise<PingResult> {
  const url = `${BASE_URL}/ping`;
  try {
    return axios.get(url, {
      auth: {
        username: `${USERNAME}`,
        password: `${PASSWORD}`,
      },
    });
  } catch (e) {
    throw e;
  }
}
