// jwt decode
import decode from "jwt-decode";

// interfaces
import { JWTModel } from "../../../interfaces/models/JWTModel";

// storage utils
import {
  readFromStorage,
  writeToStorage,
  removeFromStorage,
} from "../webStorage";

// read auth token from localstorage
export const readAuthToken = (key: string): string | null =>
  readFromStorage(key, "localStorage");

/**
 * @param {string} token
 */

// write auth token from localstorage
export const writeAuthToken = (key: string, token: string): void =>
  writeToStorage(key, token, "localStorage");

// remove auth token from localstorage
export const removeAuthToken = (key: string): void =>
  removeFromStorage(key, "localStorage");

/**
 * @param {string} token
 */

// validate auth token if has expired
export const validateAuthToken = (token: string): boolean => {
  if (token) {
    try {
      const decoded = decode<JWTModel>(token);
      const now = Date.now() / 1000;

      // Check if now (in ms) is less then exp time
      return now <= decoded.exp;
    } catch (error) {
      console.error("👾 invalid token format", error);
      return false;
    }
  }
  return false;
};
