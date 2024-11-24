// lib/apollo-server-client.ts
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";

const serverApolloClient = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.APP_URL}/graphql`, 
    fetch,
  }),
  cache: new InMemoryCache(),
});

export default serverApolloClient;
