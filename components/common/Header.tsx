import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import SideMenuBar from './SideMenuBar'
import { Drawer, Hidden } from '@material-ui/core'

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false)

  const handleMenuPoper = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <>
      <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" />
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
      <Drawer open={isOpenMenu}>
        <img
          style={{
            margin: '0 auto',
            maxWidth: '200px',
            padding: '30px',
          }}
          src="/images/logo.png"
        />
        <SideMenuBar handleClose={handleMenuPoper} />
      </Drawer>
    </>
  )
}
export default Header
