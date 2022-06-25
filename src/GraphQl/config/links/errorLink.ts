import { onError } from '@apollo/client/link/error';
import { GQLErrorEnum } from '../../../interfaces/enums/GQLError.enum';

// Log any GraphQL errors or network error that occurred
export const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.log('Hello World');
  console.log('An Error Occured!', graphQLErrors, networkError);
  if (graphQLErrors)
    graphQLErrors.forEach(({ extensions }) => {
      if (extensions.exception === GQLErrorEnum.BAD_CREDENTIALS) {
        console.log('Bad Credentials!!!!');
      }
    });
  if (networkError) console.log(`[Network error]: ${networkError}`);
});
