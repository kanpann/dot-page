import { withTheme } from '@material-ui/core'
import { styled as muiStyled } from '@material-ui/core/styles'
import SunIcon from '@material-ui/icons/BrightnessLow'
import MoonIcon from '@material-ui/icons/Brightness2'
import IconButton from '@material-ui/core/IconButton'
import { DefaultTheme } from '../../theme/Theme'
import React from 'react'

const MyThemeIcon = muiStyled(withTheme(IconButton))((props: DefaultTheme) => ({
  float: 'right',
  color: props.theme.app.title,
}))

const ThemeSwitch = () => {
  return (
    <>
      <MyThemeIcon onClick={() => {}} aria-label="display more actions" edge="end" color="inherit">
        <MoonIcon />
      </MyThemeIcon>
    </>
  )
}

export default ThemeSwitch
