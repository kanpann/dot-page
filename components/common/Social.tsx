import React from "react"
import Link from "next/link"
import styled from "styled-components"
import { DefaultTheme } from '../../theme/Theme'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import RssFeedIcon from '@material-ui/icons/RssFeed'

const Frame = styled.div`
  cursor: pointer;
  margin-top: 20px;
  color: ${(props: DefaultTheme) => props.theme.app.title};
  span {
    margin: 10px;
  }
`

type SocialProps = {
  github: string;
  email: string;
}
const Social = ({github, email}: SocialProps) => {
    return (
        <Frame>
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
      </Frame>
    )
}
export default Social