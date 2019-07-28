import React from 'react'
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Header from './header'
import ReadMe from './README.md'

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .addParameters({ readme: { sidebar: ReadMe } })
  .add('with knobs', () => {
    const title = text('title', 'Title')
    return (
      <Header title={title} />
    )
  })
