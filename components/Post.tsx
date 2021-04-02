import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import Date from './date'

type PostProps = {
  title: string
  date: string
  image: string
}
export const Post = ({ title, date, image }: PostProps) => {
  return (
    <>
      <Grid xs={10} item>
        <Typography variant="h6">{title}</Typography>
        <p>
          세션 로그인 같은 경우 매번 요청이 있을 때마다 세션 시간이 자동 갱신이 되기 때문에 필요가
          없지만, JWT 같은 경우 토큰의 유효기간이 이미 발급과 동시에 정해지게 된다. 그래서 만약 JWT
          토큰을 연장하기 위한 방법은 다시 재발급을 하는 방법밖에 없는데, 그렇게 되면 기존에
          방식대로면 사용자가 직접 로그인을 한 번 더 해주어야 한다. 사이트를 이용하다…
        </p>
        <Date date={date} />
      </Grid>
      <Grid xs={2} item>
        <img style={{ width: '100%', height: '100%' }} src={image} />
      </Grid>
    </>
  )
}
