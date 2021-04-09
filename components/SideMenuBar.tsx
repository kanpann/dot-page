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
import Link from 'next/link'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    frame: {
      padding: '10px 50px',
    },
    back: {
      position: 'absolute',
      bottom: '0',
      padding: '20px',
    },
    image: {
      width: '80px',
      height: '80px',
      margin: '0 auto',
    },
    category: {
      marginTop: '30px',
      textAlign: 'center',
      borderBottom: '1px solid black',
    },
    bottom: {
      borderBottom: '1px solid black',
      width: '100%',
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
        className={classes.frame}
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid>
          <Typography variant="h3">
            <Link href="/">{title}</Link>
          </Typography>
          <Avatar src={profileImage} className={classes.image} />
        </Grid>
        <Grid>
          <Typography variant="h5">{author}</Typography>
        </Grid>
        <Grid>
          <Typography variant="h4" className={classes.category}>
            카테고리
          </Typography>
          <HCategories />
          <div className={classes.bottom}></div>
        </Grid>
      </Grid>
      <IconButton onClick={handleClose} className={classes.back}>
        <ArrowBackIcon />
      </IconButton>
    </Drawer>
  )
}
