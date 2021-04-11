import { IconButton } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { CommonPopover } from './CommonPopover'
import styled from 'styled-components'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '10px 20px',
    },
    menuButton: {
      paddingRight: theme.spacing(2),
    },
  }),
)

const Item = styled.div`
  margin-bottom: '100px;
`

type SubMenuProps = {
  mainMenu: any
}

export const SubMenu = ({ mainMenu }: SubMenuProps) => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [position, setPosition] = React.useState({ posX: 0, posY: 0 })

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setPosition({
      posX: event.clientX,
      posY: event.clientY + 25,
    })
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const { posX, posY } = position
  const open = Boolean(anchorEl)
  const id = open ? 'transitions-popper' : undefined

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
        aria-describedby={id}
      >
        <ArrowDropDownIcon />
      </IconButton>
      <CommonPopover
        open={open}
        id={id}
        anchorEl={anchorEl}
        handleClose={handleClick}
        top={posY}
        left={posX}
      >
        <div className={classes.root}>
          {Object.keys(mainMenu['sub']).map((subCategoryName) => {
            return <Item>{subCategoryName}</Item>
          })}
        </div>
      </CommonPopover>
    </>
  )
}
