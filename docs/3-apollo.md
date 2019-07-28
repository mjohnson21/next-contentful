# Apollo Client

I've gotten to use Apollo on several client project, and it's one of those things that makes a lowly front-end like myself feel immensely powerful.

Once again, Next has a [recipe]() for setting things up. First let's install our dependencies.

```bash
yarn add apollo-boost graphql isomorphic-unfetch react-apollo
```

Next, we're going to need to wrap our application in the Apollo HOC to provide access to the store, as well as initialize Apollo's connection to a remote.

First, I'm creating the `./src/lib` directory, where we'll keep the `init-apollo.js` and `with-apollo-client.js`. Instead of posting the code, I'll link the example repo here, since I'm not deviating for now. 

* [init-apollo.js](https://github.com/zeit/next.js/blob/canary/examples/with-apollo/lib/init-apollo.js)
* [with-apollo-client.js](https://github.com/zeit/next.js/blob/canary/examples/with-apollo/lib/with-apollo-client.js)

Next we need to wrap our application with the HOC, so that our component tree can access the store. To allow for this, NextJS let's us get into that layer by creating a `./pages/_app.js` file.

* [/pages/_app.js](https://github.com/zeit/next.js/blob/canary/examples/with-apollo/pages/_app.js)

At this point we should be able to see the component in our React dev tools, and the Apollo dev tools should also be working. This is just pointing to a public store and we'll change 


