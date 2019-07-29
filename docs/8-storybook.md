# Storybook

Step one, install the dependencies. 

```
yarn add -D @storybook/react @storybook/addons @storybook/addon-viewport @storybook/addon-links @storybook/addon-knobs @storybook/addon-actions
```

Then we add the scripts to our package.json

```
// package.json
"storybook": "start-storybook -p 6006",
"build-storybook": "build-storybook"
```

Next we need a configuration. After we create a `.storybook` directory, we'll put our configuraiton there.

```
// .storybook/addons.js
import '@storybook/addon-actions/register'
import '@storybook/addon-links/register'
import '@storybook/addon-viewport/register'
import '@storybook/addon-knobs/register'
import 'storybook-readme/register'

// .storybook/config.js
import { configure, addDecorator, addParameters } from '@storybook/react'
import { themes, create } from '@storybook/theming'
import { addReadme } from 'storybook-readme'
import { ThemeProvider } from '@material-ui/styles'
import themeMUI from '../src/config/theme'

const theme = create({
  brandTitle: 'Next Starter'
})

addDecorator(addReadme)

addParameters({
  options: {
    theme: theme,
  },
  readme: {
    codeTheme: 'github',
  }
})

function requireAll(r) {
  r.keys().forEach(r)
}

function loadStories() {
  requireAll(
    require.context('./', true, /\.stories\.js$/)
  )
  requireAll(
    require.context('../src/components', true, /\.stories\.js$/)
  )
}

addDecorator(story => (
  <ThemeProvider theme={themeMUI}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);

```


