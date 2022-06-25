// apollo
import { split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

// import all links
import { authLink } from './authLink';
import { httpLink } from './httpLink';
import { wsLink } from './wsLink';

// export split link
export const links = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    // its thinking its an array but its not idk why apollo team used concat as name
    authLink.concat(httpLink)
);
