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
import React, { useState } from 'react'
import { ProfilePop } from './pop/ProfilePop'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import Popover from '@material-ui/core/Popover'
import Button from '@material-ui/core/Button'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TreeItem from '@material-ui/lab/TreeItem'
import { MenuList } from './MenuList'
import { CommonPopover } from './CommonPopover'

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
    typography: {
      padding: theme.spacing(2),
    },
  }),
)

export const Header = () => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.currentTarget)
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  //-----
  const [anchorEl2, setAnchorEl2] = React.useState<HTMLButtonElement | null>(null)

  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget)
  }

  const handleClose2 = () => {
    setAnchorEl2(null)
  }

  const open = Boolean(anchorEl2)
  const id = open ? 'simple-popover' : undefined

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar className={classes.frame}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            href="/"
          >
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
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton
            aria-describedby={id}
            onClick={handleClick2}
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <CommonPopover id={id} open={open} anchorEl={anchorEl2} handleClose={handleClose2}>
            <MenuList />
          </CommonPopover>
        </Toolbar>
      </AppBar>
    </div>
  )
}
