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

Shell.defaultProps = {}

export default Shell
