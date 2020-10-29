import Vue from 'vue';
import App from './App.vue';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';

const httpLink = new HttpLink({
    uri = "http://cosmeticfitting.com/graphql"
})

const link = httpLink;

const apolloClient = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    connentToDevTools: true
})

Vue.use(Vueapollo)