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
