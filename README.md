# next-starter

A starter project for mixing Next JS and Apollo, with MUI, component generators, and some other helpful pieces.

Here are the major steps that I want to recreate. 

* [x] [Next JS](./docs/1-next.md)
* [x] [ESLint, Jest, Directory Aliasing](./docs/2-eslint.md)
* [x] [Apollo Client](./docs/3-apollo.md)
* [x] [Serverless](./docs/4-serverless.md)
* [x] [Material UI](./docs/5-material-ui.md)
* [x] [Generators](./docs/6-generators.md)
* [x] [Storybook](./docs/8-storybook.md)

## Getting Started

```bash
$ nvm install
$ nvm use
$ yarn
```

Once all the deps are up, you can run the development server.

```bash
# -- LOCAL DEVELOPMENT --
# run the project locally with HMR
# NOTE: make sure there is no `assetPrefix` in `next.config.js`
# TODO: set up an `env` check to conditionally set `assetPrefix`

$ yarn dev

# -- SERVERLESS DEVELOPMENT --
# run the project in serverless mode locally. does not support HMR
# TODO: fix asset location when running `serverless offline`

$ serverless offline
```


## Deployment

```bash
$ serverless deploy

# to deploy a single page, use the following with the page file 
# name + "Page". for example, to deploy `pages/home.js`, you run:

$ serverless deploy function --function homePage

```

## Styling, Theming and Components

This project uses Material-UI's styling solution as a way to bridge their component library with the ones needed for this project. Most style values such as spacign, colors, media queries and type treatments should come from values from the `ThemeProvider`. 


### Generating New Components

Full documentation for component development can be found [here](docs/component-development.md).

This project uses [Plop](https://github.com/amwmedia/plop) to generate component templates, as defined in `generators/plopfile.js`. 

```bash
yarn generate component foo
```

Which generates...

```
components/foo/index.js
components/foo/foo.js
components/foo/foo.styles.js
components/foo/foo.test.js
components/foo/foo.stories.js
components/foo/README.md
```

## Pages

NextJS uses the `/pages` directory to define routes. Each file in this directory 
becomes routable. To enable advanced routing, such as to an `article/slug` location,
edit the `serverless.yml` file.


### Unit Testing
The Second level of code quality comes via Unit Testing. At minimum, all new components should be
created with Unit tests. 

* [Material UI testing](https://material-ui.com/guides/testing/)
* [Jest](https://jestjs.io/docs/en/tutorial-react)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/example-intro)
* [Enzyme](https://airbnb.io/enzyme/docs/installation/index.html)
