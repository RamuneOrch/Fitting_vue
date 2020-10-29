import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';
import { onError } from 'apollo-link-error'

// import { setContext } from 'apollo-link-context';


Vue.use(VueApollo);

const httpLink = new HttpLink({
  uri: `http://cosmeticfitting.com/graphql`
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
          console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
      )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const apolloClient = new ApolloClient({
  // Tells Apollo to use the link chain with the http link we set up.
  link: errorLink.concat(httpLink),
  // Handles caching of results and mutations.
  cache: new InMemoryCache(),
  // Useful if you have the Apollo DevTools installed in your browser.
  connectToDevTools: true,
});





Vue.config.productionTip = false

const apolloProvider = new VueApollo({
  // Apollo 2.0 allows multiple clients to be enabled at once.
  // Here we select the default (and only) client.
  defaultClient: apolloClient,
});

new Vue({
  router,
  store,
  provide: apolloProvider.provide(),
  render: h => h(App)
}).$mount('#app')
