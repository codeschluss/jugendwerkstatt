import { onError } from '@apollo/client/link/error';
import { GQLErrorEnum } from '../../../interfaces/enums/GQLError.enum';
import { SnackbarTypeEnum } from '../../../interfaces/enums/SnackbarType.enum';
import { snackbarStore } from '../../../store';

// Log any GraphQL errors or network error that occurred
export const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.log('Hello World');
  console.log('An Error Occured!', graphQLErrors, networkError);
  if (graphQLErrors)
    graphQLErrors.forEach(({ extensions, message }) => {
      if (extensions.exception === GQLErrorEnum.BAD_CREDENTIALS) {
        snackbarStore.setState({
          info: { type: SnackbarTypeEnum.ERROR, message },
        });
      }
    });
  if (networkError) console.log(`[Network error]: ${networkError}`);
});
