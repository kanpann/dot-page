import React, { memo } from 'react'
import { getSortedPostsData } from '../lib/posts'
import { Post } from '../lib/types'
import Layout from '../components/common/Layout'
import generateRss from '../lib/meta/feed'
import generateSitemap from '../lib/meta/sitemap'
import generateRobots from '../lib/meta/robots'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import Typography from '@material-ui/core/Typography'
import { TimelineOppositeContent } from '@material-ui/lab'
import Link from 'next/link'

type ArchiveProps = {
  posts: Post[]
}
const Archive = ({ posts }: ArchiveProps) => {
  const obj = {}
  posts.forEach((post) => {
    const yyyyMm = post.date.substr(0, 7)
    if (obj[yyyyMm] == undefined) {
      obj[yyyyMm] = [post]
    } else {
      obj[yyyyMm] = [...obj[yyyyMm], post]
    }
  })
  return (
    <Layout>
      <Timeline>
        {Object.keys(obj).map((key) => {
          const target = obj[key]
          return (
            <TimelineItem>
              <TimelineOppositeContent style={{ flex: 0, paddingTop: '0px' }}>
                <Typography variant="h5" color="textPrimary">
                  {key}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                {target.map((element) => {
                  return (
                    <Typography color="textSecondary" variant="subtitle1" paragraph={true}>
                      -{' '}
                      <Link href={element.id}>
                        <a>{element.title}</a>
                      </Link>
                    </Typography>
                  )
                })}
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const posts = await getSortedPostsData()
  generateRss(posts)
  generateSitemap(posts)
  generateRobots()

  return {
    props: {
      posts,
    },
  }
}
export default memo(Archive)
