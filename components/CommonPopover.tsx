import React from 'react'
import { Popover } from '@material-ui/core'

type CommonPopoverProps = {
  id: any
  open: any
  anchorEl: any
  handleClose: any
  children: any
}

export const CommonPopover = ({
  id,
  open,
  anchorEl,
  handleClose,
  children,
}: CommonPopoverProps) => {
  return (
    <Popover
      anchorReference="anchorPosition"
      anchorPosition={{ top: 79, left: 1820 }}
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
