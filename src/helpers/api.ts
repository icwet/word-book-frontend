import axios, { Method } from "axios";
import { BASE_URL, BASE_AUTH } from "../config";

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
): Promise<T | any> {
  before();
  const _url = `${BASE_URL}${url}`;
  try {
    const request = await axios({
      method: method,
      url: _url,
      data: body,
      headers: {
        ...headers,
        Authorization: `Bearer ${BASE_AUTH}`,
        "Device-ID": `${deviceId()}`,
      },
    });
    return request.data;
  } catch (e) {
    throw e;
  }
}
