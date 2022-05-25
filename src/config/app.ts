export const DEFAULT_DATE_FORMAT = "DD.MM.YYYY";

export let API_URL: string;
switch(process.env.NODE_ENV) {
  case 'production':
    API_URL = 'https://wwww.alphaev.app/api/';
    break;
  case 'development':
  default:
    API_URL = 'http://localhost:8061/api/';
}
