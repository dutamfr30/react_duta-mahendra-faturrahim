import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
  uri: 'https://concise-clam-54.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret':
    'QcoaTyYoDA1xtJTYKof7lZ7PGdIh1XfaS029zJCbuh1qzs0yfHEhon4aX2yMkMCL',
},
});

const wsLink = new GraphQLWsLink(createClient({
    url: 'wss://concise-clam-54.hasura.app/v1/graphql',
    connectionParams: {
        headers: {
            'x-hasura-admin-secret':
            'QcoaTyYoDA1xtJTYKof7lZ7PGdIh1XfaS029zJCbuh1qzs0yfHEhon4aX2yMkMCL',
        },
    },
  }));

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);



const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});

export default client;