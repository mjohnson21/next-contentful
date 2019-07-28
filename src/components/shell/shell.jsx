import PropTypes from 'prop-types'
import Header from '@components/header'
import { ShellRoot } from './shell.styles'

const Shell = (props) => {
  const {
    children,
  } = props

  return (
    <ShellRoot>
      <Header title="App Name" />
      {children}
    </ShellRoot>
  )
}

Shell.propTypes = {
  children: PropTypes.any,
}

export default Shell
