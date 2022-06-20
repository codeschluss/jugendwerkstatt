import { RetryLink } from "@apollo/client/link/retry";

export const retryLink = () => {
  console.log("dasadadadsa");
  return new RetryLink({
    attempts: (count, operation, error) => {
      console.log("error", error);
      return false;
    },
    delay: (count, operation, error) => {
      return count * 1000 * Math.random();
    },

})
}