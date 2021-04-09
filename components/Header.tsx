import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import React, { useState } from 'react'
import { ProfilePop } from './pop/ProfilePop'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import { SideMenuBar } from './SideMenuBar'
import { Hidden } from '@material-ui/core'
import { VCategories } from './VCategories'
import Link from 'next/link'
import { SiteMeta } from '../site.config'

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

  const [isOpenInfo, setIsOpenInfo] = useState<null | HTMLElement>(null)
  const [isOpenMenu, setIsOpenMenu] = React.useState(false)

  const handleInfoClick = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpenInfo(event.currentTarget)
  }
  const handleInfoClose = () => {
    setIsOpenInfo(null)
  }
  const handleMenuPoper = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar className={classes.frame}>
          <Typography variant="h6" className={classes.title}>
            <Link href="/">{SiteMeta.title}</Link>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleInfoClick}
            >
              <ArrowDropDownIcon />
            </IconButton>
            <ProfilePop anchorEl={isOpenInfo} handleClose={handleInfoClose} />
            <Hidden smDown>
              <VCategories />
            </Hidden>
          </Typography>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <Hidden mdUp>
            <IconButton
              onClick={handleMenuPoper}
              aria-label="display more actions"
              edge="end"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <SideMenuBar open={isOpenMenu} handleClose={handleMenuPoper} />
        </Toolbar>
      </AppBar>
    </div>
  )
}
