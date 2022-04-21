import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://concise-clam-54.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret':
        'QcoaTyYoDA1xtJTYKof7lZ7PGdIh1XfaS029zJCbuh1qzs0yfHEhon4aX2yMkMCL',
        
    },
});

export default client;