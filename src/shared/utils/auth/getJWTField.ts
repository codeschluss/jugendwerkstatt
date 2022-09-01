// jwt decode
import decode from "jwt-decode";

// interfaces
import { JWTModel } from "../../../interfaces/models/JWTModel";

/**
 * getSingleJWTField decode token and return JWTModel or null
 * @param {string} token
 */
export const getSingleJWTField = (token: string): JWTModel | null => {
  try {
    const decoded = decode<JWTModel>(token);

    return decoded;
  } catch (error) {
    console.error("👾 Invalid token format", error);
    return null;
  }
};
