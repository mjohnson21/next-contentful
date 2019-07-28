# App Shell

Every project needs a root level component to add global concerns. One common convention is a `<Shell>` commponent that has the global header and footer. So let's start there.

Let's start by creating the components. 

```
yarn generate component shell
yarn generate component header
```

Then we'll add the Header to the shell, and prep it for wrapping our App. 

```
// shell.jsx

import PropTypes from 'prop-types'
import Header from '@components/header'
import { ShellRoot } from './shell.styles'

const Shell = (props) => {
  const {
    children,
  } = props

  return (
    <ShellRoot>
      <Header />
      {children}
    </ShellRoot>
  )
}

Shell.propTypes = {
  children: PropTypes.any,
}

export default Shell
```

Then we wrap Component component in `_app.js` with our shell. Now we'll have the global header on every page.

```
return (
  <Container>
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Shell>
          <Component {...pageProps} />
        </Shell>
      </ThemeProvider>
    </ApolloProvider>
  </Container>
)
  ```
