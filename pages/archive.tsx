import React, { memo } from 'react'
import { getSortedPostsData } from '../lib/posts'
import { Post } from '../types/post'
import { Layout } from '../components/common'
import { generateRss, generateRobots, generateSitemap } from '../lib/meta'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@material-ui/lab'
import { Typography } from '@material-ui/core'
import Link from 'next/link'

type ArchiveProps = {
  posts: Post[]
}
const Archive = ({ posts }: ArchiveProps) => {
  const obj = {}
  posts.forEach((post: Post) => {
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
  const posts: Post[] = await getSortedPostsData()
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
