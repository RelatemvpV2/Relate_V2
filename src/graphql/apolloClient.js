import { ApolloClient, InMemoryCache  } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://60vj2gh56j.execute-api.eu-central-1.amazonaws.com/test/graphql',  // Replace with  GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
