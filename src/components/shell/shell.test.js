import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import Shell from './index'

describe('<Shell/>', () => {
  let shallow

  beforeAll(() => {
    shallow = createShallow()
  })

  it('renders without error', () => {
    shallow(<Shell />)
  })
})
