import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const Header = (props) => {
  const {
    title,
  } = props

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: 'Hello',
}

export default Header
