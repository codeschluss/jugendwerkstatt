export const DEFAULT_DATE_FORMAT = "DD.MM.YYYY";

export let API_URL: string;
export let BASE_URL: string = "";
export let WS_URL: string = "ws://localhost:8061/api/";
switch (process.env.NODE_ENV) {
  case "production":
    BASE_URL = "https://www.alphaev.app/";
    break;
  case "development":
  default:
    BASE_URL = "http://localhost:8061/";
}

API_URL = BASE_URL + "api/";
