import React from 'react'
import { Avatar, Drawer, Grid, Typography } from '@material-ui/core'
import { SiteMeta, Category } from '../site.config'
import { HCategories } from './HCategories'

type SideMenuProps = {
  open: boolean
}
export const SideMenuBar = ({ open }: SideMenuProps) => {
  const { title, profileImage, author } = SiteMeta
  return (
    <Drawer open={open}>
      <Grid
        style={{ padding: '10px 50px' }}
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid>
          <Typography variant="h3">{title}</Typography>
          <Avatar src={profileImage} />
        </Grid>
        <Grid>{author}</Grid>
        <Grid>
          <HCategories />
        </Grid>
      </Grid>
    </Drawer>
  )
}
