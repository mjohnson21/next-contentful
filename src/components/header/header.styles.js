import { styled } from '@material-ui/styles'

export const HeaderRoot = styled('div')(({ theme }) => ({
  background: theme.palette.grey[100],
  color: theme.palette.secondary.main,
  padding: theme.spacing(4),
}))
