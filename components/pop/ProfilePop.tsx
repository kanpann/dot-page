import React from 'react'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { StyledMenu, StyledMenuItem } from './common'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import RssFeedIcon from '@material-ui/icons/RssFeed'
import { SiteMeta } from '../../site.config'

type ProfilePopProps = {
  handleClose: () => void
  anchorEl: HTMLElement | null
}
export function ProfilePop({ anchorEl, handleClose }: ProfilePopProps) {
  return (
    <>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={() => (location.href = SiteMeta.github)}>
          <ListItemIcon>
            <GitHubIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Github" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon onClick={() => (location.href = `mailto:${SiteMeta.email}`)}>
            <EmailIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Email" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => (location.href = '/rss.xml')}>
          <ListItemIcon>
            <RssFeedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Rss" />
        </StyledMenuItem>
      </StyledMenu>
    </>
  )
}
