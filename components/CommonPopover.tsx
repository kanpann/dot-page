import React from 'react'
import { Popover } from '@material-ui/core'

type CommonPopoverProps = {
  id: any
  open: any
  anchorEl: any
  handleClose: any
  children: any
  top: number
  left: number
}

export const CommonPopover = ({
  id,
  open,
  anchorEl,
  handleClose,
  top,
  left,
  children,
}: CommonPopoverProps) => {
  return (
    <Popover
      anchorReference="anchorPosition"
      anchorPosition={{ top: top, left: left }}
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      {children}
    </Popover>
  )
}
