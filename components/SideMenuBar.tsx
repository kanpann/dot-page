import React from 'react'
import {
  Avatar,
  createStyles,
  Drawer,
  Grid,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { SiteMeta } from '../site.config'
import { HCategories } from './HCategories'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    back: {
      position: 'absolute',
      bottom: '0',
      padding: '20px',
    },
  }),
)

type SideMenuProps = {
  open: boolean
  handleClose: () => void
}
export const SideMenuBar = ({ open, handleClose }: SideMenuProps) => {
  const classes = useStyles()
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
      <IconButton onClick={handleClose} className={classes.back}>
        <ArrowBackIcon />
      </IconButton>
    </Drawer>
  )
}
