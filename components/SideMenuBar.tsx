import React from 'react'
import {
  Avatar,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { SiteMeta } from '../site.config'
import { Categories } from './Categories'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    frame: {
      padding: '10px',
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
    },
  }),
)

type SideMenuProps = {
  handleClose?: () => void
}
export const SideMenuBar = ({ handleClose }: SideMenuProps) => {
  const classes = useStyles()
  const { title, profileImage, author } = SiteMeta
  return (
    <>
      <Grid
        className={classes.frame}
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid>
          <Avatar src={profileImage} className={classes.image} />
        </Grid>
        <Grid>
          <Typography variant="h5">{author}</Typography>
        </Grid>
        <Grid>
          <Typography variant="h4" className={classes.category}>
            카테고리
          </Typography>
          <hr />
          <Categories />
          <hr />
        </Grid>
      </Grid>
      {handleClose && (
        <IconButton onClick={handleClose} className={classes.back}>
          <ArrowBackIcon />
        </IconButton>
      )}
    </>
  )
}
