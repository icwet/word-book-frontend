import axios, { AxiosResponse, Method } from "axios";
import { BASE_URL, USERNAME, PASSWORD } from "../config";

const deviceId = () => {
  const navigator = window.navigator;
  const screen = window.screen;
  let uid = `${navigator.mimeTypes.length}`;
  uid += navigator.userAgent.replace(/\D+/g, "");
  uid += navigator.plugins.length;
  uid += screen.height || "";
  uid += screen.width || "";
  uid += screen.pixelDepth || "";
  return uid;
};

export async function requestApi<T, B>(
  url: string,
  method: Method,
  before: Function,
  body: B | null = null,
  headers = {}
): Promise<AxiosResponse<T>> {
  before();
  const _url = `${BASE_URL}${url}`;
  try {
    return axios({
      method: method,
      url: _url,
      data: body,
      headers: {
        ...headers,
        "User-Device-ID": `${deviceId()}`,
      },
      auth: {
        username: `${USERNAME}`,
        password: `${PASSWORD}`,
      },
    });
  } catch (e) {
    throw e;
  }
}
