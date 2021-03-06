export const DEFAULT_DATE_FORMAT = "DD.MM.YYYY";

export let API_URL: string;
export let BASE_URL: string = "";
export let WS_URL: string = "wss://www.alphaev.app/api/";
switch (process.env.NODE_ENV) {
  case "production":
    BASE_URL = "https://www.alphaev.app/";
    WS_URL = "wss://www.alphaev.app/api/";
    break;
  case "development":
  default:
    BASE_URL = "https://www.alphaev.app/";
}

API_URL = BASE_URL + "api/";
