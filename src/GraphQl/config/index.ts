// apollo
import { ApolloClient, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { GQLErrorEnum } from '../../interfaces/enums/GQLError.enum';
import { GQLErrorTypeEnum } from '../../interfaces/enums/GQLErrorType.enum';
import { snackbarStore } from '../../store';

// cache
import { cache } from './cache';

// links
import { links } from './links';

// export new client instance
export const apolloClient = () => {
  // Log any GraphQL errors or network error that occurred
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    console.log('Hello World');
    console.log('An Error Occured!', graphQLErrors, networkError);
    if (graphQLErrors)
      graphQLErrors.forEach(({ extensions }) => {
        if (extensions.exception === GQLErrorEnum.BAD_CREDENTIALS) {
          console.log('Bad Credentials!!!!');
          snackbarStore.setState({
            open: true,
            info: { type: GQLErrorTypeEnum.ERROR, message: 'Hello World' },
          });
        }
      });
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  return new ApolloClient({
    cache,
    link: from([errorLink, links]),
    connectToDevTools: true,
  });
};
