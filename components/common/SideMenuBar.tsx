import React from 'react'
import { Avatar, createStyles, Grid, IconButton, makeStyles, Typography } from '@material-ui/core'
import { SiteMeta } from '../../site.config'
import Categories from './Categories'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import RssFeedIcon from '@material-ui/icons/RssFeed'
import Link from 'next/link'
import styled from 'styled-components'

const useStyles = makeStyles(() =>
  createStyles({
    frame: {
      padding: '10px',
    },
    back: {
      position: 'fixed',
      bottom: '0',
      padding: '20px',
      width: '20px',
      height: '20px',
    },
    image: {
      width: '80px',
      height: '80px',
      margin: '0 auto',
    },
    category: {
      marginTop: '30px',
      textAlign: 'center',
      fontWeight: 300,
      borderBottom: '1px solid black',
      paddingBottom: '10px',
    },
  }),
)

const Name = styled.div`
  color: ${(props) => props.theme.color.title};
  font-size: 1.5rem;
  padding-top: 10px;
  padding-bottom: 10px;
`
const InfoFrame = styled.div`
  text-align: center;
  color: ${(props) => props.theme.color.font};
`
const Contents = styled.p`
  width: 80%;
  margin: 0 auto;
  text-shadow: 5px 5px 10px #656565;
`
const Social = styled.div`
  cursor: pointer;
  margin-top: 20px;
  color: ${(props) => props.theme.color.title};
  span {
    margin: 10px;
  }
`

type SideMenuProps = {
  handleClose?: () => void
}
const SideMenuBar = ({ handleClose }: SideMenuProps) => {
  const classes = useStyles()
  const { profileImage, info } = SiteMeta
  const { github, email, author, descript } = info
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
          <InfoFrame>
            <Avatar src={profileImage} className={classes.image} />
            <Name>{author}</Name>
            <Contents>{descript}</Contents>
            <Social>
              {github && (
                <Link href={github}>
                  <span>
                    <GitHubIcon />
                  </span>
                </Link>
              )}
              {email && (
                <Link href={`mailto:${email}`}>
                  <span>
                    <EmailIcon />
                  </span>
                </Link>
              )}
              <Link href="/feed.xml">
                <span>
                  <RssFeedIcon />
                </span>
              </Link>
            </Social>
          </InfoFrame>
        </Grid>
        <Grid style={{ width: '80%' }}>
          <Typography variant="h5" className={classes.category}>
            Categories
          </Typography>
          <Categories />
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
export default SideMenuBar
