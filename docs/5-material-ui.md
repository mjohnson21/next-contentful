# Material UI

At some point, you have to give up on the idea of every bit of code being bespoke. But that's not what I really love about Material. 

I think the big wins come in a couple of piece, which you can use without all the other components. 

1. The Theme and `ThemeProvider` is crazy powerful, especially the breakpoint system. Personally, I've always hated writing media queries. It's a bit more verbose that what I'd like in terms of some of the values, alas.
2. You've got several CSS in JS flavors to write in. I currently prefer `styled-components`. 
3. The `Box` component from `system` grants a massive amount of styleabliity without ever having to write css. 

So let's get started. Like Next's `/examples` directly, Material UI has the info we need in their [example project](https://github.com/mui-org/material-ui/tree/master/examples/nextjs).

```
yarn add @material-ui/styles @material-ui/core
```

Much of Material's magic comes from the the theme, so let's start there by creating `src/config/theme.js`.

```
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: '#fff',
    },
  },
})

export default theme
```

Next, we'll need to get our application wrappedin the ThemeProvider component, which will share our theme with all components. 

```
// pages/_app.js
// add the imports
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/config/theme'

// wrap our component return with ThemeProvider and CssBaseline
<ThemeProvider theme={theme}>
  {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
  <CssBaseline />
  <Component {...pageProps} />
</ThemeProvider>
```

We can test if the theme is workinb a couple of ways. First by looking in the React dev tools and finding the ThemeProvider, then checking if the theme it's providing matches what we put in. Or let's create a box and style it via those values. 

```
import Box from '@material-ui/core/Box'

function Home() {
  return (
    <Box p={4} bgcolor="primary.main" />
  )
}

export default Home
```

However, at this point it's just rendering styles client side. We need these style render SSR. This is done in the `pages/_document.js` file we have yet to create. 

For now, I'll link to the [example code](https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js) that gets this working. This is good fodder for a blog post, breaking down all the pices of how Next operates during SSR. 



