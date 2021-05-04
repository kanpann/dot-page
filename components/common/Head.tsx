import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Hidden, withTheme } from '@material-ui/core'
import { styled as muiStyled } from '@material-ui/core/styles'
import { DefaultTheme } from '../../theme/Theme'
import SearchForm from './SearchForm'
import ThemeSwitch from './ThemeSwitch'

const MyMenuIcon = muiStyled(withTheme(MenuIcon))((props: DefaultTheme) => ({
  color: props.theme.app.title,
}))

const Head = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleMenuPoper = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <>
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
      <SearchForm />
      <ThemeSwitch />
    </>
  )
}
export default Head
