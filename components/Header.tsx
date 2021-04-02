import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import { useState } from 'react'
import { ProfilePop } from './pop/ProfilePop'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    frame: {
      height: '80px',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
)

export const Header = () => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar className={classes.frame}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Avatar src="https://avatars.githubusercontent.com/u/45007556?v=4" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Gunkim
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <ArrowDropDownIcon />
            </IconButton>
            <ProfilePop anchorEl={anchorEl} handleClose={handleClose} />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
