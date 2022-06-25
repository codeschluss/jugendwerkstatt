import { onError } from "@apollo/client/link/error";
import { GQLErrorEnum } from "../../../interfaces/enums/GQLError.enum";
import { GQLErrorTypeEnum } from "../../../interfaces/enums/GQLErrorType.enum";
import { snackbarStore } from "../../../store";

// Log any GraphQL errors or network error that occurred
export const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.log("Hello World");
  console.log("An Error Occured!", graphQLErrors, networkError);
  if (graphQLErrors)
    graphQLErrors.forEach(({ extensions }) => {
      if (extensions.exception === GQLErrorEnum.BAD_CREDENTIALS) {
        console.log("Bad Credentials!!!!");
        snackbarStore.setState({
          open: true,
          info: { type: GQLErrorTypeEnum.ERROR, message: "Hello World" },
        });
      }
    });
  if (networkError) console.log(`[Network error]: ${networkError}`);
});
