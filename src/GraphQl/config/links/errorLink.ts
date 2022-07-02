import { onError } from "@apollo/client/link/error";
import { GQLErrorEnum } from "../../../interfaces/enums/GQLError.enum";
import { SnackbarTypeEnum } from "../../../interfaces/enums/SnackbarType.enum";
import { snackbarStore, expireTokenStore } from "../../../store";

// Log any GraphQL errors or network error that occurred
export const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.log("An Error Occured!", graphQLErrors, networkError);
  if (graphQLErrors)
    graphQLErrors.forEach(({ extensions, message }) => {
      if (extensions.exception === GQLErrorEnum.DATA_EXIST) {
        snackbarStore.setState({
          info: { type: SnackbarTypeEnum.ERROR, message },
        });
      }
      if (extensions.exception === GQLErrorEnum.BAD_CREDENTIALS) {
        snackbarStore.setState({
          info: { type: SnackbarTypeEnum.ERROR, message },
        });
      }
      if (extensions.exception === GQLErrorEnum.ACCESS_DENIED) {
        snackbarStore.setState({
          info: {
            type: SnackbarTypeEnum.WARNING,
            message: "Versuchen Sie es nochmal",
          },
        });
        expireTokenStore.setState({
          shouldRefresh: true,
        });
      }
    });
  if (networkError) {
    if (navigator.onLine) {
      snackbarStore.setState({
        info: {
          type: SnackbarTypeEnum.ERROR,
          message: "Something went wrong with server, try again later!",
        },
      });
    } else {
      snackbarStore.setState({
        info: {
          type: SnackbarTypeEnum.ERROR,
          message: "No Internet Connection!",
        },
      });
    }
  }
});
