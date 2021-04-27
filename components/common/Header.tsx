import React, { useRef, useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import SideMenuBar from './SideMenuBar'
import { Drawer, Hidden, withTheme } from '@material-ui/core'
import styled from 'styled-components'
import Logo from './Logo'
import SunIcon from '@material-ui/icons/BrightnessLow'
import MoonIcon from '@material-ui/icons/Brightness2'

const MySearchIcon = styled(withTheme(SearchIcon))((props) => ({
  color: props.theme.app.title,
}))
const MyMenuIcon = styled(withTheme(MenuIcon))((props) => ({
  color: props.theme.app.title,
}))
const MyThemeIcon = styled(withTheme(IconButton))((props) => ({
  float: 'right',
  color: props.theme.app.title,
}))
const SearchItem = styled.input`
  border: none;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
  background: none;
  color: ${(props) => props.theme.app.title};
`
const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isOpenSearch, setIsOpenSearch] = useState(false)

  const handleMenuPoper = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  const onKeyPress = (e: any) => {
    if (e.key == 'Enter') {
      const value = e.target.value
      location.href = '/?keyword=' + value
    }
  }
  const toggleDrawer = () => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }
    setIsOpenMenu(!isOpenMenu)
  }
  return (
    <>
      <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" />
      <Hidden mdUp>
        <IconButton
          onClick={handleMenuPoper}
          aria-label="display more actions"
          edge="end"
          color="inherit"
        >
          <MyMenuIcon />
        </IconButton>
      </Hidden>
      <IconButton
        aria-label="search"
        color="inherit"
        onClick={() => setIsOpenSearch(!isOpenSearch)}
      >
        <MySearchIcon />
      </IconButton>
      <MyThemeIcon
        onClick={handleMenuPoper}
        aria-label="display more actions"
        edge="end"
        color="inherit"
      >
        <MoonIcon />
      </MyThemeIcon>
      {isOpenSearch && <SearchItem placeholder="검색어를 입력해주세요." onKeyPress={onKeyPress} />}
      <Drawer open={isOpenMenu} anchor="left" onClose={toggleDrawer()}>
        <Logo />
        <SideMenuBar handleClose={handleMenuPoper} />
      </Drawer>
    </>
  )
}
export default Header
