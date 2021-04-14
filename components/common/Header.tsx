import React, { useRef, useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import SideMenuBar from './SideMenuBar'
import { Drawer, Hidden } from '@material-ui/core'
import styled from 'styled-components'

const SearchItem = styled.input`
  border: none;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
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
          <MenuIcon />
        </IconButton>
      </Hidden>
      <IconButton
        aria-label="search"
        color="inherit"
        onClick={() => setIsOpenSearch(!isOpenSearch)}
      >
        <SearchIcon />
      </IconButton>
      {isOpenSearch && <SearchItem placeholder="검색어를 입력해주세요." onKeyPress={onKeyPress} />}
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
