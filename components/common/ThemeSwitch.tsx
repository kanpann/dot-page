import { withTheme } from '@material-ui/core'
import { styled as muiStyled } from '@material-ui/core/styles'
import SunIcon from '@material-ui/icons/BrightnessLow'
import MoonIcon from '@material-ui/icons/Brightness2'
import IconButton from '@material-ui/core/IconButton'
import { DefaultTheme } from '../../theme/Theme'
import React from 'react'
import { ThemeCtxConsumer } from '../provider/ThemeCtxProvider'

const MyThemeIcon = muiStyled(withTheme(IconButton))((props: DefaultTheme) => ({
  float: 'right',
  color: props.theme.app.title,
  paddingLeft: '10px'
}))

const ThemeSwitch = () => {
  return (
    <ThemeCtxConsumer>
    {
      ({ theme, fn }) => (
        <MyThemeIcon onClick={fn} aria-label="display more actions" edge="end" color="inherit">
          {theme=='light'? <SunIcon/>:<MoonIcon/>}
        </MyThemeIcon>
      )
    }
    </ThemeCtxConsumer>
  )
}

export default ThemeSwitch
