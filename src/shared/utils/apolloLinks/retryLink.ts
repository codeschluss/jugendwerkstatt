import { RetryLink } from "@apollo/client/link/retry";

export const retryLink = () => {
  return new RetryLink({
    attempts: (count, operation, error) => {
      return false;
    },
    delay: (count, operation, error) => {
      return count * 1000 * Math.random();
    },

})
}