import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import Header from './index'

describe('<Header/>', () => {
  let shallow

  beforeAll(() => {
    shallow = createShallow()
  })

  it('renders without error', () => {
    shallow(<Header />)
  })
})
