import { withTheme } from '@material-ui/core'
import { styled as muiStyled } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import { DefaultTheme } from '../../theme/Theme'
import React from 'react'
import { ThemeCtxConsumer } from '../provider/ThemeCtxProvider'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness4Icon from '@material-ui/icons/Brightness4'

const MyThemeIcon = muiStyled(withTheme(IconButton))((props: DefaultTheme) => ({
  float: 'right',
  color: props.theme.app.title,
  paddingLeft: '10px',
}))

const ThemeSwitch = () => {
  return (
    <ThemeCtxConsumer>
      {({ theme, fn }) => (
        <MyThemeIcon onClick={fn} aria-label="display more actions" edge="end" color="inherit">
          {theme == 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
        </MyThemeIcon>
      )}
    </ThemeCtxConsumer>
  )
}

export default ThemeSwitch
